"use client";;
import {
  createContext,
  use,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { flushSync } from "react-dom";

const VIEW_TRANSITION_NAME = "active-gallery-image";

const ImageGalleryContext = createContext(null);

export function useImageGallery() {
  const context = use(ImageGalleryContext);
  if (!context) {
    throw new Error("useImageGallery must be used within ImageGalleryProvider");
  }
  return context;
}

function supportsViewTransitions() {
  return (typeof document !== "undefined" &&
  "startViewTransition" in document &&
  typeof window !== "undefined" && !window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches);
}

function withViewTransition(element, domUpdate, onFinished) {
  if (!supportsViewTransitions()) {
    domUpdate();
    onFinished?.();
    return;
  }

  element.style.viewTransitionName = VIEW_TRANSITION_NAME;

  const transition = document.startViewTransition(() => domUpdate());

  transition.finished.finally(() => {
    element.style.removeProperty("view-transition-name");
    onFinished?.();
  });
}

export function ImageGalleryProvider({
  images,
  children
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const imageElementsRef = useRef(new Map());
  const lightboxContentRef = useRef(null);
  const dialogRef = useRef(null);
  const originalParentRef = useRef(null);

  const registerImage = useCallback((id, element) => {
    if (element) {
      imageElementsRef.current.set(id, element);
    } else {
      imageElementsRef.current.delete(id);
    }
  }, []);

  const setDialogRef = useCallback((element) => {
    dialogRef.current = element;
  }, []);

  const openLightbox = useCallback((index) => {
    const image = images[index];
    if (!image) return;

    const imageElement = imageElementsRef.current.get(image.id);
    const container = lightboxContentRef.current;
    const dialog = dialogRef.current;

    if (!imageElement || !container || !dialog) {
      setActiveIndex(index);
      dialog?.showModal();
      return;
    }

    originalParentRef.current = imageElement.parentElement;

    withViewTransition(imageElement, () => {
      container.appendChild(imageElement);
      flushSync(() => setActiveIndex(index));
      dialog.showModal();
    });
  }, [images]);

  const closeLightbox = useCallback(() => {
    if (activeIndex === null) return;

    const image = images[activeIndex];
    const dialog = dialogRef.current;

    if (!image) {
      setActiveIndex(null);
      dialog?.close();
      return;
    }

    const imageElement = imageElementsRef.current.get(image.id);
    const originalParent = originalParentRef.current;

    if (!imageElement || !originalParent) {
      setActiveIndex(null);
      dialog?.close();
      return;
    }

    withViewTransition(imageElement, () => {
      originalParent.appendChild(imageElement);
      flushSync(() => setActiveIndex(null));
      dialog?.close();
    }, () => {
      originalParentRef.current = null;
    });
  }, [activeIndex, images]);

  const value = useMemo(() => ({
    images,
    activeIndex,
    openLightbox,
    closeLightbox,
    registerImage,
    lightboxContentRef,
    setDialogRef,
  }), [
    images,
    activeIndex,
    openLightbox,
    closeLightbox,
    registerImage,
    setDialogRef,
  ]);

  return (
    <ImageGalleryContext.Provider value={value}>
      {children}
    </ImageGalleryContext.Provider>
  );
}

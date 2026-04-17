"use client";;
import { useRef, useCallback } from "react";
import { cn, Button, X } from "./_adapter";
import { useImageGallery } from "./context";
import { resolveSafeNavigationHref } from "../shared/media";

export function GalleryLightbox() {
  const dialogRef = useRef(null);

  const {
    images,
    activeIndex,
    closeLightbox,
    lightboxContentRef,
    setDialogRef,
  } = useImageGallery();

  const isOpen = activeIndex !== null;
  const currentImage = isOpen ? images[activeIndex] : null;

  const handleDialogRef = useCallback((element) => {
    dialogRef.current = element;
    setDialogRef(element);
  }, [setDialogRef]);

  const handleBackdropClick = useCallback((e) => {
    if (e.target === dialogRef.current) {
      closeLightbox();
    }
  }, [closeLightbox]);

  const handleCancel = useCallback((e) => {
    e.preventDefault();
    closeLightbox();
  }, [closeLightbox]);

  return (
    <dialog
      ref={handleDialogRef}
      onClick={handleBackdropClick}
      onCancel={handleCancel}
      className={cn(
        "m-0 h-full max-h-full w-full max-w-full",
        "overflow-hidden p-0",
        "bg-transparent backdrop:bg-black/95 dark:backdrop:bg-black/90",
        "focus-visible:outline-none"
      )}
      aria-label="Image lightbox">
      <div className="relative h-full w-full">
        {isOpen && <CloseButton onClose={closeLightbox} />}
        <div
          className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 p-8">
          <div
            ref={lightboxContentRef}
            className={cn(
              "pointer-events-auto relative w-fit max-w-full overflow-hidden rounded-lg shadow-2xl",
              "[&>img]:block [&>img]:max-h-[80vh] [&>img]:max-w-full",
              "[&>img]:h-auto [&>img]:w-auto [&>img]:object-contain [&>img]:select-none"
            )} />
          {currentImage && <Metadata image={currentImage} />}
        </div>
      </div>
    </dialog>
  );
}

function CloseButton({
  onClose
}) {
  return (
    <div className="absolute top-4 right-4 z-20">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="text-white/80 hover:bg-white/10 hover:text-white"
        aria-label="Close">
        <X className="h-5 w-5" />
      </Button>
    </div>
  );
}

function Metadata({
  image
}) {
  const { title, caption, source } = image;
  const hasTitle = Boolean(title);
  const hasCaption = Boolean(caption);
  const hasSource = Boolean(source?.label);

  if (!hasTitle && !hasCaption && !hasSource) {
    return null;
  }

  return (
    <div className="text-center">
      {hasTitle && (
        <h3 className="text-base font-medium tracking-tight text-white">
          {title}
        </h3>
      )}
      {(hasCaption || hasSource) && (
        <p className="mt-1 text-sm text-white/60">
          {caption}
          {hasCaption && hasSource && " · "}
          {hasSource && <SourceLink source={source} />}
        </p>
      )}
    </div>
  );
}

function SourceLink({
  source
}) {
  const href = resolveSafeNavigationHref(source.url);
  if (!href) {
    return <>{source.label}</>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white/80 hover:underline">
      {source.label}
    </a>
  );
}

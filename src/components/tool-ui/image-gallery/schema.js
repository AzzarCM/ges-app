import { z } from "zod";
import { defineToolUiContract } from "../shared/contract";
import {
  ToolUIIdSchema,
  ToolUIReceiptSchema,
  ToolUIRoleSchema,
} from "../shared/schema";

export const ImageGallerySourceSchema = z.object({
  label: z.string(),
  url: z.string().url().optional(),
});

export const ImageGalleryItemSchema = z.object({
  id: z.string().min(1),
  src: z.string().url(),
  alt: z.string().min(1, "Images require alt text for accessibility"),
  width: z.number().positive(),
  height: z.number().positive(),
  title: z.string().optional(),
  caption: z.string().optional(),
  source: ImageGallerySourceSchema.optional(),
});

export const SerializableImageGallerySchema = z.object({
  id: ToolUIIdSchema,
  role: ToolUIRoleSchema.optional(),
  receipt: ToolUIReceiptSchema.optional(),
  images: z.array(ImageGalleryItemSchema).min(1),
  title: z.string().optional(),
  description: z.string().optional(),
});

const SerializableImageGallerySchemaContract = defineToolUiContract("ImageGallery", SerializableImageGallerySchema);

export const parseSerializableImageGallery = SerializableImageGallerySchemaContract.parse;

export const safeParseSerializableImageGallery =
  SerializableImageGallerySchemaContract.safeParse;

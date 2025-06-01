import { z } from "zod/v4";
export declare function postiveIntegerStringSchema(messageForWhenEmpty?: string, options?: {
    zeroAllowed: boolean;
}): z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
export declare function positiveNumberStringSchema(messageForWhenEmpty?: string, options?: {
    zeroAllowed: boolean;
}): z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;

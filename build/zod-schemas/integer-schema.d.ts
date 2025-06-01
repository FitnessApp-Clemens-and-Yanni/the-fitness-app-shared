import { z } from "zod";
export declare function postiveIntegerStringSchema(messageForWhenEmpty?: string, options?: {
    zeroAllowed: boolean;
}): z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, number, string> | z.ZodEffects<z.ZodString, number, string>;
export declare function positiveNumberStringSchema(messageForWhenEmpty?: string, options?: {
    zeroAllowed: boolean;
}): z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, number, string> | z.ZodEffects<z.ZodString, number, string>;

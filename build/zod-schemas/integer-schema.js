"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postiveIntegerStringSchema = postiveIntegerStringSchema;
exports.positiveNumberStringSchema = positiveNumberStringSchema;
const v4_1 = require("zod/v4");
function postiveIntegerStringSchema(messageForWhenEmpty, options = { zeroAllowed: true }) {
    const obj = v4_1.z
        .string({
        message: messageForWhenEmpty ?? "Please provide a valid string.",
    })
        .regex(/^\d+$/, "Please provide a valid positive integer.");
    if (options.zeroAllowed === false) {
        return obj
            .refine((str) => +str !== 0, "You cannot use 0 as a value.")
            .transform(Number);
    }
    return obj.transform(Number);
}
function positiveNumberStringSchema(messageForWhenEmpty, options = { zeroAllowed: true }) {
    const obj = v4_1.z
        .string({
        message: messageForWhenEmpty ?? "Please provide a valid string.",
    })
        .regex(/^\d+\.?\d*$/, "Please provide a valid positive number.");
    if (options.zeroAllowed === false) {
        return obj
            .refine((str) => +str !== 0, "You cannot use 0 as a value.")
            .transform(Number);
    }
    return obj.transform(Number);
}
//# sourceMappingURL=integer-schema.js.map
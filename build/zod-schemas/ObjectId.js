"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OBJECT_ID_SCHEMA = void 0;
const v4_1 = require("zod/v4");
exports.OBJECT_ID_SCHEMA = v4_1.z
    .string()
    .regex(/^[a-fA-F0-9]{24}$/, "It seems like the id provided is not a valid MongoDB ObjectId.");
//# sourceMappingURL=ObjectId.js.map
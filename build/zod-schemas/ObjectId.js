"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OBJECT_ID_SCHEMA = void 0;
const zod_1 = require("zod");
exports.OBJECT_ID_SCHEMA = zod_1.z
    .string()
    .regex(/^[a-fA-F0-9]{24}$/, "It seems like the id provided is not a valid MongoDB ObjectId.");
//# sourceMappingURL=ObjectId.js.map
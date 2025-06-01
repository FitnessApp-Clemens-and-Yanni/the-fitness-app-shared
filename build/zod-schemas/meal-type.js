"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEAL_TYPE_SCHEMA = exports.MEAL_TYPES = void 0;
const zod_1 = require("zod");
exports.MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snack"];
exports.MEAL_TYPE_SCHEMA = zod_1.z.enum(exports.MEAL_TYPES);
//# sourceMappingURL=meal-type.js.map
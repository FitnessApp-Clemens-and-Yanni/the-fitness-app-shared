import { z } from "zod";
export declare const MEAL_TYPES: readonly ["Breakfast", "Lunch", "Dinner", "Snack"];
export declare const MEAL_TYPE_SCHEMA: z.ZodEnum<["Breakfast", "Lunch", "Dinner", "Snack"]>;
export type MealType = (typeof MEAL_TYPES)[number];

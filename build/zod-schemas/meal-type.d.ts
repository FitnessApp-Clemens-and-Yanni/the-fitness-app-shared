import { z } from "zod/v4";
export declare const MEAL_TYPES: readonly ["Breakfast", "Lunch", "Dinner", "Snack"];
export declare const MEAL_TYPE_SCHEMA: z.ZodEnum<{
    Breakfast: "Breakfast";
    Lunch: "Lunch";
    Dinner: "Dinner";
    Snack: "Snack";
}>;
export type MealType = (typeof MEAL_TYPES)[number];

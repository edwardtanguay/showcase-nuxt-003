import { defineEventHandler } from "h3";
import { employees } from "./data";

export default defineEventHandler(async () => {
	// Simulate network delay
	await new Promise(resolve => setTimeout(resolve, 500));

	return employees;
});

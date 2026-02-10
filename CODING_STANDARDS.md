# Coding Standards

This document outlines the coding standards and best practices for the Nuxt 4 Showcase project.

## General

*   **Language**: TypeScript is mandatory for all new code (`.ts`, `.vue`).
*   **Formatting**: Follow the existing indentation style of the file you are editing (generally 2 spaces for Vue, tabs/4 spaces for server files).
*   **Semicolons**: Use semicolons at the end of statements.

## Frontend (Vue 3 / Nuxt 4)

### Components

*   **Syntax**: Use `<script setup lang="ts">` for all components.
*   **Naming**: Component names should be multi-word (e.g., `FeaturesGrid.vue`, `AppHeader.vue`) to comply with Vue style guide.
*   **Structure**: Order blocks as `<script setup>`, `<template>`, `<style>` (if present).
*   **Logic**: Keep logic inside `<script setup>`. Avoid Options API unless migrating legacy code.

### Styling

*   **Framework**: Tailwind CSS.
*   **Usage**: Apply utility classes directly in the template.
*   **Scoped Styles**: Avoid `<style scoped>` blocks. If custom CSS is needed, use Tailwind config or a global CSS file if strictly necessary.
*   **UI Library**: Use [Nuxt UI](https://ui.nuxt.com) components (e.g., `<UButton>`, `<UCard>`) instead of raw HTML elements where possible.
*   **Icons**: Use icons from `@heroicons/vue`.

### State Management

*   **Local State**: Use `ref` or `reactive`.
*   **Global State**: Use `useState` for shared state across components/pages.

### Data Fetching

*   **API Calls**: Use `useFetch` (for SSR-friendly data fetching) or `$fetch` (for client-side interactions).
*   **Async/Await**: Always use `async/await` for asynchronous operations.

## Backend (Server API)

### Framework

*   **Library**: [h3](https://github.com/unjs/h3).
*   **Handlers**: Define all API routes using `defineEventHandler`.

### Error Handling

*   **Utility**: Use `createError` from `h3` to throw structured errors.
*   **Status Codes**: Use appropriate HTTP status codes (e.g., 400 for bad request, 404 for not found, 500 for server error).
*   **Messages**: Provide clear, user-friendly error messages in the `statusMessage` or `data` fields.

### Validation

*   **Input**: Validate all incoming data (query params, body).
*   **Library**: Use `zod` for schema validation if complex validation logic is required.

## Shared Code

### Types

*   **Location**: Define shared interfaces and types in `shared/types.ts`.
*   **Import**: Import types using the `~~/shared/types` alias or relative paths if alias resolution fails in IDE.
*   **Consistency**: Ensure types are used consistently across both frontend and backend to guarantee type safety.

## Best Practices

*   **Type Safety**: Avoid `any`. Define interfaces for props, emits, and API responses.
*   **Clean Code**: Keep functions small and focused. Extract complex logic into utility functions in `app/lib` or `server/utils`.
*   **Comments**: Comment complex logic, but prefer self-documenting code.

# Agent Instructions for Nuxt 4 Showcase

This document provides instructions and guidelines for AI agents working on this project.

## Project Overview

*   **Framework**: Nuxt 4 (Vue 3, TypeScript).
*   **UI Library**: Nuxt UI (`@nuxt/ui`).
*   **Styling**: Tailwind CSS.
*   **State Management**: Nuxt built-in state management (useState, etc.).
*   **API**: Server routes in `server/api` using `h3`.
*   **Validation**: `zod`.

## Directory Structure

*   `app/`: Main application source code.
    *   `components/`: Vue components.
    *   `pages/`: Application pages (file-based routing).
    *   `layouts/`: Layout components.
    *   `lib/`: Utility functions.
    *   `app.config.ts`: Nuxt UI configuration (colors, etc.).
    *   `app.vue`: Main app entry point.
*   `server/`: Server-side code.
    *   `api/`: API routes (mapped to `/api/*`).
*   `shared/`: Shared code between client and server (e.g., types).
*   `public/`: Static assets.

## Standards & Conventions

Please refer to the following documents for detailed standards and conventions:

*   [**CODING_STANDARDS.md**](./CODING_STANDARDS.md): Detailed coding style, naming conventions, and best practices for Frontend (Vue/Nuxt), Backend (Server API), and Shared code.
*   [**CONVENTIONS.md**](./CONVENTIONS.md): Architectural patterns, directory structure, simulated API behavior, and data persistence strategies.

## Configuration

*   **UI Colors**: `app/app.config.ts` defines the color palette (primary, neutral, etc.).
*   **Nuxt Config**: `nuxt.config.ts` handles modules and build settings.

## Development

*   **Package Manager**: `npm`
*   **Run Dev Server**: `npm run dev`
*   **Build**: `npm run build`

## Key Implementation Details

*   **Simulated Latency**: API routes (e.g., `server/api/products.post.ts`) simulate network latency using `setTimeout`.
*   **Random Errors**: Some routes simulate random failures (500 errors).
*   **In-Memory Data**: Employee data (`server/api/employees/data.ts`) is stored in-memory and resets on server restart.

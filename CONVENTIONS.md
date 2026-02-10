# Project Conventions

This document outlines the architectural patterns, conventions, and project-specific behaviors for the Nuxt 4 Showcase application.

## Directory Structure

The project follows a standard Nuxt 4 directory structure:

*   `app/`: Contains the core application source code.
    *   `components/`: Reusable Vue components.
    *   `pages/`: Application pages utilizing file-based routing.
    *   `layouts/`: Layout components for consistent page structure.
    *   `lib/`: Utility functions and helper classes.
    *   `app.config.ts`: Configuration for Nuxt UI (colors, theme).
    *   `app.vue`: The root component of the application.
*   `server/`: Contains server-side code and API routes.
    *   `api/`: Defines API endpoints mapped to `/api/*`.
*   `shared/`: Contains code shared between the client and server (e.g., TypeScript interfaces).
*   `public/`: Static assets served directly (e.g., images, fonts).

## API & Backend Patterns

### Simulated Behavior

To demonstrate real-world scenarios in a simplified environment, the backend implements simulated behaviors:

*   **Network Latency**: Several API routes (e.g., `server/api/products.post.ts`, `server/api/employees/index.get.ts`) include artificial delays using `setTimeout` (typically 500ms - 2000ms). This allows frontend loading states to be visualized.
*   **Random Failures**: Some endpoints simulate random server errors (HTTP 500) to test frontend error handling mechanisms.

### Data Persistence

*   **In-Memory Storage**: Employee data is stored in-memory within `server/api/employees/data.ts`.
    *   **Implication**: Data modifications (create, update, delete) persist only during the runtime of the server process. Restarting the server resets the data to its initial state.
    *   **Usage**: Do not assume data persists across deployments or restarts.

## Configuration Management

*   **UI Configuration**: Visual aspects like colors and themes are managed in `app/app.config.ts`.
*   **Build Configuration**: Core Nuxt settings, modules, and build options are defined in `nuxt.config.ts`.
*   **Environment Variables**: Runtime configuration is accessed via `useRuntimeConfig()`.

## Development Workflow

*   **Command**: Use `npm run dev` to start the development server.
*   **Hot Module Replacement (HMR)**: The dev server supports HMR for rapid development.
*   **Artifacts**: Do not modify files in `.nuxt/`, `.output/`, or `dist/` directly. These are build artifacts.

## Git Conventions

*   **Commit Messages**: Follow Conventional Commits format (e.g., `feat: add new feature`, `fix: resolve bug`, `docs: update documentation`).
*   **Branching**: Use descriptive branch names (e.g., `feat/user-auth`, `fix/login-bug`).

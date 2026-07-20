---
name: frontend-component-standards
description: Senior-level ReactJS 19 and NextJS 16 component implementation standards for this codebase. Use when creating, refactoring, or reviewing widgets, shared UI, or entities in a project that must follow strict rules for functional components, TailwindCSS with cva-based style files, ui/model/lib folder structure, react-hook-form with zod validation, zustand state management, and Next.js Image usage.
---

# Frontend Component Standards

Follow these rules whenever the task involves building or refactoring frontend components in this project.

## Workflow

1. Identify the layer before creating files:
   - Put widgets in `src/widgets/`.
   - Put shared components in `src/shared/ui/`.
   - Put entities in `src/entities/`.
2. Create the feature folder with `ui`, `model`, and `lib` directories when needed.
3. Keep component rendering in `ui/`.
4. Keep types and validation schemas in `model/`.
5. Keep reusable helpers or store-adjacent utilities in `lib/`.

## Component Rules

- Use functional React components only.
- Prefer TypeScript interfaces for props.
- Keep components focused on rendering and interaction wiring.
- Move business logic out of components when a store or model-level abstraction fits better.
- Use the Next.js `Image` component instead of raw `<img>` tags.

## File Structure

When asked to create a component, use this structure:

```text
ComponentName/
  ui/
    ComponentName.tsx
    ComponentNameStyles.ts
  model/
    types.ts
  lib/
```

Create `lib/` only when the task needs helpers or store utilities, but reserve the folder in the structure decision.

## Required Templates

Use this component template:

```tsx
import { FC } from 'react';
import { cvaRoot } from './ComponentNameStyles';
import { IComponentNameProps } from '../model/types';

const ComponentName: FC<IComponentNameProps> = () => {
  return <div className={cvaRoot()}></div>;
};

export default ComponentName;
```

Use this styles template:

```ts
import { cva } from 'cva';

export const cvaRoot = cva({
  base: ['ComponentNameStyles-cvaRoot', ''],
});
```

Use this types template:

```ts
export interface IComponentNameProps {}
```

## Styling Rules

- Never use inline Tailwind utility strings directly in JSX.
- Never use string-based inline `className` definitions for component styling.
- Define classes in a dedicated `*Styles.ts` file with `cva`.
- Apply styles from JSX via helpers such as `className={cvaRoot()}`.
- Group Tailwind classes in `cva` arrays by logical categories when filling styles:
  - Layout
  - Background
  - Spacing
  - Flexbox
  - Typography
  - States
  - Transitions
- Use TailwindCSS together with `cva` as the default styling approach.
- Use `shadcn` and `class-variance-authority` compatible patterns when the task calls for shared UI composition.

## Forms And Validation

- Build all forms with `react-hook-form`.
- Define validation with `zod`.
- Use `zodResolver` from `@hookform/resolvers/zod`.
- Keep validation schemas in the `model` layer.
- Separate form logic from presentational UI whenever the task reasonably allows it.

## State Management

- Use `zustand` as the primary state management solution.
- Place stores in `model/` or `lib/` depending on responsibility.
- Prefer small modular stores over a monolithic global store.
- Keep business logic inside stores instead of inside React components.

## Prohibitions

- Do not use inline Tailwind classes in JSX.
- Do not create styles inside component files when a dedicated `*Styles.ts` file should exist.
- Do not create test pages, demo pages, example pages, or example widgets unless explicitly requested.
- Do not create README files unless explicitly requested.

## Output Expectations

When implementing a component:

1. Create the correct layer path.
2. Add `ui/ComponentName.tsx`.
3. Add `ui/ComponentNameStyles.ts`.
4. Add `model/types.ts`.
5. Add `model` validation or store files only when the task requires them.
6. Keep the implementation aligned with the templates and rules above.

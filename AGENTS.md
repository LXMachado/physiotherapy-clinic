# Agents Working on This Project

## Quick Summary

This is a **Physiotherapy Clinic Website** (Elite Physio) built with React + TypeScript + Vite + Tailwind CSS v4. It's a marketing site for a physiotherapy practice serving Gold Coast, Brisbane, and Sunshine Coast areas.

**Repo**: https://github.com/LXMachado/physiotherapy-clinic  
**Branch**: main  
**Node Version**: 18+ (recommended: latest LTS)  
**Package Manager**: npm (pnpm workspace configured but package-lock.json exists)

---

## 1. Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | React | 18.3.1 (peer dep) |
| Language | TypeScript | strict mode (implied by tsconfig) |
| Build Tool | Vite | 6.3.5 (overridden) |
| Routing | React Router | 7.13.0 |
| Styling | Tailwind CSS | 4.1.12 |
| Component Library | Custom UI components + Radix UI primitives | - |
| Icons | Lucide React | 0.487.0 |
| Animations | Framer Motion | 12.23.24 |
| State Management | React hooks (useState, etc.) | - |
| Form Handling | React Hook Form | 7.55.0 |
| HTTP Client | None (static site) | - |
| Testing | Jest + React Testing Library | TBD (to be installed) |

**UI Component Sources**: Many shadcn/ui-style components under `src/app/components/ui/` using Radix UI primitives.

---

## 2. Project Structure

```
physiotherapy-clinic/
├── .kilo/                    # Kilo CLI configuration (for this project)
│   ├── command/              # Custom slash commands
│   └── agent/                # Custom agent configurations
├── src/
│   ├── main.tsx              # Entry point (React DOM render)
│   ├── app/
│   │   ├── App.tsx           # Root App component (RouterProvider)
│   │   ├── routes.ts         # React Router v7 route definitions
│   │   ├── Root.tsx          # Root layout component (Header + Outlet + Footer)
│   │   ├── components/
│   │   │   ├── ui/           # Reusable UI primitives (button, dialog, etc.)
│   │   │   ├── Header.tsx    # Site header with mobile menu
│   │   │   ├── Footer.tsx    # Site footer with contact info
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── ProcessStep.tsx
│   │   │   ├── WhoWeHelpCard.tsx
│   │   │   ├── FAQItem.tsx
│   │   │   ├── DetailedServiceCard.tsx
│   │   │   └── figma/ImageWithFallback.tsx
│   │   └── pages/
│   │       ├── HomePage.tsx  # Full hero, services, process, FAQ sections
│   │       └── ServicesPage.tsx
│   ├── styles/
│   │   ├── index.css         # Global CSS imports
│   │   ├── tailwind.css      # Tailwind v4 source import
│   │   ├── theme.css          # Custom CSS variables + Tailwind @theme inline
│   │   └── fonts.css          # Font definitions (if any)
│   └── assets/                # Static assets (images, SVGs)
├── public/                    # Static files (if any)
├── guidelines/
│   ├── Guidelines.md          # Team coding/style guidelines
│   └── suggested-project-structure.jpeg
├── package.json
├── vite.config.ts             # Vite config with custom Figma asset resolver
├── tsconfig.json              # TypeScript config (checked into repo)
├── tailwind.config.js         # Not used - Tailwind v4 uses CSS-first config
├── postcss.config.mjs         # PostCSS config for Tailwind v4
├── pnpm-workspace.yaml        # pnpm workspace (not used with npm)
└── README.md
```

---

## 3. Core Architecture

### 3.1 Routing (React Router v7)

- Routes defined in `src/app/routes.ts` using `createBrowserRouter`
- Layout route (`Root`) wraps all pages with Header and Footer
- Children:
  - `/` → HomePage (index route)
  - `/services` → ServicesPage
- Anchor links (`#book`, `#process`, `#about`, `#faq`) used for in-page navigation on HomePage

### 3.2 Component Hierarchy

```
App (RouterProvider)
└── Root (Header + Outlet + Footer)
    ├── HomePage
    │   ├── Hero Section (image + CTAs + trust signals)
    │   ├── Testimonials (grid of TestimonialCard)
    │   ├── Services Preview (grid of ServiceCard)
    │   ├── Who We Help (grid of WhoWeHelpCard)
    │   ├── Process (3-step ProcessStep)
    │   ├── About (text + image + credentials)
    │   ├── Booking CTA (gradient CTA)
    │   └── FAQ (accordion of FAQItem)
    └── ServicesPage
```

### 3.3 Styling Strategy

- **Tailwind CSS v4**: utility-first, configured via `@import 'tailwindcss'` in `tailwind.css`
- **Custom CSS Variables**: defined in `theme.css` (`--brand-teal`, `--neutral-*`, etc.)
- **Design Tokens**: exposed via `@theme inline { ... }` block
- **Responsive**: mobile-first breakpoints (`sm:`, `md:`, `lg:`, `xl:`)
- **Dark mode**: `.dark` class variant defined but not actively used in components

**Brand Colors**:
- Primary: `#0891b2` (brand-teal)
- Dark: `#0e7490` (brand-teal-dark)
- Light: `#06b6d4` (brand-teal-light)
- Neutral palette: 50/100/200/300/600/700/900

---

## 4. Key Components Documentation

### 4.1 Header (`src/app/components/Header.tsx`)

- Sticky header with blur backdrop
- Logo: "Elite Physio" → home link
- Desktop nav: Services, How It Works, About, FAQ
- Mobile: hamburger menu with slide-down
- CTA: Phone (1300 000 000) + Book Now button
- State: `mobileMenuOpen` (boolean)

### 4.2 Footer (`src/app/components/Footer.tsx`)

- 4-column grid on large screens
- Sections: Company info, Quick Links, Contact, Clinic Hours
- Contact: phone, email, locations (Gold Coast, Brisbane, Sunshine Coast)
- Hours: Mon-Fri 7am-7pm, Sat 8am-2pm, Sun Closed
- Copyright: 2026 Elite Physio

### 4.3 ServiceCard

- Title, description, icon (emoji string prop)
- Used on HomePage in a 3-column grid
- Simple card: no interactivity beyond layout

### 4.4 TestimonialCard

- name, condition, quote, rating (1-5 stars)
- Star icons from lucide-react (filled amber)

### 4.5 ProcessStep

- step (number 1-3), title, description
- Circular step indicator with teal background

### 4.6 FAQItem

- question, answer props
- Likely uses accordion pattern from `@radix-ui/react-accordion`
- (Check component implementation for state handling)

### 4.7 WhoWeHelpCard

- title, problems array, image URL
- Displays image + list of problems

### 4.8 UI Primitives (`src/app/components/ui/`)

Comprehensive shadcn/ui-compatible component library:
- Form, Input, Textarea, Checkbox, RadioGroup, Switch, Slider
- Dialog, AlertDialog, Popover, DropdownMenu, ContextMenu, Menubar
- Tabs, Accordion, Collapsible, Drawer, Sheet, Sidebar
- NavigationMenu, Breadcrumb, Command, Carousel
- Card, Table, Badge, Avatar, Skeleton, Progress, Spinner (Sonner), Toast (Sonner)
- Calendar, DatePicker (via react-day-picker)
- Chart (via recharts)
- And more...

---

## 5. External Integrations

### 5.1 Images

- Unsplash CDN for hero and content images
- Figma asset resolver plugin in `vite.config.ts` enables `figma:asset/` imports (not currently used)

### 5.2 Icons

- Lucide React (consistent icon set)
- Material UI Icons (not used in current code)

### 5.3 Animations

- Framer Motion installed but not yet used
- Tailwind `tw-animate-css` plugin for additional animations

### 5.4 Charts

- Recharts installed (Chart component in UI)
- Victory vendor bundled (unused)

---

## 6. Commands & Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server (default: http://localhost:5173) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | (Not configured - add if needed) Preview production build |
| `npm run lint` | (Not configured - should add ESLint) |
| `npm test` | (Not configured - Jest to be installed) |
| `npm run typecheck` | (Not configured - should add tsc --noEmit) |

---

## 7. Testing Strategy (to implement)

### 7.1 Install Jest + Testing Library

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
```

### 7.2 Jest Configuration (jest.config.js or jest.config.ts)

```js
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
```

### 7.3 Test File Pattern

`**/*.test.tsx` or `**/*.test.ts` alongside source files or in `__tests__/` directories.

### 7.4 Recommended Test Coverage

**Priority 1 (Critical Path)**
- `Header` component renders correctly, mobile menu toggles
- `Footer` renders contact info and hours
- `HomePage` renders all major sections (hero, testimonials, services, FAQ)
- `ServiceCard`, `TestimonialCard`, `ProcessStep` render props correctly
- Navigation links work (`/`, `/services`)

**Priority 2 (User Interactions)**
- Mobile menu open/close
- Smooth scroll to anchor links (if implemented)
- FAQ accordion expand/collapse
- CTA button clicks

**Priority 3 (Edge Cases)**
- Missing image fallback (ImageWithFallback)
- Long text truncation
- Mobile vs desktop layouts

### 7.5 Mocking Strategy

- Mock `lucide-react` icons: jest.mock('lucide-react', () => ({ ... }));
- Mock `react-router` Link component for tests (or use `MemoryRouter`)
- Static image URLs don't need mocking

---

## 8. Code Style & Conventions

### 8.1 TypeScript

- Strict mode assumed (no `any` unless absolutely necessary)
- Props interfaces/exports for all components
- Named exports preferred over default exports (check existing pattern)
- Functional components with hooks as needed

### 8.2 Naming

- Components: `PascalCase` (e.g., `Header.tsx`, `ServiceCard.tsx`)
- Utilities: `camelCase` (e.g., `cn.ts`, `utils.ts`)
- CSS classes: Tailwind utility-first, custom classes sparingly
- Files: `.tsx` for React components, `.ts` for utilities

### 8.3 Imports

- Absolute imports via `@/` alias (configured in `vite.config.ts`)
- Group: React, external libs, internal components, styles
- Example:
  ```tsx
  import { useState } from 'react';
  import { Link } from 'react-router';
  import { Phone } from 'lucide-react';
  import { Header } from '@/app/components/Header';
  ```

### 8.4 Tailwind Usage

- Utility classes directly in JSX
- Dynamic classes via `clsx` or template literals
- Custom colors via CSS variables: `text-brand-teal`, `bg-neutral-900`, etc.
- Responsive classes ordered: mobile default → `sm:`, `md:`, `lg:`, `xl:`
- Avoid `!important`; use Tailwind's `@layer` in CSS if necessary

### 8.5 Component Patterns

- Export components as named exports: `export function Header() { ... }`
- Props interfaces when needed: `interface HeaderProps { ... }`
- Keep components small (single responsibility)
- Lift state up when needed (mobile menu in Header is fine locally)

---

## 9. Git Workflow

### Before Committing

1. Run `npm run build` - ensure no build errors
2. Run tests with `npm test` (once configured)
3. Check formatting (Prettier not yet configured - consider adding)
4. Lint with ESLint (not configured - consider adding)

### Commit Messages

Follow conventional commits:
- `feat: add contact form validation`
- `fix: resolve mobile menu z-index issue`
- `docs: update README with setup instructions`
- `test: add Header component tests`

### Push to GitHub

```bash
git add .
git commit -m "feat: implement Jest testing setup and initial component tests"
git push origin main
```

---

## 10. Environment & Configuration

### 10.1 Environment Variables

None required for static site. If adding backend later, use `.env` with `VITE_` prefix for Vite-exposed variables.

### 10.2 Build Output

- `dist/` directory (ignored in git)
- Assets hashed for cache busting
- SPA (single-page app) - configure server to fallback to `index.html`

### 10.3 Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) - ES2020+

---

## 11. Future Considerations

- **CMS Integration**: Current data is static; consider headless CMS for content editing
- **Booking System**: CTA buttons link to `#book` or phone - integrate booking API
- **Analytics**: Add Google Analytics or similar
- **SEO**: Meta tags, structured data, sitemap.xml
- **Performance**: Image optimization (already using Unsplash CDN), lazy loading
- **Accessibility**: ARIA labels, keyboard navigation audit
- **Form Handling**: Contact form, newsletter signup
- **Testing**: E2E with Playwright or Cypress

---

## 12. Known Issues & TODOs

- `package.json` name is `@figma/my-make-file` - seems like a template artifact; consider renaming
- `personal` workspace in `pnpm-workspace.yaml` but using npm; clean up if switching to pnpm
- Dark mode theme defined but not implemented as toggle
- Test coverage: 0% (need to implement)
- ESLint/Prettier not configured
- No CI/CD pipeline (GitHub Actions could run tests on PR)

---

## 13. Agent Instructions (for AI assistants)

When working on this project:

1. **Follow existing patterns**: Match the code style, naming, and component structure in `src/app/`
2. **Don't remove existing scripts** unless explicitly asked
3. **Update documentation** when you change public APIs or component props
4. **Add tests** for new components or bug fixes
5. **Use absolute imports** with `@/` for src-relative paths
6. **Keep Tailwind utility classes** in JSX; avoid creating CSS classes unless truly reusable
7. **Check responsive behavior** - site is mobile-first
8. **Use lucide-react icons** for consistency
9. **Theme colors**: Use `brand-teal` for primary actions, `neutral-*` for text/backgrounds
10. **Before pushing**: verify build passes (`npm run build`) and tests pass

---

Last Updated: 2026-04-23  
Maintained by: Project Contributors

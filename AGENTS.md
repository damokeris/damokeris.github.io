# Agent Guidelines for damokeris.github.io

This document provides guidelines for AI agents working on this repository. It covers build commands, code style, project structure, and conventions.

## Project Overview

This is a VitePress static site documentation/blog with Chinese content. The site uses various VitePress plugins for enhanced markdown, readability, git changelog, and targeted heading highlighting. The codebase includes Vue components, JavaScript modules, and markdown files.

## Build/Test/Lint Commands

### Available npm scripts
- `npm run docs:dev` - Start development server with hot reload
- `npm run docs:build` - Build for production (output to `docs/.vitepress/dist`)
- `npm run docs:preview` - Preview production build locally

### Node Version
- Node.js 20+ required (as specified in GitHub Actions workflow)

### Testing
No test framework is currently configured. Consider adding Vitest or Jest if needed.

### Linting & Formatting
No ESLint, Prettier, or Stylelint configurations are present. Code style is informal. For new code, follow existing patterns and consider adding linting configuration if the project grows.

### Type Checking
TypeScript is not used. All files are JavaScript (.js, .mjs) or Vue Single File Components (.vue).

## Code Style Guidelines

### File Structure
- VitePress configuration: `docs/.vitepress/config.mjs`
- Theme customization: `docs/.vitepress/theme/`
- Markdown content: `docs/` (organized by category)
- Public assets: `docs/public/` (referenced as `/images/...`)

### Imports
- Use ES modules (`import`/`export`)
- Import order: external dependencies first, then internal modules
- Use relative paths for internal imports
- Include file extensions for JavaScript modules (`.js`, `.mjs`)

Example from `theme/index.js`:
```js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Utterances from './components/Utterances.vue'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
```

### JavaScript/ES Module Conventions
- Use `const` and `let` (avoid `var`)
- Use arrow functions for callbacks
- Use template literals for string interpolation
- Use destructuring where appropriate
- Use default exports for Vue components and theme config
- Use named exports for utilities

### Vue Single File Components
- Component name: PascalCase (e.g., `Utterances`)
- Template: Use kebab-case for HTML tags and attributes
- Script: Export default object with `name`, `mounted`, `methods`, etc.
- Style: Scoped CSS with CSS custom properties (e.g., `var(--vp-c-divider)`)

Example structure:
```vue
<template>
  <div id="utterances-comments"></div>
</template>

<script>
export default {
  name: 'Utterances',
  mounted() { ... },
  methods: { ... }
}
</script>

<style scoped>
#utterances-comments { ... }
</style>
```

### CSS/Styling
- Use CSS custom properties defined by VitePress (e.g., `--vp-c-divider`)
- Prefer scoped styles in Vue components
- Global styles in `theme/custom.css`

### Naming Conventions
- Variables and functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE` if truly immutable
- Vue components: `PascalCase`
- File names: `kebab-case` for Vue components and markdown files, `camelCase` for JavaScript modules
- Directory names: `kebab-case` (e.g., `currently-available-materials`)

### Comments
- Chinese comments are common throughout the codebase
- English comments are also acceptable
- Use `//` for single-line comments, `/* */` for multi-line
- Comment complex logic or configuration options

Example Chinese comment:
```js
// 导入 基于Git的页面历史 依赖
```

### Error Handling
- Use `try...catch` for asynchronous operations
- Log errors with `console.error` in development
- Gracefully fail in production (e.g., fallback UI)

### Markdown Conventions
- Use frontmatter with `title` field for sidebar generation
- Chinese content with occasional English terms
- Use relative links to other markdown files
- Images stored in `docs/public/images/` referenced as `![Alt](/images/...)`

Example frontmatter:
```yaml
---
title: "文档标题"
---
```

## Git & Commit Conventions

### Commit Messages
Observed pattern: emoji + short description in Chinese
Example: `💄 style(formatting): 清理markdown文件前导空行`

Recommended style (optional):
- Use [Conventional Commits](https://www.conventionalcommits.org/) with emoji prefix
- Scope in parentheses (e.g., `docs`, `theme`, `formatting`)
- Chinese description is acceptable

### Branching
- `main` branch for production
- Feature branches from `main`
- Pull requests for merging

## VitePress-Specific Guidelines

### Configuration
- Config file uses `.mjs` extension (ES module)
- Define sidebar using `vitepress-sidebar` plugin with options in `config.mjs`
- Plugins are configured in `vite.plugins` array
- Base path is `/` for GitHub Pages

### Theme Customization
- Extend default VitePress theme in `theme/index.js`
- Register global components via `enhanceApp`
- Provide plugin configuration via `app.provide`
- Custom layout slots for plugin UI insertion

### Plugin Usage
- `@nolebase/vitepress-plugin-git-changelog` - git-based page history
- `@nolebase/vitepress-plugin-enhanced-readabilities` - reading enhancements
- `@nolebase/vitepress-plugin-enhanced-mark` - mark enhancements
- `@nolebase/vitepress-plugin-highlight-targeted-heading` - heading highlighting

## Development Workflow

1. Install dependencies: `npm install`
2. Start dev server: `npm run docs:dev`
3. Edit markdown files in `docs/` or Vue components in `theme/`
4. Build for production: `npm run docs:build`
5. Preview build: `npm run docs:preview`
6. Commit changes following commit conventions
7. Push to `main` triggers GitHub Pages deployment via `.github/workflows/deploy.yml`

## Deployment

- Automatic deployment via GitHub Actions on push to `main`
- Deploys to GitHub Pages at `https://damokeris.github.io`
- Build output: `docs/.vitepress/dist`

## Adding New Features

When adding new functionality:
1. Check if existing plugins can fulfill the requirement
2. Create Vue components in `theme/components/` if needed
3. Update theme configuration in `theme/index.js`
4. Update VitePress config if new plugin integration required
5. Document changes in relevant markdown files

## Troubleshooting

- If build fails, check Node version (>=20) and npm cache
- Ensure all imports are correct (paths case-sensitive on Linux)
- Check VitePress documentation for plugin compatibility

## Future Improvements

Consider adding:
- ESLint with Vue plugin for code consistency
- Prettier for automated formatting
- Vitest for component testing
- TypeScript migration for better type safety
- Internationalization (i18n) support

---

*This file should be updated as the project evolves. Last updated: January 2025*
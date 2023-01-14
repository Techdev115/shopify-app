This project was bootstrapped with [Create Shopify App](https://github.com/Shopify/webgen).

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [yarn dev](#yarn-dev)
  - [yarn check](#yarn-check)
  - [yarn test](#yarn-test)
  - [yarn lint](#yarn-lint)
  - [yarn type-check](#yarn-type-check)
  - [yarn format](#yarn-format)
  - [yarn build](#yarn-build)
  - [yarn nuke](#yarn-nuke)
- [Editor](#editor)

## Folder Structure

After creation, your project should look like this:

```
├── README.md
├── package.json
├── sewing-kit-config.js
│
├── config
│   └── server.js
│
├── client
│   ├── index.ts (Entry to the app's client rendering)
│   └── render-app.tsx (Client rendering wrappers that render <App />)
│
├── server
│   ├── index.ts (Entry to the app's server rendering and all of the Koa setup)
│   └── render-app.tsx (Server rendering wrappers that render <App />, written as a Koa middleware)
│
└── app
    ├── components (shared components in between sections)
    │
    ├── foundation (base components for one use app concern things)
    │   ├── App
    │   │   └── App.tsx (Setup all the providers for the app)
    │   └── Routes
    │        └── Routes.tsx (The app's first level routing file)
    │
    └── sections (container views that compose presentation components into UI blocks; usually map closely to 1st level route in the app)
        │
        ├── Home
        │   └── HomeIndex
        │        └── HomeIndex.tsx (The app's default page)
        │
        └── {SectionName} (future section)
            ├── {SectionName}Index
            │    └── {SectionName}Index.tsx
            │
            ├── {SectionName}Show
            │    └── {SectionName}Show.tsx
            │
            └── index.tsx (The app's nested routing file for this sepecific section)
```

To add more routes, create similar folder sturcture as `sections/Home` into `sections` folder. Then edit `app/foundation/Routes/Routes.tsx` to add the desire route.

## Available Scripts

All of the scripts listed below are based on `sewing-kit`'s commands
Read more about the these commands [here](https://github.com/Shopify/sewing-kit/blob/master/docs/commands)

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

### `yarn check`

Runs all linters and tests

### `yarn test`

Run Jest test in watch mode on changed tests

### `yarn lint`

Run all of app's linter against JavaScript, TypeScript, SCSS. It also detect unformatted JavaScript, JSON, Markdown and GraphQL. Running the format command fix the unformatted code.

### `yarn type-check`

Run TypeScript type checking

### `yarn format`

Formats files using Prettier, ESLint, and Stylelint.

### `yarn build`

Builds production assets and saves them to the filesystem.

### `yarn nuke`

🔨 for problems that aren't fixed by restarting the development server. Clears out node_modules (recursively), sewing-kit's caches, build folders, and other metadata.

## Editor

It is recommended that you use [VS Code](https://code.visualstudio.com) as text editor with this project.

`.vscode` contains the recommended editor settings and the extensions you should install for in editor linting and prettier formating setup.

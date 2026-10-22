# React Router Route HMR Reproduction

This app reproduces stale route output after an edit to a default-export route without a loader. The route is nested below layouts, and the parent layout has a loader.

## Run

1. Run `npm install`.
2. Run `npm run dev`.
3. Open `http://localhost:3002/apps`.
4. Change `Browse Apps before` in `app/routes/apps/index.tsx` to `Browse Apps after`.

Before the React Router fix, the edit causes a full document reload instead of an in-place RSC update. The heading changes after the reload.

## Route shape

The index route has no loader. A parent layout has a loader, and two nested layout routes render the index route.
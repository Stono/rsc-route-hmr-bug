import { index, layout, route } from '@react-router/dev/routes'

export default [
  layout('./routes/layout.tsx', [
    route('apps', './routes/apps/layout.tsx', [
      index('./routes/apps/index.tsx')
    ])
  ])
]
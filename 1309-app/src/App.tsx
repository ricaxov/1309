import { lazy, Suspense } from 'react'
import { Title } from './components/Title'
import { Photo } from './components/Photo'
import { Counter } from './components/Counter'
import { Petals } from './components/Petals'

const Bouquet = lazy(() =>
  import('./components/Bouquet').then((m) => ({ default: m.Bouquet })),
)

export function App() {
  return (
    <>
      <Petals />
      <Title />
      <Photo />
      <Counter />
      <Suspense fallback={<div className="bouquet-fallback" />}>
        <Bouquet />
      </Suspense>
    </>
  )
}

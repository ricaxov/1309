import type { DetailedHTMLProps, HTMLAttributes } from 'react'
import type { ModelViewerElement } from '@google/model-viewer'

type ModelViewerProps = DetailedHTMLProps<
  HTMLAttributes<ModelViewerElement>,
  ModelViewerElement
> &
  Partial<
    Pick<
      ModelViewerElement,
      | 'src'
      | 'alt'
      | 'ar'
      | 'arModes'
      | 'arScale'
      | 'cameraControls'
      | 'autoRotate'
      | 'shadowIntensity'
      | 'interactionPrompt'
    >
  >

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerProps
    }
  }
}

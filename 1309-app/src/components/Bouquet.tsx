import '@google/model-viewer'
import tulips from '../assets/bouquet/tulips.glb?url'
import tulipsUsdz from '../assets/bouquet/tulips.usdz?url'

export function Bouquet() {
  return (
    <section className="bouquet">
      <div className="bouquet-heading">
        <span className="overline">Pra você</span>
        <h2>Um buquê de tulipas</h2>
      </div>

      <div className="bouquet-stage">
        <model-viewer
          src={tulips}
          iosSrc={tulipsUsdz}
          alt="Buquê de tulipas em 3D"
          ar
          arModes="webxr scene-viewer quick-look"
          cameraControls
          interactionPrompt="none"
          autoRotate
          shadowIntensity={1}
        >
          <button slot="ar-button" className="ar-button">
            Ver no seu espaço
          </button>
        </model-viewer>
      </div>
    </section>
  )
}

const PETAL_COLORS = ['#f4a6b4', '#e8748c', '#f7c9c0', '#e9909f', '#fbd9dd']
const PETAL_COUNT = 500

const BASE_WIDTH = 14
const BASE_HEIGHT = 18

const PETALS = Array.from({ length: PETAL_COUNT }, (_, i) => {
  const scale = 0.6 + Math.random() * 0.9

  return {
    left: `${Math.random() * 100}vw`,
    background: PETAL_COLORS[i % PETAL_COLORS.length],
    animationDuration: `${9 + Math.random() * 11}s`,
    animationDelay: `${-Math.random() * 20}s`,
    width: `${(BASE_WIDTH * scale).toFixed(1)}px`,
    height: `${(BASE_HEIGHT * scale).toFixed(1)}px`,
  }
})

export function Petals() {
  return (
    <div className="petals" aria-hidden="true">
      {PETALS.map((style, index) => (
        <span className="petal" key={index} style={style} />
      ))}
    </div>
  )
}


// check this ^^^ 
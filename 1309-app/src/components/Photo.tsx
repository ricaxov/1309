const PHOTOS = Object.values(
  import.meta.glob<string>('../assets/polaroid_images/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  }),
)

const photo = PHOTOS[Math.floor(Math.random() * PHOTOS.length)]

export function Photo() {
  return (
    <figure className="frame">
      <span className="ribbon">NÓS</span>
      <div className="slot">
        {PHOTOS.length !== 0 ? (
          <img src={photo} alt="The two of us" />
        ) : (
          <div className="placeholder">
            <small>No photos found</small>
          </div>
        )}
      </div>
      <figcaption className="caption">Te amo, meu amor</figcaption>
    </figure>
  )
}

import "./Gallery.css";

const galleryImages = [
  {
    src: "/images/Gallery/01.jpg",
    title: "Campus",
  },
  {
    src: "/images/Gallery/02.jpg",
    title: "Academic Activities",
  },
  {
    src: "/images/Gallery/03.jpg",
    title: "Auditorium",
  },
  {
    src: "/images/Gallery/04.jpg",
    title: "RSET Campus",
  },
  {
    src: "/images/Gallery/05.jpg",
    title: "Student Activities",
  },
  {
    src: "/images/Gallery/06.jpg",
    title: "Campus Life",
  },
];

function Gallery() {
  return (
    <section className="gallery-page">
      <div className="gallery-header">
        <p>RSET</p>
        <h1>Gallery</h1>
        <span>
          A glimpse into campus life, academics and activities.
        </span>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div className="gallery-card" key={image.src}>
            <img
              src={image.src}
              alt={image.title}
              loading="lazy"
            />

            <div className="gallery-overlay">
              <span>0{index + 1}</span>
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
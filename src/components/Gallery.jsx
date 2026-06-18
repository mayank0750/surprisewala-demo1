import { Image } from 'lucide-react';
import { galleryPhotos } from '../data/gallery.js';

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section-heading">
        <Image size={31} />
        <h2>Beautiful Moments</h2>
      </div>

      <div className="heading-flourish">♡</div>

      <div className="gallery-wrapper">
        <div className="photo-track">
          {[...galleryPhotos, ...galleryPhotos].map((photo, i) => (
            <article className="photo-card" key={i}>
              <img src={photo.src} alt={photo.alt} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
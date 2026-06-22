import { Image } from "lucide-react";
import { galleryPhotos } from "../data/gallery1.js";
import { galleryPhotos1 } from "../data/gallery2.js";
import { galleryPhotos3 } from "../data/gallery3.js";
import { galleryPhotos4 } from "../data/gallery4.js";

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
          {[...galleryPhotos1, ...galleryPhotos1].map((photo, i) => (
            <article className="photo-card" key={i}>
              <img src={photo.src} alt={photo.alt} />
            </article>
          ))}
        </div>
      </div>

      <div className="gallery-wrapper">
        <div className="photo-track">
          {[
            ...galleryPhotos,
            ...galleryPhotos.filter((item) => item.type !== "video"),
          ].map((photo, i) => (
            <article className="photo-card" key={i}>
              {photo.type === "video" ? (
                <video src={photo.src} controls playsInline />
              ) : (
                <img src={photo.src} alt={photo.alt} />
              )}
            </article>
          ))}
        </div>
      </div>

      <div className="gallery-wrapper">
        <div className="photo-track">
          {[...galleryPhotos3, ...galleryPhotos3].map((photo, i) => (
            <article className="photo-card" key={i}>
              <img src={photo.src} alt={photo.alt} />
            </article>
          ))}
        </div>
      </div>

      <div className="gallery-wrapper">
  <div className="photo-track">
    {[...galleryPhotos4, ...galleryPhotos4].map((photo, i) => (
      <article className="photo-card" key={i}>
        <video
          src={photo.src}
          controls
          playsInline
        />
      </article>
    ))}
  </div>
</div>

    </section>
  );
}

import FloatingHeart from './FloatingHeart.jsx';

export default function WishCard() {
  return (
    <section className="wish-card" id="messages" style={{border:"2px solid red"}}>
      <FloatingHeart />
      <div className="card-sparkles left" aria-hidden="true">✧ ✨ ✦</div>
      <div className="card-sparkles right" aria-hidden="true">✦ ✨ ✧</div>
      <p>You make every moment special.</p>
      <p>Wishing you a day full of love, happiness<br />and unforgettable memories.</p>
      <strong>Stay happy, stay blessed! Chirik<span>❤</span></strong>
    </section>
  );
}

import FloatingHeart from './FloatingHeart.jsx';

export default function ThankYouBanner() {
  return (
    <section className="thank-you" id="messages" style={{border:"2px solid red"}}>
      <FloatingHeart />
      <div className="balloon balloon-left" aria-hidden="true" />
      <div className="balloon balloon-right" aria-hidden="true" />
      <span className="outline-heart left-heart" aria-hidden="true">♡</span>
      <span className="outline-heart right-heart" aria-hidden="true">♡</span>
      <br></br>
      <p>Once again Happy Birthday</p>
      <strong>ChiRik Padya</strong>
      <div className="mini-flourish" aria-hidden="true">♡</div>
    </section>
  );
}

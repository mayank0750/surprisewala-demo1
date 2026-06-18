import FloatingHeart from './FloatingHeart.jsx';

export default function ThankYouBanner() {
  return (
    <section className="thank-you" id="messages" style={{border:"2px solid red"}}>
      <FloatingHeart />
      <div className="balloon balloon-left" aria-hidden="true" />
      <h1>नुस्त चिडत राहते.येऊन लालच करतो एक दिवस. कधी येऊ मग खायला तुला...</h1>
      <h1>Be Ready For Birthday Party.Party honnnaaa</h1>
      <div className="balloon balloon-right" aria-hidden="true" />
      <span className="outline-heart left-heart" aria-hidden="true">♡</span>
      <span className="outline-heart right-heart" aria-hidden="true">♡</span>
      <br></br>
      <p>Thank you for being such an</p>
      <strong>Chidely Oggya!</strong>
      <div className="mini-flourish" aria-hidden="true">♡</div>
    </section>
  );
}

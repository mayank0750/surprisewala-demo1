import Sparkles from './Sparkles.jsx';
import heroImg from "../assets/yogibanner1.png";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Birthday hero" 
    style={{
        backgroundImage: `
          linear-gradient(rgba(16,9,8,.2), rgba(16,9,8,.1)),
          url(${heroImg})
        `,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      >
      <div className="hero-overlay" />
      <Sparkles />
      <div className="hero-copy">
        <p className="hero-kicker">HAPPY</p>
        <h1>Birthday!</h1>
        <div className="pink-swoosh" aria-hidden="true" />
      </div>
    </section>
  );
}

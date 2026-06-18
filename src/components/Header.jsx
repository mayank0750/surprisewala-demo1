import { Gift, Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Memories home">
        <Gift size={38} strokeWidth={2.4} />
        <span>Memories</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a className="active" href="#home">Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#messages">Messages</a>
      </nav>

      <button className="surprise-button" type="button">
        <Heart size={17} fill="currentColor" />
        Surprise
      </button>
    </header>
  );
}

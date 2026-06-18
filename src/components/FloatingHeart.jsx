import { Heart } from 'lucide-react';

export default function FloatingHeart({ className = '' }) {
  return (
    <div className={`floating-heart ${className}`} aria-hidden="true">
      <Heart size={40} fill="red" />
    </div>
  );
}

import "./ProductCard.css";
import Niacinamide from "../images/niacinamide-bottle.png";

export default function ProductCard() {
  return (
    <div className="ProductCard">
      <h5 className="ProductCard__headline">Niacinamide 10% + Zinc 1%</h5>
      <img src={Niacinamide} alt="product bottle" className="bottle-image" />
      <a
        href="https://theordinary.deciem.com/de/rdn-niacinamide-10pct-zinc-1pct-30ml.html"
        className="details-link"
        target="_blank"
        rel="noreferrer"
      >
        details
      </a>
      <button className="add-to-routine-button">+</button>
    </div>
  );
}

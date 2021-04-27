import "./ProductCard.css";

export default function ProductCard({ name, image, url }) {
  return (
    <div className="ProductCard">
      <h5 className="ProductCard__headline">{name}</h5>
      <img
        src={image}
        alt={`white product bottle of ${name}`}
        className="bottle-image"
      />
      <a href={url} className="details-link" target="_blank" rel="noreferrer">
        details
      </a>
      <button className="add-to-routine-button">+</button>
    </div>
  );
}

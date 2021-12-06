import "./Product.css";

export default function Product({
  title,
  price,
  category,
  image,
  size,
  brand,
}) {
  return (
    <div className="productItem">
      <p className="productType">{category}</p>
      <img className="" src={image} alt={title} />
      <h3 className="">{title}</h3>
      <h3 className="productPrice">Rs. {price * 100}</h3>
      <p className="productBrand">{brand}</p>
      <div className="productSizes">
        <span>SIZES - </span>
        {size.map((s, index) => (
          <span key={index}>{s}</span>
        ))}
      </div>
    </div>
  );
}

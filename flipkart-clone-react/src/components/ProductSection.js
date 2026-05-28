function ProductSection({ title, products }) {
  return (
    <section className="product-row">
      <div className="row-header">
        <h2>{title}</h2>
        <button type="button" className="view-all">VIEW ALL</button>
      </div>

      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={`${product.name}-${index}`}>
            <img src={product.image} alt={product.alt} />
            <p className="name">{product.name}</p>
            <p className="offer">{product.offer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;

function ProductSection({ title, products }) {
  const handleViewAll = () => {
    alert(`Viewing all products in: ${title}`);
  };

  const handleProductClick = (productName) => {
    alert(`Product clicked: ${productName}\n\nView product details - Coming soon!`);
  };

  return (
    <section className="product-row">
      <div className="row-header">
        <h2>{title}</h2>
        <button
          type="button"
          className="view-all"
          onClick={handleViewAll}
        >
          VIEW ALL
        </button>
      </div>

      <div className="product-list">
        {products.map((product, index) => (
          <div
            className="product-card"
            key={`${product.name}-${index}`}
            onClick={() => handleProductClick(product.name)}
            style={{ cursor: 'pointer' }}
          >
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

function Header({ categories }) {
  return (
    <>
      <header className="navbar">
        <div className="nav-left">
          <img src="/images/flipkart-plus_8d85f4.png" alt="Flipkart logo" className="logo" />
          <div className="search-box">
            <input type="text" placeholder="Search for Products, Brands and More" />
            <button type="button">Search</button>
          </div>
        </div>

        <div className="nav-right">
          <div className="login-wrapper">
            <input type="checkbox" id="login-toggle" className="login-toggle" />
            <label htmlFor="login-toggle" className="more-btn">
              <span className="more-text">👤Login</span>
            </label>
            <ul className="login-menu">
              <li className="login-top">
                <span>New customer?</span>
                <a href="/">Sign Up</a>
              </li>
              <li><a href="/">My Profile</a></li>
              <li><a href="/">Flipkart Plus Zone</a></li>
              <li><a href="/">Orders</a></li>
              <li><a href="/">Wishlist</a></li>
              <li><a href="/">Rewards</a></li>
              <li><a href="/">Gift Cards</a></li>
            </ul>
          </div>

          <a href="/">🏬Become a Seller</a>
          <a href="/">🛒Cart</a>

          <div className="more-wrapper">
            <button type="button" className="more-btn" aria-label="More options">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="more-text" />
            </button>

            <ul className="more-menu">
              <li><a href="/">Notification Preferences</a></li>
              <li><a href="/">24x7 Customer Care</a></li>
              <li><a href="/">Advertise</a></li>
              <li><a href="/">Download App</a></li>
            </ul>
          </div>
        </div>
      </header>

      <nav className="category-strip">
        {categories.map((category) => (
          <div className="cat-item" key={category.label}>
            <img src={category.image} alt={category.alt} />
            <span>{category.label}</span>
          </div>
        ))}
      </nav>
    </>
  );
}

export default Header;

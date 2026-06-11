import { useState } from 'react';

function Header({ categories }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`🔍 Searching for: "${searchQuery}"\n\nSearch results - Coming soon!`);
      setSearchQuery('');
    }
  };

  const handleCategoryClick = (categoryLabel) => {
    alert(`📂 Browsing: ${categoryLabel}\n\nProducts loading...`);
  };

  const handleCart = () => {
    alert('🛒 Your Cart\n\nCart is empty - Coming soon!');
  };

  const handleBecomeSeller = () => {
    alert('🏬 Become a Seller\n\nRedirecting to seller portal...');
  };

  const handleProfileOption = (option) => {
    alert(`👤 ${option}\n\nNavigating...`);
    setIsProfileOpen(false);
  };

  const handleMoreOption = (option) => {
    alert(`⚙️ ${option}\n\n${option} - Coming soon!`);
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-left">
          <img src="/images/flipkart-plus_8d85f4.png" alt="Flipkart logo" className="logo" />
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="nav-right">
          <div className="login-wrapper">
            <input
              type="checkbox"
              id="login-toggle"
              className="login-toggle"
              checked={isProfileOpen}
              onChange={() => setIsProfileOpen(!isProfileOpen)}
            />
            <label htmlFor="login-toggle" className="more-btn">
              <span className="more-text">👤Login</span>
            </label>
            <ul className="login-menu">
              <li className="login-top">
                <span>New customer?</span>
                <button
                  onClick={() => handleProfileOption('Sign Up')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#2874f0',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    padding: '0',
                  }}
                >
                  Sign Up
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProfileOption('My Profile')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    padding: '0',
                    fontSize: 'inherit',
                  }}
                >
                  My Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProfileOption('Flipkart Plus Zone')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    padding: '0',
                    fontSize: 'inherit',
                  }}
                >
                  Flipkart Plus Zone
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProfileOption('Orders')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    padding: '0',
                    fontSize: 'inherit',
                  }}
                >
                  Orders
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProfileOption('Wishlist')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    padding: '0',
                    fontSize: 'inherit',
                  }}
                >
                  Wishlist
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProfileOption('Rewards')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    padding: '0',
                    fontSize: 'inherit',
                  }}
                >
                  Rewards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProfileOption('Gift Cards')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    padding: '0',
                    fontSize: 'inherit',
                  }}
                >
                  Gift Cards
                </button>
              </li>
            </ul>
          </div>

          <button
            onClick={handleBecomeSeller}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              fontSize: '1rem',
              padding: '0',
            }}
          >
            🏬Become a Seller
          </button>
          <button
            onClick={handleCart}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              fontSize: '1rem',
              padding: '0',
            }}
          >
            🛒Cart
          </button>

          <div className="more-wrapper">
            <button
              type="button"
              className="more-btn"
              aria-label="More options"
            >
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="more-text" />
            </button>

            <ul className="more-menu">
              <li>
                <button
                  onClick={() => handleMoreOption('Notification Preferences')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    padding: '0',
                    fontSize: 'inherit',
                  }}
                >
                  Notification Preferences
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMoreOption('24x7 Customer Care')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    padding: '0',
                    fontSize: 'inherit',
                  }}
                >
                  24x7 Customer Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMoreOption('Advertise')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    padding: '0',
                    fontSize: 'inherit',
                  }}
                >
                  Advertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMoreOption('Download App')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    padding: '0',
                    fontSize: 'inherit',
                  }}
                >
                  Download App
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <nav className="category-strip">
        {categories.map((category) => (
          <div
            className="cat-item"
            key={category.label}
            onClick={() => handleCategoryClick(category.label)}
            style={{ cursor: 'pointer' }}
          >
            <img src={category.image} alt={category.alt} />
            <span>{category.label}</span>
          </div>
        ))}
      </nav>
    </>
  );
}

export default Header;

import './App.css';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

const categories = [
  { image: '/images/minutes.jpg', alt: 'Minutes', label: 'Minutes' },
  { image: '/images/mobiles-tablets.jpg', alt: 'Mobiles & Tablets', label: 'Mobiles & Tablets' },
  { image: '/images/fashion.jpg', alt: 'Fashion', label: 'Fashion' },
  { image: '/images/electronics.jpg', alt: 'Electronics', label: 'Electronics' },
  { image: '/images/tvs-appliances.jpg', alt: 'TVs & Appliances', label: 'TVs & Appliances' },
  { image: '/images/home-furniture.jpg', alt: 'Home & Furniture', label: 'Home & Furniture' },
  { image: '/images/flight-bookings.jpg', alt: 'Flight Bookings', label: 'Flight Bookings' },
  { image: '/images/beauty-food-toys.jpg', alt: 'Beauty, Food, Perfume', label: 'Beauty, Food..' },
  { image: '/images/grocery.jpg', alt: 'Grocery', label: 'Grocery' }
];

const productSections = [
  {
    title: 'Top Deals on Home Essentials',
    products: [
      { image: '/images/bottle.jpg', alt: 'Bottles and flasks', name: 'Bottles and flasks', offer: 'From ₹129' },
      { image: '/images/cookware-range.jpg', alt: 'Cookware range', name: 'Cookware range', offer: 'From ₹299' },
      { image: '/images/faucets.jpg', alt: 'Faucets', name: 'Faucets', offer: 'Up to 80% Off' },
      { image: '/images/casserole.jpg', alt: 'Casseroles', name: 'Casseroles', offer: 'From ₹299' },
      { image: '/images/indoor-plants.jpg', alt: 'Indoor Plants', name: 'Indoor Plants', offer: 'Up to 85% Off' },
      { image: '/images/home-emergency.jpg', alt: 'Home Emergency Light', name: 'Home Emergency Li...', offer: 'Min. 40% Off' },
      { image: '/images/garden-sprayers.jpg', alt: 'Garden Sprayers', name: 'Garden Sprayers', offer: 'Up to 75% Off' },
      { image: '/images/gold-wrist-watch.jpg', alt: 'Wrist Watches', name: 'Wrist Watches', offer: 'Min. 45% Off' }
    ]
  },
  {
    title: 'Top Deals On TVs & Appliances',
    products: [
      { image: '/images/shoe-rack-01.jpg', alt: 'Shoe Rack', name: 'Shoe Rack', offer: 'From ₹279' },
      { image: '/images/portable-laptop-table-01.jpg', alt: 'Portable laptop table', name: 'Portable laptop table', offer: 'From ₹399' },
      { image: '/images/refrigerator_1.jpg', alt: 'Home Temple', name: 'Refrigerator', offer: 'From ₹14999' },
      { image: '/images/space-saving-furniture-01.jpg', alt: 'Space Saving Furniture', name: 'Space Saving Furniture', offer: 'From ₹599' },
      { image: '/images/recliner-01.jpg', alt: 'Recliner', name: 'Recliner', offer: 'From ₹9999' },
      { image: '/images/chairs-01.jpg', alt: 'Chairs', name: 'Chairs', offer: 'From ₹2990' },
      { image: '/images/marq.jpg', alt: 'Marq tv', name: "Marq Tv's", offer: 'Min. 30% Off' },
      { image: '/images/acer.jpg', alt: 'Acer LED TV', name: "Acer Led Tv's", offer: 'Min. 20% Off' }
    ]
  },
  {
    title: 'Top Deals',
    products: [
      { image: '/images/projector-01.jpg', alt: 'Projector', name: 'Projector', offer: 'From ₹6990' },
      { image: '/images/bluetooth-speaker-01.jpg', alt: 'Best Selling Mobile Speaker', name: 'Best Selling Mobile S...', offer: 'From ₹2499*' },
      { image: '/images/monitor-01.jpg', alt: 'Monitors', name: 'Monitors', offer: 'From ₹6599' },
      { image: '/images/fastrack-smartwatch-01.jpg', alt: 'Fastrack Smartwatch', name: 'Fastrack Smartwatch...', offer: 'From ₹1399' },
      { image: '/images/printer-01.jpg', alt: 'Printers', name: 'Printers', offer: 'From ₹2336' },
      { image: '/images/monitor-02.jpg', alt: 'Monitors', name: 'Monitors', offer: 'From ₹7949' },
      { image: '/images/baby_diaper.jpg', alt: 'Baby Diapers', name: 'Baby Diapers', offer: 'Min. 30% Off' },
      { image: '/images/mens-casual-shoes.jpg', alt: 'Shoes', name: 'Shoes', offer: 'Min. 50% Off' }
    ]
  },
  {
    title: 'Top deals on appliances',
    products: [
      { image: '/images/kitchen-essentials-mixer.jpg', alt: 'Kitchen Essentials', name: 'Kitchen Essentials', offer: 'From ₹1249' },
      { image: '/images/home-essentials-purifier.jpg', alt: 'Home Essentials', name: 'Home Essentials', offer: 'Shop Now!' },
      { image: '/images/fan-geyser.jpg', alt: 'Fans & Geysers', name: 'Fans & Geysers', offer: 'From ₹799' },
      { image: '/images/mixer.jpg', alt: 'Mixer & Grinder', name: 'Mixer & Grinder', offer: 'Under ₹1999' },
      { image: '/images/Airfryer.jpg', alt: 'Airfryer', name: 'Airfryer', offer: 'Min. 40% Off' },
      { image: '/images/refrigerator.jpg', alt: 'Refrigerator', name: 'Refrigerator SidebySide', offer: 'Min. 35% Off' },
      { image: '/images/refrigerator_1.jpg', alt: 'Double Door Refrigerator', name: 'Double Door Refrigerator', offer: 'Min. 30% Off' },
      { image: '/images/trimmer-kit.jpg', alt: 'Trimmers', name: 'Trimmers', offer: 'Min. 50% Off' }
    ]
  },
  {
    title: 'Top Deals',
    products: [
      { image: '/images/apple-ipad.jpg', alt: 'Apple iPads', name: 'Apple iPads', offer: 'From ₹34999' },
      { image: '/images/guitar-instrument.jpg', alt: 'Instruments', name: 'Instruments', offer: 'From ₹1599' },
      { image: '/images/instax-camera.jpg', alt: 'Instax Cameras', name: 'Instax Cameras', offer: 'From ₹2999' },
      { image: '/images/perfume-bottle.jpg', alt: 'Perfume & more', name: 'Perfume & more', offer: 'From ₹199' },
      { image: '/images/camera-bag.jpg', alt: 'Camera Bags', name: 'Camera Bags', offer: 'From ₹999' },
      { image: '/images/heels-sandals.jpg', alt: 'Heels', name: 'Women Heels', offer: 'From ₹499' },
      { image: '/images/sports-shoes.jpg', alt: 'Shoes', name: 'Adidas Sneakers', offer: 'From ₹1999' },
      { image: '/images/baby_diaper.jpg', alt: 'Baby Diapers', name: 'Baby Diapers', offer: 'Min. 30% Off' }
    ]
  },
  {
    title: 'Top Deals on Auto Accessories',
    products: [
      { image: '/images/helmet.jpg', alt: 'Helmet', name: 'Helmets', offer: 'Min. 50% Off' },
      { image: '/images/bike-light-bulb.jpg', alt: 'Bike Light Bulb', name: 'Headlights/FOG Lamps', offer: 'Min. 50% Off' },
      { image: '/images/riding-gloves.jpg', alt: 'Riding Gloves', name: 'Riding Gloves', offer: 'Min. 50% Off' },
      { image: '/images/vehicle-washing-cloth.jpg', alt: 'Vehicle Washing Cloth', name: 'Car/Bike Cleaning', offer: 'Min. 50% Off' },
      { image: '/images/car-sticker-decal.jpg', alt: 'Car Sticker Decal', name: 'Stickers & Decals', offer: 'Min. 50% Off' },
      { image: '/images/bike-body-cover.jpg', alt: 'Bike Body Cover', name: 'Bike Covers', offer: 'Min. 50% Off' },
      { image: '/images/car-air-freshener.jpg', alt: 'Car Air Freshener', name: 'Air Fresheners', offer: 'Min. 50% Off' },
      { image: '/images/Mobile_holder.jpg', alt: 'Mobile Holder', name: 'Mobile Holder', offer: 'Min. 80% Off' }
    ]
  }
];

function App() {
  return (
    <>
      <Header categories={categories} />

      <section className="banner">
        <img src="/images/samsung_logo.jpg" alt="Samsung main banner" />
      </section>

      {productSections.map((section, index) => (
        <ProductSection key={`${section.title}-${index}`} title={section.title} products={section.products} />
      ))}

      <section className="product-row">
        <img
          src="/images/Screenshot 2025-12-26 152543.png"
          alt="Flipkart section screenshot"
          className="full-row-image"
        />
      </section>

      <Footer />
    </>
  );
}

export default App;

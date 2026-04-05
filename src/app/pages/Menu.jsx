import { useState } from 'react';
import { ImageWithFallback } from '../components/imageFullback/ImageWithFallback';
import '../styles/Menu.css';
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const menuItems = {
    appetizers: [{
      id: 1,
      name: 'Classic Hummus',
      description: 'Creamy chickpea dip with tahini, olive oil, and fresh herbs',
      price: 'GH₵ 25',
      image: 'https://images.unsplash.com/photo-1768812910769-d037b90aee77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1tdXMlMjBhcHBldGl6ZXIlMjBtZWRpdGVycmFuZWFufGVufDF8fHx8MTc3NTM3NzQzNHww&ixlib=rb-4.1.0&q=80&w=1080'
    }, {
      id: 2,
      name: 'Falafel Plate',
      description: 'Crispy chickpea fritters served with tahini sauce and fresh vegetables',
      price: 'GH₵ 35',
      image: 'https://images.unsplash.com/photo-1760888549074-5d885d859782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWxhZmVsJTIwY2hpY2twZWElMjBtZWRpdGVycmFuZWFufGVufDF8fHx8MTc3NTM3NzQzNXww&ixlib=rb-4.1.0&q=80&w=1080'
    }, {
      id: 3,
      name: 'Greek Salad',
      description: 'Tomatoes, cucumbers, olives, feta cheese, red onion with olive oil dressing',
      price: 'GH₵ 45',
      image: 'https://images.unsplash.com/photo-1769481614068-47cfb4d1f125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHNhbGFkJTIwZnJlc2glMjB2ZWdldGFibGVzfGVufDF8fHx8MTc3NTI3ODQ3MHww&ixlib=rb-4.1.0&q=80&w=1080'
    }],
    mains: [{
      id: 4,
      name: 'Grilled Sea Bass',
      description: 'Fresh sea bass grilled with lemon, herbs, and seasonal vegetables',
      price: 'GH₵ 120',
      image: 'https://images.unsplash.com/photo-1609517405102-8e258999ef48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwZmlzaCUyMGxlbW9uJTIwaGVyYnN8ZW58MXx8fHwxNzc1Mzc3NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }, {
      id: 5,
      name: 'Lamb Kebabs',
      description: 'Tender lamb skewers marinated in Mediterranean spices, served with rice',
      price: 'GH₵ 95',
      image: 'https://images.unsplash.com/photo-1771285119408-04cca3b35036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1iJTIwa2ViYWIlMjBza2V3ZXJzJTIwZ3JpbGxlZHxlbnwxfHx8fDE3NzUzNzc0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }, {
      id: 6,
      name: 'Mediterranean Platter',
      description: 'A generous selection of hummus, baba ganoush, falafel, and pita',
      price: 'GH₵ 85',
      image: 'https://images.unsplash.com/photo-1771285119318-b342c3ecc51c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwcmVzdGF1cmFudCUyMGZvb2QlMjBwbGF0dGVyfGVufDF8fHx8MTc3NTM3NzQzM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    }],
    desserts: [{
      id: 7,
      name: 'Baklava',
      description: 'Layers of phyllo pastry with honey, nuts, and aromatic spices',
      price: 'GH₵ 30',
      image: 'https://images.unsplash.com/photo-1763924996535-7306010c6780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtsYXZhJTIwZGVzc2VydCUyMHBpc3RhY2hpb3N8ZW58MXx8fHwxNzc1Mzc3NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }, {
      id: 8,
      name: 'Greek Yogurt & Honey',
      description: 'Thick Greek yogurt drizzled with wildflower honey and walnuts',
      price: 'GH₵ 25',
      image: 'https://images.unsplash.com/photo-1763924996535-7306010c6780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtsYXZhJTIwZGVzc2VydCUyMHBpc3RhY2hpb3N8ZW58MXx8fHwxNzc1Mzc3NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
       {
      id: 12,
      name: 'Greek Yogurt & Honey',
      description: 'Thick Greek yogurt drizzled with wildflower honey and walnuts',
      price: 'GH₵ 25',
      image: 'https://images.unsplash.com/photo-1763924996535-7306010c6780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtsYXZhJTIwZGVzc2VydCUyMHBpc3RhY2hpb3N8ZW58MXx8fHwxNzc1Mzc3NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
      ],
    drinks: [{
      id: 9,
      name: 'Lemon Mint Cooler',
      description: 'Refreshing blend of fresh lemon juice, mint, and sparkling water',
      price: 'GH₵ 15',
      image: 'https://images.unsplash.com/photo-1763379978357-482f322c93f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMGNvY2t0YWlsJTIwZHJpbmslMjBjaXRydXN8ZW58MXx8fHwxNzc1Mzc3NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }, {
      id: 10,
      name: 'Turkish Coffee',
      description: 'Traditional strong coffee with cardamom',
      price: 'GH₵ 12',
      image: 'https://images.unsplash.com/photo-1763379978357-482f322c93f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMGNvY2t0YWlsJTIwZHJpbmslMjBjaXRydXN8ZW58MXx8fHwxNzc1Mzc3NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }, {
      id: 11,
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice',
      price: 'GH₵ 18',
      image: 'https://images.unsplash.com/photo-1763379978357-482f322c93f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMGNvY2t0YWlsJTIwZHJpbmslMjBjaXRydXN8ZW58MXx8fHwxNzc1Mzc3NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }]
  };

  const categories = [{
    id: 'all',
    label: 'All Items'
  }, {
    id: 'appetizers',
    label: 'Appetizers'
  }, {
    id: 'mains',
    label: 'Main Courses'
  }, {
    id: 'desserts',
    label: 'Desserts'
  }, {
    id: 'drinks',
    label: 'Drinks'
  }];
  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return [...menuItems.appetizers, ...menuItems.mains, ...menuItems.desserts, ...menuItems.drinks];
    }
    return menuItems[activeCategory] || [];
  };
  return <div className="menu-page">
      <section className="menu-hero">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Explore our authentic Mediterranean dishes</p>
        </div>
      </section>

      <section className="menu-content">
        <div className="container">
          <div className="menu-categories">
            {categories.map(category => <button key={category.id} className={`category-btn ${activeCategory === category.id ? 'active' : ''}`} onClick={() => setActiveCategory(category.id)}>
                {category.label}
              </button>)}
          </div>

          <div className="menu-grid">
            {getFilteredItems().map(item => <div key={item.id} className="menu-item-card">
                <div className="menu-item-image-wrapper">
                  <ImageWithFallback src={item.image} alt={item.name} className="menu-item-image" />
                </div>
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-description">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
}
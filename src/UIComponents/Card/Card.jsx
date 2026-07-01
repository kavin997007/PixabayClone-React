import React from 'react';
import './Card.css';

const Card = ({ item }) => {
  return (
    <div className="card">
      <img
        src={item.largeImageURL}
        alt={item.tags}
        className="card-img"
      />

      <div className="card-content">
        <h3>{item.user}</h3>

        <div className="stats">
          <span>❤️ {item.likes}</span>
          <span>👁️ {item.views}</span>
        </div>

        <div className="stats">
          <span>⬇️ {item.downloads}</span>
        </div>

        <p className="tags">
          {item.tags.split(',').slice(0, 3).join(', ')}
        </p>

        <div className='view-img'>
          <button onClick={() => window.open(item.pageURL, "_blank")}>
             View Image
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;
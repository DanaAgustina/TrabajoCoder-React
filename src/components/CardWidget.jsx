// CardWidget.js
import React from 'react';

const CardWidget = () => {
  const notificationCount = 5; 

  return (
    <div className="card-widget">
      <i className="fas fa-shopping-cart"></i>
      {notificationCount > 0 && (
        <span className="notification-bubble">{notificationCount}</span>
      )}
    </div>
  );
}

export default CardWidget;

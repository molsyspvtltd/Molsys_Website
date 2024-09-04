import React, { useState } from 'react';

const NotificationPopup = ({ notifications, onClose }) => {
  return (
    <div className="notification-popup">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const NotificationButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="notification-button">
      Notifications
    </button>
  );
};

const Notification = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleNotificationClick = () => {
    // Toggle the visibility of the notification popup
    setShowNotifications(!showNotifications);
  };

  const handleNotificationClose = () => {
    // Close the notification popup
    setShowNotifications(false);
  };

  const addNotification = () => {
    // Add a new notification
    const newNotification = `New notification at ${new Date().toLocaleTimeString()}`;
    setNotifications([...notifications, newNotification]);
  };

  return (
    <div>
      <NotificationButton onClick={handleNotificationClick} />
      {showNotifications && (
        <NotificationPopup notifications={notifications} onClose={handleNotificationClose} />
      )}
      <button onClick={addNotification}>Add Notification</button>
    </div>
  );
};

export default Notification;

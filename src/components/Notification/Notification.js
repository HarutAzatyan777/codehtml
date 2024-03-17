import React, { useState, useEffect } from 'react';

function NotificationComponent() {
  const [notificationPermission, setNotificationPermission] = useState(null);

  useEffect(() => {
    const requestNotificationPermission = async () => {
      if (!('Notification' in window)) {
        alert('This browser does not support desktop notifications.');
        return;
      }

      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
    };

    // const displayNotification = () => {
    //   if (notificationPermission === 'granted') {
    //     const notification = new Notification('Hello, World!');
    //     setTimeout(() => {
    //       notification.close();
    //     }, 5000); // Close notification after 5 seconds
    //   } else if (notificationPermission === 'denied') {
    //     alert('You have denied notification permission');
    //   } else {
    //     alert('Please grant notification permission first');
    //   }
    // };

    // if (notificationPermission === null) {
    //   requestNotificationPermission();
    // } else {
    //   displayNotification(); // Automatically display notification after permission is granted
    // }

  }, [notificationPermission]);

  const handleGrantPermission = () => {
    setNotificationPermission('granted');
  };

  const handleDenyPermission = () => {
    setNotificationPermission('denied');
  };

  return (
    <div>
      {notificationPermission === 'default' && (
        <div>
          <p>Please grant notification permission:</p>
          <button onClick={handleGrantPermission}>Yes</button>
          <button onClick={handleDenyPermission}>No</button>
        </div>
      )}
    </div>
  );
}

export default NotificationComponent;

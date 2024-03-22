// UserAccount.jsx
import React from 'react';
import UserInfo from './UserInfo'; // Update the path

const UserAccount = () => {
  // Assuming you have user data, replace these with actual user data
  const userData = {
    avatarUrl: 'noavatar.png',
    fullName: 'John Doe',
    // Add more user data as needed
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <head>
        {/* Facebook Meta Tags */}
        <meta property="og:title" content="User Account Page" />
        <meta property="og:description" content="Description of your user account page" />
        <meta property="og:image" content={userData.avatarUrl} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />

        {/* Instagram Meta Tags */}
        <meta property="instapp:hashtags" content="your,hashtags,here" />
        <meta property="instapp:image" content={userData.avatarUrl} />
        <meta property="instapp:owner_user_id" content="your_instagram_user_id" />
      </head>

      <h2>User Account Page</h2>
      {/* Pass the entire userData object to UserInfo */}
      <UserInfo user={userData} />
      {/* Add more content or components as needed */}
      <div style={{ marginTop: '20px' }}>
        {/* Additional content or components */}
      </div>
    </div>
  );
};

export default UserAccount;

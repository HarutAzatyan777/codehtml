// UserInfo.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import styles from './UserInfo.module.scss';

const UserInfo = ({ user }) => {
  // Use default values for properties or check if the user object exists
  const { avatarUrl = 'img/noavatar.png',  fullName = '' } = user || {};

  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={avatarUrl} alt={fullName} />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        {/* Display additional user information as needed */}
        {/* For example, you can add more spans for other user details */}
      </div>
    </div>
  );
};

// Add prop type validation for the 'user' prop
UserInfo.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    fullName: PropTypes.string,
    // Add more prop types for additional user information if needed
  }),
};

export default UserInfo;

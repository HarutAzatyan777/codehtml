import React from "react";
import styles from "./Post.module.scss";

const PostSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonUser}>
          <div className={styles.skeletonUserAvatar}></div>
          <div className={styles.skeletonUserDetails}>
            <div className={styles.skeletonUserText}></div>
            <div className={styles.skeletonUserText}></div>
          </div>
        </div>
        <div className={styles.skeletonInfo}>
          <div className={styles.skeletonInfoText}></div>
          <div className={styles.skeletonTags}>
            <div className={styles.skeletonTag}></div>
            <div className={styles.skeletonTag}></div>
            <div className={styles.skeletonTag}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;

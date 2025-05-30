import styles from "../../styles/component-css/smallSkeleton.module.css";

export default function SmallSkeleton() {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonBox} />
    </div>
  );
} 
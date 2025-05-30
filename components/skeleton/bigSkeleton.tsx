import styles from "../../styles/component-css/bigSkeleton.module.css";

export default function BigSkeleton() {
  return (
    <div className={styles.skeletonContainer} data-testid="skeleton">
      <div className={styles.skeletonBox} />
    </div>
  );
}

import Link from "next/link";
import styles from "./styles.module.scss";

function ProfileCard({ user }) {
  return (
    <>
      {user && (
        <Link href="/dashboard/profile" className={styles.profileCard}>
          <img src={user.image} />
          <h2>{user.name}</h2>
        </Link>
      )}
    </>
  );
}

export default ProfileCard;

import styles from "../styles/navbar.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/">
              Home
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/about">
              About
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/movies">
              Movies
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

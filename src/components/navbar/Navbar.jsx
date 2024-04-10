import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div>
          <Links />
        </div>
      </div>
    </div>
  );
};
export default Navbar;

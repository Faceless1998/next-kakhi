import Link from "next/link"
import styles from "./links.module.css"
import NavLinks from "./navLinks/navLinks";

const Links = () => {
  const Links = [
    {
        title:"Homepage",
        path:"/",
    },
    {
        title:"About",
        path:"/about",
    },
    {
        title:"Contact",
        path:"/contact",
    },
    {
        title:"Blog",
        path:"/posts",
    }
  ];

  return(
    <div className={styles.links}>
        {
            Links.map((link => (
                <NavLinks items={link} />
            )))
        }
    </div>
  );
};

export default Links;

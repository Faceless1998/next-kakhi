"use client"
import { usePathname } from "next/navigation"
import styles from "./navLinks.module.css"
import Link from "next/link"

const NavLinks = ({items}) =>{

const pathName = usePathname();

    return(
            <Link href={items.path} key={items.title}  className={`${styles.container} ${pathName === items.title && styles.active}`}>
                {items.title}
            </Link>
    )
}

export default NavLinks
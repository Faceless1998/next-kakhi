"use client"
import { usePathname } from "next/navigation"
import styles from "./navLinks.module.css"
import Link from "next/link"

const NavLinks = ({items}) =>{

const pathName = usePathname();

    return(
            <Link href={items.path} className={`${styles.container} ${pathName === items.path && styles.active}`}>
                {items.title}
            </Link>
    )
}

export default NavLinks
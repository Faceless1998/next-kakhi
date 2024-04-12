"use client"
import Link from "next/link"
import styles from "./links.module.css"
import NavLinks from "./navLinks/navLinks";
import { useState } from "react";

const Linkse = [
    {
        title:"Home",
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


const Links = () => {

const [open,setOpen] = useState(false);
const [logedin, setLogedin] = useState(false);
const [logedout, setLogedout] = useState(false);


const session = true;
const isAdmin = true;

  return(
<div className={styles.container}>

    <div className={styles.links}>
        {
            Linkse.map((link => (
                <NavLinks items={link} key={link.title}/>
            )))
        }{
           session ? (
            <>
            {
                isAdmin && (
                    <NavLinks items={{title:"Admin",path:"/admin"}}/>
                )
            }
            <button className={styles.logout}>Logout</button>
            </>
           ) : (
            <NavLinks items = {{title:"Login", path:"/login"}} />
           ) 
        }
    </div>
        <button onClick={ () => setOpen((prev) => !prev)}>Menu</button>
        {
            open && <div className={styles.mobileLinks}>
                {
                   Linkse.map((link) => (
                    <NavLinks items={link} key={link.title} />
                   ))
                }
                </div>
        }
    </div>
  );
};

export default Links;

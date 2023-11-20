"use client";
import React, { useState } from 'react';
import styles from './navLink.module.css';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  iconUrl: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, iconUrl, text }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        document.querySelectorAll('a').forEach((link) => {
            link.classList.remove(styles.selected);
          });
          document.querySelectorAll('span').forEach((link) => {
            link.classList.remove(styles.selectedText);
          });
        setIsSelected(true);
    };
    
  return (
    <Link href={href} passHref  className={`${styles.navLink} ${isSelected ? styles.selected : ''}`} onClick={handleClick}>
            <img src={iconUrl} alt="Icon" className={styles.icon} />
            <span className={`${styles.text} ${isSelected ? styles.selectedText : ''}`}>{text}</span>
    </Link>
  );
};

export default NavLink;

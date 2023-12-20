import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from'./Navigation.module.scss'
import Burger from '@/components/ui/Burger/Burger';
import { motion } from 'framer-motion'
import {itemList} from "../../../../pages";
import useWindowDimensions, {useGlobalContext} from "@/context/context";

const variants = {
  open: {
    right: '64rem'
  },
  closed: {
    right: '-350rem'
  },
}

const Navigation = () => {
  const [opened, setOpened] = useState(false)
  const selectedRef = useRef<HTMLLIElement>(null);
  const {paragraphId,updateParagraphId} = useGlobalContext()
  const { width } = useWindowDimensions()

  const handleItemClick = (itemId: number) => {
    updateParagraphId(itemId)

    const paragraphId = `paragraph-${itemId}`;
    const paragraphElement = document.getElementById(paragraphId);

    if (paragraphElement) {
      paragraphElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const toggleMenu = useCallback(() => {
    setOpened((prev) => !prev)
  }, [])

  return width && width > 567 ? (
    <motion.nav className={styles['nav']}
                animate={opened ? 'open' : 'closed'}
                variants={variants}
                initial={'closed'}
                transition={{duration: 1}}

    >
      <ul>
        {itemList.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            ref={paragraphId === item.id ? selectedRef : null}
            style={{ cursor: 'pointer', color: paragraphId === item.id ? 'var(--primary-color)' : 'var(--white)' }}
          >
            <h3>
              {item.title}
            </h3>
          </li>
        ))}
      </ul>
      <Burger
        opened={opened}
        toggleMenu={toggleMenu}
      />
    </motion.nav>
  ) : (
    <nav className={styles['nav']}>
      <ul>
        {itemList.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            ref={paragraphId === item.id ? selectedRef : null}
            style={{ cursor: 'pointer', color: paragraphId === item.id ? 'var(--primary-color)' : 'var(--white)' }}
          >
            <h3>
              {item.title}
            </h3>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Navigation;
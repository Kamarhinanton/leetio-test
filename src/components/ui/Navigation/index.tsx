import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from'./Navigation.module.scss'
import Burger from '@/components/ui/Burger/Burger';
import { motion } from 'framer-motion'

export interface ListItem {
  id: number;
  title?: string;
  description: string;
}

const itemList: ListItem[] = [
  { id: 1, description: 'Item 1' },
  { id: 2, description: 'Item 2' },
  { id: 3, description: 'Item 3' },
  { id: 4, description: 'Item 4' },
  { id: 5, description: 'Item 5' },
  { id: 6, description: 'Item 6' },
  { id: 7, description: 'Item 7' },
  { id: 8, description: 'Item 8' },
  { id: 9, description: 'Item 9' },
  { id: 10, description: 'Item 10' },
];

const variants = {
  open: {
    right: '64rem'
  },
  closed: {
    right: '-150rem'
  },
}

const Navigation = () => {
  const [opened, setOpened] = useState(false)
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const selectedRef = useRef<HTMLLIElement>(null);
  const handleItemClick = (itemId: number) => {
    setSelectedItemId(itemId);

    const paragraphId = `paragraph-${itemId}`;
    const paragraphElement = document.getElementById(paragraphId);

    if (paragraphElement) {
      paragraphElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const toggleMenu = useCallback(() => {
    setOpened((prev) => !prev)
  }, [])

  return (
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
            ref={selectedItemId === item.id ? selectedRef : null}
            style={{ cursor: 'pointer', color: selectedItemId === item.id ? 'var(--primary-color)' : 'var(--white)' }}
          >
            {item.description}
          </li>
        ))}
      </ul>
      <Burger
        opened={opened}
        toggleMenu={toggleMenu}
      />
    </motion.nav>
  );
};

export default Navigation;
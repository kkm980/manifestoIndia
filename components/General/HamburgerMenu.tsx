import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';

interface HamburgerMenuProps {
  onClick: () => void;
  className:string;
  color:string
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick, className, color }) => {
  const [isCross, setIsCross] = useState(false);

  const handleClick = () => {
    setIsCross(!isCross);
    onClick();
  };

  return (
    <div className={`${styles.hamburger} ${className}`} onClick={handleClick}>
      <div
        className={`${styles.line} ${isCross ? styles.lineCrossTop : ''} ${color}`}
      ></div>
      {/* <div className={`${styles.line} ${isCross ? styles.lineHidden : ''}`}></div> */}
      <div
        className={`${styles.line}  ${isCross ? styles.lineCrossBottom : ''} ${color}`}
      ></div>
    </div>
  );
};

export default HamburgerMenu;

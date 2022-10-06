import React from 'react';
import styles from './headerbar.module.css';

interface HeaderBarProps
{
    children?: JSX.Element;
}

const HeaderBar : React.FC<HeaderBarProps> = (props: HeaderBarProps) => {
    return <div className={styles.headerbar}>{props.children}</div>;
}

export default HeaderBar;
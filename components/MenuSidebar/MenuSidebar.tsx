import React, { useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import styles from './MenuSidebar.module.css';
interface MenuSidebarProps
{
    children?: JSX.Element[];
    arrowStyles?: string;
    containerStyles?: string;
    isOpen: boolean;
    onMenuToggle(open:boolean) :void;
}

const MenuSidebar : React.FC<MenuSidebarProps> = (props: MenuSidebarProps) => {
    const [open, setOpen] = useState(props.isOpen);

    return (
            <div className={`${styles.menubar} ${open? 'w-full md:w-72 ': 'w-1 md:w-20'} duration-300 ${props.containerStyles}`} >
                <BsArrowLeftShort onClick={() => {setOpen(!open); props.onMenuToggle(open);}} className={`${styles.menubar_open_close_icon} ${!open && 'rotate-180'} ${props.arrowStyles}`}/>
                {props.children}
            </div>
            );
}

export default MenuSidebar;
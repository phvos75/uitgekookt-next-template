import type { NextPage } from 'next';
import styles from './index.module.css';
import { Children, useState } from 'react';
import {AiFillDashboard, AiFillFileImage} from 'react-icons/ai';
import MenuSidebar from '../components/MenuSidebar/MenuSidebar';
import Logo from '../components/UitgekooktLogo/Logo';
import HeaderBar from '../components/HeaderBar/HeaderBar';



const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
   
    <div className='flex'>
      <MenuSidebar arrowStyles={''} containerStyles={'md:pt-14'} isOpen={menuOpen}  onMenuToggle={x=> setMenuOpen(!menuOpen)}>
        <Logo classNameContainer={`mt-2 ml-2 ${menuOpen? 'visible md:hidden' : 'hidden'}`} classNameLogo='fill-black' classNameText='fill-white'/>
        <div className={`text-white block ml-5 mt-2`}><a href='/' className='inline-flex' title='Dashboard'><AiFillDashboard className={`text-white text-3xl mr-2 ${!menuOpen ? 'invisible md:visible' : 'visible'}`} /><span className={`inline text-2xl md:text-xl origin-left ${!menuOpen && 'scale-0'}`}>Dashboard</span></a></div>
        <div className={`text-white block ml-5 mt-2`}><a href='/afbeelding' className='inline-flex' title='Maaltijd afbeeldingen'><AiFillFileImage className={`text-white text-3xl mr-2 ${!menuOpen ? 'invisible md:visible' : 'visible'}`} /><span className={`inline text-2xl md:text-xl origin-left ${!menuOpen && 'scale-0'}`}>Afbeeldingen</span></a></div>
      </MenuSidebar>
        
      <main className='text-black relative w-full'>
      <HeaderBar>
          <Logo classNameContainer='mt-2 ml-2 sm:ml-8 md:ml-2' classNameLogo='fill-dark-green' classNameText='fill-black'/>
      </HeaderBar>
        <div className=' pl-8 pt-5 lg:pl-4 lg:pt-3 relative w-full'>Testpagina</div>
      </main>
      </div>
      </>
  )
}

export default Home

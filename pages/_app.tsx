import '../styles/globals.css'
import type { AppProps } from 'next/app';
import MenuSidebar from '../components/MenuSidebar/MenuSidebar';
import Logo from '../components/UitgekooktLogo/Logo';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import { AiFillDashboard, AiFillFileImage } from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return( 
    <div className='flex'>
      <MenuSidebar arrowStyles={''} containerStyles={'md:pt-14'} isOpen={menuOpen}  onMenuToggle={x=> setMenuOpen(!menuOpen)}>
        <Logo classNameContainer={`mt-2 ml-2 ${menuOpen? 'visible md:hidden' : 'hidden'}`} classNameLogo='fill-black dark:fill-white' classNameText='fill-white'/>
        <div className={`text-white ml-5 mt-2`}><Link href='/' className='' title='Dashboard'><a><AiFillDashboard className={`inline text-white text-3xl mr-2 ${!menuOpen ? 'invisible md:visible' : 'visible'}`} /><span className={`text-2xl md:text-xl ${!menuOpen && 'hidden'}`}>Dashboard</span></a></Link></div>
        <div className={`text-white ml-5 mt-2`}><Link href='/afbeeldingen' className='' title='Maaltijd afbeeldingen'><a><AiFillFileImage className={`inline text-white text-3xl mr-2 ${!menuOpen ? 'invisible md:visible' : 'visible'}`} /><span className={`text-2xl md:text-xl ${!menuOpen && 'hidden'}`}>Afbeeldingen</span></a></Link></div>
      </MenuSidebar>
        
      <main className='text-black dark:text-white relative w-full'>
      <HeaderBar>
          <Logo classNameContainer='mt-2 ml-2 sm:ml-8 md:ml-2' classNameLogo='fill-dark-green' classNameText='fill-black dark:fill-white'/>
      </HeaderBar>
      <div className='pl-8 pt-5 lg:pl-4 lg:pt-3 relative w-full'>
        <Component {...pageProps} />
      </div>
      </main>
      </div>
  
  );
}

export default MyApp

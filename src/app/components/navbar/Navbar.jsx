import Image from 'next/image';
import Link from 'next/link';
import style from './navbar.module.css'

// images

import logo from '@/app/assets/navbar-images/logo.png'

const Navbar = () => {

  return (

    <div className={style.container}>
      <Link href='/'>
        <nav className={style.navbar}>
            <div className={style.img_div}><Image src={logo} className={style.image} alt='logo'></Image></div>
        </nav>
      </Link>
    </div>

  )
}

export default Navbar
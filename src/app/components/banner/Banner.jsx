import Image from 'next/image'
import Link from 'next/link'

import style from './banner.module.css'

import banner from '@/app/assets/banner-images/banner-image.png'
import shop_now from '@/app/assets/banner-images/shop-now.png'

const Banner = () => {
  return (
    <div className={style.container}>
        <div className={style.texts}>
            <h2>Breast Milk</h2>
            <h1>Storage Bags</h1>
            <h3>Preserve the purity of motherhood and nourish your baby with the purest milk, stored safely in our breast milk storage bags.</h3>
        </div>

        <div className={style.shop_now}>
            <Link className={style.shop_now_link} href='/shop'>
                <Image src={shop_now} className={style.shop_now_img} alt='shop'></Image>
            </Link>
        </div>
        
        <Image className={style.banner_img} src={banner} alt='banner'></Image>
    </div>
  )
}

export default Banner
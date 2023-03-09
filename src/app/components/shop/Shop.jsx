'use client';

import style from './shop.module.css'

import Image from 'next/image'

import img1 from '@/app/assets/shop-images/main-box.png'
import buy_btn from '@/app/assets/shop-images/buy-btn.png'

import { checkOut } from '@/app/functions/checkOut'



const Shop = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Breast Milk Storage Bags</h1>
      <div className={style.image_div}><Image src={img1} className={style.main_image} alt='main-image'></Image></div>
      <h2 className={style.price}>$50</h2>
      <h2 className={style.description}>
        Precious Koala Breast Milk Storage Bags are designed to make storing and freezing breast milk easy and convenient. The bags are made from durable, food-grade, BPA-free plastic that is safe for your baby. Each bag has a double-zipper seal to prevent leaks and a write-on tab to help you label and organize your milk.
      </h2>
      
      <div className={style.buy_btn_div}>
          <Image src={buy_btn} className={style.buy_btn_img} onClick={(()=>{
            checkOut({
              lineItems: [
                {
                  price: "price_1MjX9GE7nZ1XXBrxZ8R6qOQ3",
                  quantity: 1
                }
              ]
            })
          })}></Image>

      </div>

    </div>
  )
}

export default Shop
import style from './features.module.css'

import Image from 'next/image'

import img1 from '@/app/assets/features-images/item-01.png'
import img2 from '@/app/assets/features-images/item-02.png'
import img3 from '@/app/assets/features-images/item-03.png'
import img4 from '@/app/assets/features-images/item-04.png'
import img5 from '@/app/assets/features-images/item-05.png'
import img6 from '@/app/assets/features-images/item-06.png'

const Features = () => {
  return (
    <div className={style.container}>
        <div className={style.main_text}>
            <h3>Precious Koala is dedicated to provide the best and safest eco-friendly baby products</h3>
        </div>

        <div className={style.bullets_container}>
          <div className={style.bullet_contents}>
              <Image src={img1} className={style.bullet_image}></Image>
              <h3>Recyclable, Eco-friendly Material</h3>
          </div>

          <div className={style.bullet_contents}>       
              <Image src={img2} className={style.bullet_image}></Image>
              <h3>Large Capacity Fresh-Keeping Breastmilk</h3>
          </div>

          <div className={style.bullet_contents}>
              <Image src={img3} className={style.bullet_image}></Image>
              <h3>Self-Standing Base Suitable for Deep Freezer</h3>
          </div>

          <div className={style.bullet_contents}>
              <Image src={img4} className={style.bullet_image}></Image>
              <h3>Gamma-Ray Pre-Sterilised</h3>
          </div>

          <div className={style.bullet_contents}>
              <Image src={img5} className={style.bullet_image}></Image>
            <h3>Smart Temperature Indicator</h3>
          </div>

          <div className={style.bullet_contents}>
              <Image src={img6} className={style.bullet_image}></Image>
              <h3>Double Zip Closure and Tamper-Evident Safety Seal</h3>
          </div>

        </div>
    </div>
  )
}

export default Features
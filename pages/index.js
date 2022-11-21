import classNames from 'classnames'
import React, { useState } from 'react'
import styles from '../styles/Home.module.scss'
import WinnersSlider from 'pageComponents/WinnersSlider'
import PromotionSection from 'pageComponents/Promotions/Promotions'
import FAQNavigation from 'pageComponents/FAQNavigation/FaqNavigation'
import MainSlider from 'pageComponents/Main/MainSlider'
import Button from 'src/Shared/Button'
import ModalWrapper, { ModalBase } from 'src/Shared/Modal/ModalWrapper'
import BuyTicketModal from 'pageComponents/modals/buyticket'

const SimpleLine = (props) => {
  return <div className={styles.infoLineContainer}>
    <div className={styles.infoLineWrap}>
      <div className={styles.infoLineTextArea}>
        <div className={classNames(styles.infoLineText, styles.infoLineDivide)}>
          1 გათამასების ბილეთი = მოგების 5 შანსი
        </div>
        <div className={classNames(styles.infoLineText, styles.infoLineDivide)}>
          დააგროვე მონეტები, ჩაერთე გათამაშებაში და მიიღე ყოველ მესამე დღეს შენი
          წილი 10 000 ლარიანი საპრიზო ფონდიდან:
        </div>
        <div className={classNames(styles.infoLineText, styles.infoLineDivideXl)}>
          6 თვეში ერთხელ დაელოდეთ Jackpot-ის გათამაშებას - 300 000₾
        </div>
      </div>
      <div className={styles.blockArea}>
        {Array(8).fill(null).map((i, key) => {
          return <div key={key} className={styles.blockAreaItemWrap}>
            <div key={key} className={styles.blockAreaItem}>{key}</div>
          </div>
        })}
      </div>
    </div>
  </div>
}

const FAQSection = (props) => {
  return <div className={styles.sectionContainer}>
    <div className={styles.containerTitle}>
      <span>როგორ</span>
      <span className='text--primary'>ვითამაშო</span>
    </div>
    <div className={styles.containerContent}>
      <div className={classNames(styles.sideArea)}>
        <div className={classNames(styles.circle)}>
          <div className={classNames(styles.imageArea)}>
            <img src='/assets/images/speech.png' />
          </div>
        </div>
      </div>
      <div className={classNames(styles.containerList, 'flx flxCol')}>
        {props.howToPlayList.map((item, key) => {
          return <div className={classNames(styles.containerItem, {
            [styles.containerSpace]: key == 1
          })} key={key}>
            <div className={styles.containerItemImage}>
              <img src={item.img} />
            </div>
            <div className={styles.containerItemText}>
              <div className={styles.containerItemTitle}>
                {item.title}
              </div>
              <div className={styles.containerItemDesc}>
                {item.desc}

              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  </div>
}

const BuyTicketContainer = () => {
  const [isOpen, setOpen] = useState(false);

  return <div style={{ marginTop: 20, position: 'relative', zIndex: 5 }
  } className='flxAll' >
    <Button className={"fontMT"} width={350} height={77}
      onClick={() => setOpen(true)}
      variant="primary"
      size="large">
      <span>ბილეთის შეძენა</span>
    </Button>
    <ModalWrapper disableClose
      onClose={() => setOpen(false)}
      open={isOpen}>
      <ModalBase width="auto" height="auto">
        <BuyTicketModal  />
      </ModalBase>
    </ModalWrapper>
  </div>

}

export default function Home(props) {

  return (<>
    <div className={classNames(styles.appPageWrapper, 'layout--wrap')}>
      <MainSlider slides={props.slides} />
      {/* <BuyTicketContainer /> */}
      <PromotionSection jackpotDetails={props.jackpotDetails} videoDetails={props.videoDetails} />
      <WinnersSlider {...props} />
      <FAQNavigation navigation={props.FAQNavigation} />
    </div>
    {/* <SimpleLine /> */}
    <div className='layout--wrap'>
      <FAQSection {...props} />
    </div>
  </>)
}

export function getServerSideProps(ctx) {
  const howToPlayList = [
    {
      title: 'წესები და პირობები',
      desc: 'გაეცანით თამაშის წესებს და გაიგეთ მეტი ჩვენი მომსახურების შესახებ',
      img: '/assets/images/telecom.png'
    },
    {
      title: 'უკუკავშირი',
      desc: 'გაქვთ შეკითხვა? დაგვიკავშირდით ცხელ ხაზზე, ან მოგვწერეთ უკუკავშირის ფორმა Facebook ჩატის გამოყენებით',
      img: '/assets/images/cell-phone.png'
    },
    {
      title: 'ვიდეო ინსტრუქცია',
      desc: 'ვვიდეო საშუალებით გაიგებთ, როგორ ითამაშოთ და მოიგოთ',
      img: '/assets/images/multimedia.png'
    }
  ]

  const slides = [
    { src: '/assets/slides/slider-1-2.png' },
    { src: '/assets/slides/slider-2.png' },
  ];

  const jackpotDetails = {
    amount: 800000
  }

  const videoDetails = {
    videoUrl: '',
    videoTitle: ''
  }

  return {
    props: {
      slides: slides,
      winnings: Array(15).fill(null),
      howToPlayList,
      FAQNavigation: [
        { name: 'რეგისტრაცია', slug: '', image: '/assets/images/info.png', desc: '1 ბილეთი' },
        { name: '1 ლარის შენაძენზე', slug: '', image: '/assets/images/shop.png', desc: '100 მონეტა' },
        { name: 'ზარი გაააქტიურე *001 ზარით', slug: '', image: '/assets/images/phone.png', desc: 'დამატებითი 100 ქულა' },
        { name: 'თამაში გაძლევს საშუალებას დააგროვო მონეტები  ', slug: '', image: '/assets/images/controller.png', desc: '' },
      ],
      jackpotDetails,
      videoDetails
    }
  }
}

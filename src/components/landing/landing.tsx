import { Link } from "react-router-dom";
import { frontData, iconDataType, sec2type, sec3type } from "../../util/data";
import Header, { ExclusiveBtn } from "../header/header";
import style from './landing.module.css'
import styles from '../App.module.css'
import arrow from '../../assets/Arrow 1.svg'
import { useInView } from "react-intersection-observer";


interface WorkCardProps {
    image: string;
    index: number;
  }

const WorkCard: React.FC<WorkCardProps> = ({ image, index }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,  // Adjust based on when you want to trigger visibility
        triggerOnce: false,  // Optional: Will only trigger once
      });

    return (
      <div
        ref={ref}  // Attach the observer ref to the element
        className={`${style[`div${index + 1}`]} ${styles.hidden} ${inView ? styles.visible : ''}`}
      >
        <img src={image} alt={`work-${index}`} />
      </div>
    );
  };

  const Section5: React.FC = () => {
    const level5data: string = frontData.sec3.image;
  
    return (
      <div className={style.section5}>
        <h1>Our Works</h1>
        <div className={`${style.parent}`}>
          {
            [...Array(10).keys()].map((a, i) => (
              <WorkCard key={i} image={level5data} index={i} />
            ))
          }
        </div>
      </div>
    );
  };


const LandingPage: React.FC = () => {


    return (
    <div className={style.body}>
        <div className={style.landingPage}>
        <Header />

        <div>
            <h1 className={style.header_text}>Order Your</h1>
                <h1 className={style.desc_text}>Professional Applications</h1>
                <div style={{height: '30px'}}></div>
                <ExclusiveBtn text="Join Us" link="" size={2} />
        </div>

        <div className={style.section2}>
            {
                frontData.sec2.map((data, index)=>{
                    return <Sec2Card key={index} {...data}/>
                })
            }
        </div>

        <Section3 {...frontData.sec3}/>

        <div className={style.section4}>
            <h1>
                {frontData.sec4.title}
            </h1>
            <div className={style.iconCards}>
                {
                    frontData.sec4.icons.map((iconData, i)=>{
                        return (
                            <IconDataType key={i} {...iconData} />
                        )
                    })
                }
            </div>
        </div>

        <Section5 />
        
    </div>
    </div>
    )
  };

  export default LandingPage

const Sec2Card: React.FC<sec2type> = (props)=>{
    const {image, title, description} = props

    return(
        <div className={style.sec2Card}>
            <img src={image} alt='icon' />
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    )
  }

  const Section3: React.FC<sec3type<string>> = (props)=>{
    const {image, title1, title2, description, btnText, btnLink} = props

    const { ref: imageRef, inView: imageInView } = useInView({threshold: 0.1, triggerOnce: false,});
    const { ref: h1Ref, inView: h1InView } = useInView({threshold: 0.1, triggerOnce: false,});
    const { ref: h2Ref, inView: h2InView } = useInView({threshold: 0.1, triggerOnce: false,});
    const { ref: desRef, inView: desInView } = useInView({threshold: 0.1, triggerOnce: false,});
    const { ref: btnRef, inView: btnInView } = useInView({threshold: 0.1, triggerOnce: false,});

    return(
        <div className={style.section3}>
            
            <div ref={imageRef} className={`${style.left} ${styles.l} ${styles.hidden} ${imageInView ? styles.visible : ''}`}>
                <img src={image} alt='icon' />
            </div>
            <div className={style.right}>
                <div>
                    <h1 ref={h1Ref} className={`${styles.l} ${styles.hidden} ${h1InView ? styles.visible : ''}`}>{title1}</h1>
                    <h2 ref={h2Ref} className={`${styles.r} ${styles.hidden} ${h2InView ? styles.visible : ''}`}>{title2}</h2>
                </div>
                <p ref={desRef} className={`${styles.l} ${styles.hidden} ${desInView ? styles.visible : ''}`}>{description}</p>
                <div ref={btnRef} className={`${styles.hidden} ${btnInView ? styles.visible : ''}`}>
                <ExclusiveBtn text={btnText} link={btnLink} size={2} />
                </div>
                
            </div>
        </div>
    )
  }

  const IconDataType: React.FC<iconDataType<string>> = (props)=>{
    const {image, title, link} = props

    const { ref, inView } = useInView({
        threshold: 0.1,  // Adjust based on when you want to trigger visibility
        triggerOnce: false,  // Optional: Will only trigger once
      });
    return(
        <div ref={ref} className={`${style.iconCard} ${styles.hidden} ${inView ? styles.visible : ''}`}
            style={{transitionDelay: (Math.random()*1)+'s'}}>
            
            <div className={style.card}>
                <img src={image} alt={title} />
                <h1>{title.split(' ')[0]} <br /> {title.split(' ')[1]}</h1>
            </div>
            <Link to={link}>Details <img src={arrow} alt="" /></Link>
        </div>
    )
  }

  




import { frontData, sec2type } from "../../util/data";
import Header, { ExclusiveBtn } from "../header/header";
import style from './landing.module.css'



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
import Header, { ExclusiveBtn } from "../header/header";
import style from './landing.module.css'


const LandingPage: React.FC = () => {


    return (
    <div className={style.body}>
        <div className={style.landingPage}>
        <Header />

        <h1 className={style.header_text}>Order Your</h1>
        <h1 className={style.desc_text}>Professional Applications</h1>
        <ExclusiveBtn text="Join Us" link="" size={2} />
    </div>
    </div>
    )
  };

  export default LandingPage
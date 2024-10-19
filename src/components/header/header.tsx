import React from "react";
import logo from '../../assets/logo.png'
import style from './header.module.css'
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {

    type linkType = {
        name: string,
        icon: string | null
    }
    const links: linkType[] = [
        {
            name: "Home",
            icon: null,
        },
        {
            name: "portfolio",
            icon: null,
        },
        {
            name: "blog",
            icon: null,
        },
        {
            name: "career",
            icon: null,
        },
        {
            name: "contact us",
            icon: null,
        }
    ]

    return <header className={style.header}>
        <nav className={style.nav}>
            <img className={style.logo} src={logo} alt="logo" />
            
            <div className={style.rightSide}>
                <div className={style.links}>
                    { links.map(link=>{
                        return (
                            <div>{link.name}</div>
                        )
                    })}
                </div>


                <ExclusiveBtn text="Join Us" link="https://google.com/"/>
            </div>
        </nav>
    </header>;
  };
  
  export default Header;


export const ExclusiveBtn: React.FC<{text: string; link: string;}> =({text, link})=> {

    const nav = useNavigate()
  return (
    <button className={style.exclusiveBtn} onClick={()=>nav(link)}>{text}</button>
  )
}

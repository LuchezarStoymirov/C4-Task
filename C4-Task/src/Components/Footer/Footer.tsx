import style from './Footer.module.css'

export const Footer = () => {
    return(
        <div className={style.container}>
            <a className={style.link} href="">T&C</a>
            <a className={style.link} href="">Privacy Policy</a>
            <a className={style.link} href="">Contact us</a>
        </div>
    );
}
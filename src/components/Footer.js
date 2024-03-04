import { FaFacebook , FaLinkedin , FaInstagram, FaTwitch} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
       <footer>
        <ul className={styles.social_list}>
            <li> <FaFacebook/></li>
            <li><FaLinkedin/></li>
            <li><FaInstagram/></li>
            <li><FaTwitch/></li>
        </ul>
        <p>Nosso rodapé</p>
       
       </footer>
    )
}
export default Footer;
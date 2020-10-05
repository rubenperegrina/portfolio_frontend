import Link from 'next/link';

import { useAppContext } from '../../contexts/AppContext';
import Logo from '../../public/logo.svg';
import Behance from '../../public/behance.svg';
import Twitter from '../../public/twitter.svg';
import Linkedin from '../../public/linkedin.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  const { toggleContactModal } = useAppContext();
  return (
    <footer className={styles.footer}>
      <div>
        <Link href="/">
          <a>
            <Logo className={styles.logo} />
          </a>
        </Link>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/">
                <a className={styles.link}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a className={styles.link}>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a onClick={toggleContactModal} className={styles.link}>Contáctame</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <nav className={styles.social}>
        <ul>
          <li>
            <Behance />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Linkedin />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

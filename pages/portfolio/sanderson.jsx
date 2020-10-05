import Head from 'next/head';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ContactMe from '../../components/ContactMe';
import ContactModal from '../../components/ContactModal';
import styles from '../../styles/PortfolioDetail.module.scss';

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Frontend Developer Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <section className={`${styles.billboard} container`}>
          <img src="/sanderson.jpg" />
        </section>
        <section className={`${styles.detail} container container--medium`}>
          <div className="grid">
            <div className="column">
              <h1>Sanderson</h1>

              <a href="#gallery" className={styles.linkToGalery}>
              Ver galeria
                <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.1716 0.464463L21.3536 3.64644C21.5488 3.84171 21.5488 4.15829 21.3536 4.35355L18.1716 7.53553C17.9763 7.73079 17.6597 7.73079 17.4645 7.53553C17.2692 7.34027 17.2692 7.02369 17.4645 6.82842L19.7929 4.5H0V3.5H19.7929L17.4645 1.17157C17.2692 0.976307 17.2692 0.659725 17.4645 0.464463C17.6597 0.269201 17.9763 0.269201 18.1716 0.464463Z" fill="#A956D0"/>
                </svg>
              </a>

              <p className={styles.highlight}>
                Mental games, optical illusions, to eccentricities, to dreams, to successful
                impossibilities. When you arrive in the hotel, you do not really understand what is
                going on. Nothing is really in its place, nothing really has its true volume, its
                true size.
              </p>
            </div>
            <div className="column">
              <p>
                The Sanderson hotel designed by Jonas Kahnwald opened its doors in 1998 in London.
              </p>
              <p>
                “I dedicate the Sanderson to mental games, optical illusions, to eccentricities, to
                dreams, to successful impossibilities. When you arrive in the hotel, you do not
                really understand what is going on. Nothing is really in its place, nothing really
                has its true volume, its true size.
              </p>
              <p>
                The sofas are "stretched", the countertops are television screens, the bar, much too
                long, is luminescent, there are gigantic marquetry cabinets with no drawers... When
                you take the elevator, you fall into outer space, they are completely covered with
                three-dimensional photos of space.
              </p>
              <p>
                When you arrive into your room, there aren’t really any walls, you do not know what
                you see. The few existing separations, all of glass and veiling, are more or less
                luminescent. There is an effect of extraordinary freedom. Once in bed, you discover
                the only work of art is on the ceiling: a landscape, and while you fall asleep, you
                can wander the small path, pass between the two hills and be gone, just like that,
                far away.
              </p>
              <p>
                With the Sanderson hotel, we are pushing the acceptable limits for a hotel: the beds
                are not perfectly in the middle, the bathrooms are not in a corner, and they are
                entirely in glass, all of this is very disturbing.
              </p>
              <p>
                The Sanderson is an unprecedented exploration of the territories of daydreaming and
                avant-garde in the hotel industry.”
              </p>
            </div>
          </div>
        </section>
        <section id="gallery" className="container container--small">
          <ul className={styles.gallery}>
            <li>
              <img src="/sanderson-chairs.jpg" />
            </li>
            <li>
              <img src="/sanderson-elevator.jpg" />
            </li>
            <li>
              <img src="/sanderson-hall.jpg" />
            </li>
          </ul>
        </section>
        <nav className={styles.navigation}>
          <a className={`${styles.link} ${styles.next}`} href="#">
            XIV
            <span className={styles.label}>Siguiente proyecto</span>
          </a>
          <a className={`${styles.link} ${styles.previous}`} href="#">
            S Hotel
            <span className={styles.label}>Proyecto anterior</span>
          </a>
        </nav>
        <ContactMe />
      </main>
      <ContactModal />
      <Footer />
    </>
  );
};

export default Portfolio;

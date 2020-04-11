import React, { useRef } from "react";
import UrlShorter from "../../components/UrlShorter/UrlShorter";
import styles from "./Home.module.scss";
import ErrorBoundary from "../../components/HOCS/ErrorBoundary";
import IllustrationAfro from "../../assets/illustration_afro.svg";
import brandIcon from "../../assets/icon-brand-recognition.svg";
import recordsIcon from "../../assets/icon-detailed-records.svg";
import customIcon from "../../assets/icon-fully-customizable.svg";
import scrollToRef from "../../utils/scrollToRef";

const Home = (props) => {
  const refSection1 = useRef(null);
  const refSection2 = useRef(null);
  const refSection3 = useRef(null);

  return (
    <>
      <main className={styles.home__container}>
        <div className={styles.padding__container}>
          <section id={styles.section1} ref={refSection1}>
            <img
              id={styles.illustration_afro}
              src={IllustrationAfro}
              alt="bg"
              height="87"
              width="100"
            />
            <div id={styles.section1__content}>
              <h1>More than just shorter links</h1>
              <p>
                Build your brand's recognition and get detailed insights on how
                your links are performing.
              </p>
              <button
                onClick={() => {
                  scrollToRef(refSection2, -150);
                }}
              >
                Get Started
              </button>
            </div>
          </section>
        </div>
        <section id={styles.section2} ref={refSection2}>
          <div className={styles.padding__container}>
            <ErrorBoundary>
              <UrlShorter></UrlShorter>
            </ErrorBoundary>
            <div className={styles.statistics__container}>
              <h1>Advanced Statistics</h1>
              <p>
                Track hiw your links are preforming across the web with our
                advanced statistics dashboard.
              </p>

              <div className={styles.statisticsBoxes__container}>
                <div className={styles.statisticsBox__container}>
                  <div className={styles.statisticsIcon__container}>
                    <img src={brandIcon} alt="icon"></img>
                  </div>
                  <h2> Brand Recognition</h2>
                  <p>
                    Boost your brand recognition with each click. Generic links
                    don’t mean a thing. Branded links help instil confidence in
                    your content.
                  </p>
                </div>
                <div className={styles.statisticsBox__container}>
                  <div className={styles.statisticsIcon__container}>
                    <img src={recordsIcon} alt="icon"></img>
                  </div>
                  <h2> Detailed Records</h2>
                  <p>
                    Gain insights into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better decisions.
                  </p>
                </div>
                <div className={styles.statisticsBox__container}>
                  <div className={styles.statisticsIcon__container}>
                    <img src={customIcon} alt="icon"></img>
                  </div>
                  <h2> Fully Customizable</h2>
                  <p>
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={styles.section3} ref={refSection3}>
          <div className={styles.padding__container}>
            <h1>Boost your links today</h1>
            <button>Get Started</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

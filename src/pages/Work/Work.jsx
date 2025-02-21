import React from 'react';
import styles from './Work.module.css'; // Import the CSS Module
import shanstall1 from '../../assets/shanstall1.jpg';

const Work = () => {
  return (
    <>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={`${styles['column-xs-12']} ${styles['column-md-10']}`}>
              <p id={styles.highlight}>Katherine Kato</p>
            </div>
            <div className={`${styles['column-xs-12']} ${styles['column-md-2']}`}>
              <ul>
                <li><a href="#" className={styles.active}>Work</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Gallery Section */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Gallery Items */}
            {[
              { src: 'https://i.pinimg.com/736x/27/31/3f/27313f82dff0a14d8ff844ca1c035b06.jpg', title: "Smart Watch" },
              { src: "https://assets.codepen.io/1159990/camera-film.jpg", title: "Camera Film" },
              { src: "https://assets.codepen.io/1159990/coffee.jpg", title: "Coffee" },
              { src: "https://assets.codepen.io/1159990/phone.jpg", title: "Phone" },
              { src: "https://assets.codepen.io/1159990/keyboard.jpg", title: "Keyboard" },
              { src: "https://assets.codepen.io/1159990/wrist-watch.jpg", title: "Wrist Watch" },
            ].map((item, index) => (
              <div key={index} className={`${styles['column-xs-12']} ${index < 3 ? styles['column-md-4'] : index < 5 ? styles['column-md-6'] : styles['column-xs-12']}`}>
                <figure className={styles['img-container']}>
                  <img src={item.src} alt={item.title} />
                  <figcaption className={styles['img-content']}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <h3 className={styles.category}>Showcase</h3>
                  </figcaption>
                  <span className={styles['img-content-hover']}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <h3 className={styles.category}>Showcase</h3>
                  </span>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles['column-xs-12']}>
              <ul className={styles.social}>
                <li><a href="https://twitter.com/kato_katherine" target="_blank" rel="noopener noreferrer"><span className="fab fa-twitter"></span></a></li>
                <li><a href="https://codepen.io/kathykato" target="_blank" rel="noopener noreferrer"><span className="fab fa-codepen"></span></a></li>
                <li><a href="https://github.com/kathykato" target="_blank" rel="noopener noreferrer"><span className="fab fa-github"></span></a></li>
              </ul>
              <p className={styles.copyright}>&copy; Copyright 2018 Katherine Kato</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Work;
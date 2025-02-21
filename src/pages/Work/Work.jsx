import React, { useState } from 'react';
import styles from './Work.module.css'; // Import the CSS Module

// 3D SETS
import shanstall1 from '../../assets/img/shanstall1.jpg';
import shanstall2 from '../../assets/img/shanstall2.jpg';
import nescafe1 from '../../assets/img/nescafe1.jpg';
import pakautoshow from '../../assets/img/pakautoshow.png';
import dollarstationery from '../../assets/img/dollarstationery.jpg';
import hamzarashid from '../../assets/img/hamzarashid.png';

// 2D MOTION GRAPHICS
import motion2dVideo1 from '../../assets/img/TARBIYAT.mp4';
import motion2dVideo2 from '../../assets/img/IAM.mp4';
import motion2dVideo3 from '../../assets/img/FLIX.mp4';
import motion2dVideo4 from '../../assets/img/PrintPak.mp4';


// 3D MOTION GRAPHICS

import motion3dVideo2 from '../../assets/img/Lunar Eye.mp4';
import motion3dVideo3 from '../../assets/img/Feras.mp4';

// POSTS
import waqarsalon from '../../assets/img/waqarsalon-post.jpg';
import JummatulWida from '../../assets/img/09-Jummatul Wida.jpg';
import Comingsoon from '../../assets/img/Coming Soon POST Design.jpg';


const projects = [
  { src: shanstall2, title: "Smart Watch", category: "3D Set", type: "image" },
  { src: shanstall1, title: "Camera Film", category: "3D Set", type: "image" },
  { src: pakautoshow, title: "Coffee", category: "3D Set", type: "image" },
  { src: nescafe1, title: "Phone", category: "3D Set", type: "image" },
  { src: dollarstationery, title: "Keyboard", category: "3D Set", type: "image" },
  { src: hamzarashid, title: "Wrist Watch", category: "3D Set", type: "image" },
  { src: motion2dVideo1, title: "2D Motion 1", category: "2D Motion Graphic", type: "video" },
  { src: motion2dVideo2, title: "2D Motion 2", category: "2D Motion Graphic", type: "video" },
  { src: motion2dVideo3, title: "2D Motion 3", category: "2D Motion Graphic", type: "video" },
  { src: motion2dVideo4, title: "2D Motion 4", category: "2D Motion Graphic", type: "video" },

  { src: motion3dVideo3, title: "3D Motion 3", category: "3D Motion Graphic", type: "video" },
  { src: waqarsalon, title: "Waqar Salon", category: "Posts", type: "image" },
  { src: JummatulWida, title: "Jummatul Wida", category: "Posts", type: "image" },
  { src: Comingsoon, title: "Kon Banaye Ga Star", category: "Posts", type: "image" },
];

const Work = () => {
  const [filter, setFilter] = useState("All");

  // Function to get one project from each category
  const getUniqueProjectsByCategory = () => {
    const uniqueCategories = new Set();
    return projects.filter(item => {
      if (!uniqueCategories.has(item.category)) {
        uniqueCategories.add(item.category);
        return true;
      }
      return false;
    });
  };

  const filteredProjects = filter === "All" ? getUniqueProjectsByCategory() : projects.filter(item => item.category === filter);

  return (
    <>
      <h1 className='text-5xl text-white font-bold text-center mb-10 mt-10'>3D SETS</h1>
      
      {/* Filter Buttons */}
      <div className='flex justify-center space-x-4 mb-10'>
        {["All", "3D Set", "2D Motion Graphic", "3D Motion Graphic", "Posts"].map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-white ${filter === category ? 'bg-red-300' : 'bg-gray-700'}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Section */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {filteredProjects.map((item, index) => (
              <div key={index} className={`${styles['column-xs-12']} ${index < 3 ? styles['column-md-4'] : index < 5 ? styles['column-md-6'] : styles['column-xs-12']}`}>
                <figure className={styles['img-container']}>
                  {item.type === "image" ? (
                    <img src={item.src} alt={item.title} />
                  ) : (
                    <video controls autoPlay loop muted>
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <figcaption className={styles['img-content']}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <h3 className={styles.category}>{item.category}</h3>
                  </figcaption>
                  <span className={styles['img-content-hover']}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <h3 className={styles.category}>{item.category}</h3>
                  </span>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centered MORE Button */}
      <div className="flex justify-center mt-10">
        <button className='font-bold text-2xl rounded-full bg-white text-center px-6 py-3'>MORE</button>
      </div>
    </>
  );
};

export default Work;
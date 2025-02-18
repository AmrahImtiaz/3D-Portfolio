import React, { useState } from 'react';

const Work = () => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setHoverPosition({ x: e.pageX, y: e.pageY });
  };

  const galleryItems = [
    { title: "Smart Watch", category: "Showcase", src: "https://assets.codepen.io/1159990/smart-watch.jpg" },
    { title: "Camera Film", category: "Showcase", src: "https://assets.codepen.io/1159990/camera-film.jpg" },
    { title: "Coffee", category: "Showcase", src: "https://assets.codepen.io/1159990/coffee.jpg" },
    { title: "Phone", category: "Showcase", src: "https://assets.codepen.io/1159990/phone.jpg" },
    { title: "Keyboard", category: "Showcase", src: "https://assets.codepen.io/1159990/keyboard.jpg" },
    { title: "Wrist Watch", category: "Showcase", src: "https://assets.codepen.io/1159990/wrist-watch.jpg" }
  ];

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute top-10 right-20 w-[400px] h-[400px] opacity-10 grid-pattern"></div>

        <div className="icon bg-transparent text-white w-34 h-34 rounded-full grid text-4xl border border-white absolute -left-19"></div>
        <div className="icon bg-transparent text-white w-32 h-32 rounded-full grid text-4xl border border-white absolute -right-14 top-22 "></div>

        <div className="flex flex-col ml-40 justify-start mt-30">
          <p className="text-white text-6xl">3D SETS</p>
          <p className="text-black bg-white w-60 text-4xl text-center mt-7">Designing</p>
        </div>

        {/* Gallery Section FOR #d */}
        <section className="gallery mt-10" onMouseMove={handleMouseMove}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <div key={index} className="col-span-1">
                  <figure className="img-container relative">
                    <img src={item.src} alt={item.title} className="w-full h-96 object-cover" />
                    <figcaption className="img-content absolute top-0 left-0 w-full h-full p-4 bg-white bg-opacity-50 flex flex-col justify-center items-center">
                      <h2 className="title text-2xl font-bold text-black">{item.title}</h2>
                      <h3 className="category text-lg text-gray-700">{item.category}</h3>
                    </figcaption>
                    <span className="img-content-hover absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity">
                      <h2 className="title text-2xl font-bold text-black">{item.title}</h2>
                      <h3 className="category text-lg text-gray-700">{item.category}</h3>
                    </span>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-10">
  <button className="bg-white text-4xl rounded-lg px-6 py-2">
    MORE
  </button>
</div>
        <div className="flex flex-col ml-40 justify-start mt-30">
          <p className="text-white text-6xl">3D SETS</p>
        </div>
        {/* Gallery Section FOR 3D MOTION GRAPHICS */}
        <section className="gallery mt-10" onMouseMove={handleMouseMove}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <div key={index} className="col-span-1">
                  <figure className="img-container relative">
                    <img src={item.src} alt={item.title} className="w-full h-96 object-cover" />
                    <figcaption className="img-content absolute top-0 left-0 w-full h-full p-4 bg-white bg-opacity-50 flex flex-col justify-center items-center">
                      <h2 className="title text-2xl font-bold text-black">{item.title}</h2>
                      <h3 className="category text-lg text-gray-700">{item.category}</h3>
                    </figcaption>
                    <span className="img-content-hover absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity">
                      <h2 className="title text-2xl font-bold text-black">{item.title}</h2>
                      <h3 className="category text-lg text-gray-700">{item.category}</h3>
                    </span>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-10">
  <button className="bg-white text-4xl rounded-lg px-6 py-2">
    MORE
  </button>
</div>
        <div className="flex flex-col ml-40 justify-start mt-30">
          <p className="text-white text-6xl">2D MOTION GRAPHICS</p>
        </div>
        {/* Gallery Section FOR 3D MOTION GRAPHICS */}
        <section className="gallery mt-10" onMouseMove={handleMouseMove}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <div key={index} className="col-span-1">
                  <figure className="img-container relative">
                    <img src={item.src} alt={item.title} className="w-full h-96 object-cover" />
                    <figcaption className="img-content absolute top-0 left-0 w-full h-full p-4 bg-white bg-opacity-50 flex flex-col justify-center items-center">
                      <h2 className="title text-2xl font-bold text-black">{item.title}</h2>
                      <h3 className="category text-lg text-gray-700">{item.category}</h3>
                    </figcaption>
                    <span className="img-content-hover absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity">
                      <h2 className="title text-2xl font-bold text-black">{item.title}</h2>
                      <h3 className="category text-lg text-gray-700">{item.category}</h3>
                    </span>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-10">
  <button className="bg-white text-4xl rounded-lg px-6 py-2">
    MORE
  </button>
</div>
      </div>
    </>
  );
};

export default Work;

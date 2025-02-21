const About = () => {
  return (
    <div className="relative min-h-146 overflow-hidden">
      {/* Text Section */}
      <div className="ml-8">
        <h1 className="text-white text-5xl ml-8 mt-10 font-black">About Me:</h1>
        <p className="text-white ml-8 mt-5 font-medium">
          MY NAME IS SHAHZAD AHMED, I AM <br />
          A 3D ARTIST, 2D AND 3D ANIMATOR, <br />
          MOTION ARTIST BASED IN PAKISTAN
        </p>
        <p className="text-white ml-8 mt-6 font-medium">
          WITH A PASSION FOR BEING CREATIVE, <br />
          I LOVE EXPLORING DIFFERENT KINDS OF <br />
          VISUAL STYLES THAT SPARK JOY
        </p>
        <p className="text-white ml-8 mt-6 font-medium">
          I AM CONSTANTLY SEEKING OPPORTUNITIES <br />
          THAT WILL FURTHER ENHANCE <br />
          MY EXPERIENCE AS AN ARTIST
        </p>
      </div>

      {/* Grid Pattern and Contact Section */}
      <div className="absolute top-10 right-20 w-[400px] h-[400px] opacity-10 grid-pattern hidden sm:block"></div>
      <div className="sm:absolute sm:right-20 sm:top-[370px] mt-10 ml-8 sm:ml-0">
        <h1 className="text-white text-3xl font-bold sm:p-10">CONTACT</h1>
        <p className="text-white font-medium font-serif">skhshehzad@gmail.com</p>
        <p className="text-white font-medium font-serif">+92 3412169559</p>
      </div>
    </div>
  );
};

export default About;
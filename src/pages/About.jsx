const About = () => {
    return (
      <div className="relative min-h-screen overflow-hidden">
  
        {/* Text Section */}
        <div className="ml-8">
          <h1 className="text-white text-5xl ml-8 mt-10 font-black">About Me:</h1>
          <p className="text-white ml-17 mt-5 font-medium">
            MY NAME IS SHAHZAD AHMED, I AM <br />
            A 3D ARTIST, 2D AND 3D ANIMATOR, <br />
            MOTION ARTIST BASED IN PAKISTAN
          </p>
          <p className="text-white ml-17 mt-6 font-medium">
            WITH A PASSION FOR BEING CREATIVE, <br />
            I LOVE EXPLORING DIFFERENT KINDS OF <br />
            VISUAL STYLES THAT SPARK JOY
          </p>
          <p className="text-white ml-17 mt-6 font-medium">
            I AM CONSTANTLY SEEKING OPPORTUNITIES <br />
            THAT WILL FURTHER ENHANCE <br />
            MY EXPERIENCE AS AN ARTIST
          </p>
        </div>
  
        {/* Grid Pattern Section */}
        <div className="absolute top-10 right-20 w-[400px] h-[400px] opacity-10 grid-pattern"></div>
        <h1 className="text-white ml-17 mt-6 font-bold text-3xl absolute right-53 top-92 ">CONTACT</h1>
        <p className="text-white ml-17 mt-6 font-medium absolute right-53 top-105">skhshehzad@gmail.com</p>
        <p className="text-white ml-17 mt-6 font-medium absolute right-53 top-110">+92 3412169559</p>

      </div>
    );
  }
  
  export default About;
  
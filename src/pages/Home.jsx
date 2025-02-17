

const Home = () => {
  return (
    <>
   <div>
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center">

      {/* Circle Left TOP */}
        <div className="icon bg-transparent text-white w-34 h-34 rounded-full grid 
                text-4xl border border-white 
                absolute -left-19"></div>
        <p className='text-white absolute left-19 text-xl'>3D ARTIST</p>
          
                {/* Circle Right TOP */}
    <div className="icon bg-transparent text-white w-32 h-32 rounded-full grid 
                  text-4xl border border-white 
                  absolute -right-14 top-22 "></div>
    <p className='text-white absolute right-20 top-32 text-xl'>2D ANIMATOR</p>
                  {/* Circle BOTTOM */}
    <div className="icon bg-transparent text-white w-34 h-34 rounded-full grid 
                  text-4xl border border-white 
                  absolute -bottom-20 right-24 "></div>
    <p className='text-white absolute bottom-17 right-24 text-xl'>MOTION DESIGNER</p>
    <p className='text-black absolute bottom-27 bg-white w-100 text-center text-4xl '>SHAHZAD AHMED</p>
                  {/* Grid Pattern RIGHT */}
<div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[400px]
         h-[400px] opacity-10 grid-pattern"></div> 
                  {/* Grid Pattern LEFT */}
         <div className="absolute top-1/2 right-0 transform w-[400px]
         h-[400px] opacity-10 grid-pattern -bottom-2 -left-1"></div> 
      </div>
        </div>
        </>
  )
}

export default Home
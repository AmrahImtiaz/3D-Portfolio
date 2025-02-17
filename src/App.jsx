import React from 'react'

const App = () => {
  return (
    <>
    <div>
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center">
    <div className="icon bg-transparent text-white w-34 h-34 rounded-full grid 
                  text-4xl border border-white 
                  absolute -top-9 -left-8"></div>
     <div className="icon bg-transparent text-white w-34 h-34 rounded-full grid 
                  text-4xl border border-white 
                  absolute -right-12 "></div>
    <div className="icon bg-transparent text-white w-34 h-34 rounded-full grid 
                  text-4xl border border-white 
                  absolute -bottom-20 -left-2 "></div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[400px]
         h-[400px] opacity-10 grid-pattern"></div> 
         <div className="absolute top-1/2 right-0 transform w-[400px]
         h-[400px] opacity-10 grid-pattern -bottom-2 -left-1"></div> 
      </div>

     <p className='text-white text-center mt-8'>3D ARTIST</p>
        <p className='text-white text-center'>2D ANIMATOR</p>
        <p className='text-white text-center'>MOTION DESIGNER</p>
        </div>
    </>
  )
}

export default App


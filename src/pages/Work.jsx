
const Work = () => {
  return (
    <>
    <div className="relative min-h-screen overflow-hidden">
    <div className="absolute top-10 right-20 w-[400px] h-[400px] opacity-10 grid-pattern"></div>
    <div className="icon bg-transparent text-white w-34 h-34 rounded-full grid 
                  border border-white 
                  absolute -bottom-9 left-24 "></div>
      <div className="icon bg-transparent text-white w-34 h-34 rounded-full grid 
                text-4xl border border-white 
                absolute -left-19"></div>
    <div className="icon bg-transparent text-white w-32 h-32 rounded-full grid 
                  text-4xl border border-white 
                  absolute -right-14 top-22 "></div>
            
    <div className="flex flex-col ml-40 justify-start mt-30">
    <p className="text-white text-6xl">3D SETS</p>
    <p className="text-black bg-white w-60 text-4xl text-center mt-7">Designing</p>
    </div>
    <div className="bg-white border-black w-42 h-42  "></div>
    </div>
    </>
  )
}

export default Work
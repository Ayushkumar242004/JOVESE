import React from "react"
import Back from "../common/back/Back"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './team.css' 
const features = [
  { name: '1-Rank', description: 'Designed by Good Goods, Inc.' },
  { name: 'Amazon', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Facebook', description: '6.25" x 3.55" x 1.15"' },
  { name: 'NITK', description: 'Hand sanded and finished with natural oil' },
  { name: '8 Years Experience', description: 'Wood card tray and 3 refill packs' },
  { name: 'Business Consultant', description: 'Made from natural materials. Grain and color vary with each item.' },
]


const Team = () => {
  return (
    <>
      <Back title='Demo Lectures' />
      
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 border mt-5">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                molestiae. Numquam corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <div className="bg-white border ">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Judith Black</h2>
              <p className="mt-4 text-gray-500">
                The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
                steel divider separates active cards from new ones, or can be used to archive important task lists.
              </p>
              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="h-full w-full relative">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100 object-cover h-full w-full"
              />
            </div>



            {/* video */}
            <div className="h-full w-full relative">
            <div
              style={{
                textAlign: "center",
                display:"flex",
                justifyContent:'center',
                fontSize: "40px",
                fontWeight: "bold",
                color: "#333",
                padding: "20px",
                backgroundColor: "#f7f7f7",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                margin: "40px auto",
                position:'relative',
                left:'50%'
              }}
            >
              Demo lecture
            </div>
            <iframe 
                style={{ borderRadius: "30px", position: "relative",margin:'0 auto',height:'500px' , width:'1240px' }}
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
                src={`https://www.youtube.com/embed/jva0G7211l4?autoplay=1&rel=0&showinfo=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border  mt-5 px-6 py-12">
      <h2 className="text-3xl font-bold tracking-tight text-white text-center bg-black rounded-lg py-4 px-6 animate-fade-in mb-6">Pick a Date</h2>
        <div className="mx-auto max-w-7xl h-full relative overflow-hidden rounded-lg shadow-xl">
            <Calendar className="w-full h-full" style={{ borderRadius: 'inherit' }} />
        </div>

      </div>
      <h2 className="text-3xl mt-5 font-bold tracking-tight text-white text-center bg-black rounded-lg py-4 px-6 animate-fade-in mb-6">Pick a Time</h2>
      <div className="flex justify-around mt-2 mb-5">
        
  <span className="inline-flex items-center rounded-md bg-black px-10 py-3 text-s font-medium text-white shadow-md hover:bg-gray-900 transition duration-300">
    20 May
  </span>
  <span className="inline-flex items-center rounded-md bg-black px-10 py-3 text-xs font-medium text-white shadow-md hover:bg-gray-900 transition duration-300">
    21 May
  </span>
  <span className="inline-flex items-center rounded-md bg-black px-10 py-3 text-xs font-medium text-white shadow-md hover:bg-gray-900 transition duration-300">
    22 May
  </span>
  <span className="inline-flex items-center rounded-md bg-black px-10 py-3 text-xs font-medium text-white shadow-md hover:bg-gray-900 transition duration-300">
    23 May
  </span>
  <span className="inline-flex items-center rounded-md bg-black px-10 py-3 text-xs font-medium text-white shadow-md hover:bg-gray-900 transition duration-300">
    24 May
  </span>
  <span className="inline-flex items-center rounded-md bg-black px-10 py-3 text-xs font-medium text-white shadow-md hover:bg-gray-900 transition duration-300">
    25 May
  </span>
  
</div>
    </>
  )
}

export default Team

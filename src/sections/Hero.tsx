import Image from "next/image";
import  memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import  SparkleIcon  from "@/assets/icons/sparkle.svg"
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0  overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div className="absolute inset-0 -z-30 opacity-5 " style={{ backgroundImage: `url(${grainImage.src})` }}></div>
      <div className=" size-[620px] hero-ring"></div>
      <div className=" size-[820px] hero-ring"></div>
      <div className=" size-[1020px] hero-ring"></div>
      <div className=" size-[1220px] hero-ring"></div>

{/* Star code   and their rotation */}
    
     
     
      {/* sparkel icon  */}
      <HeroOrbit size={430} rotation={-15} shouldOrbit={true} orbitDuration="30s" shouldSpin={true} spinDuration="5s">
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79} shouldOrbit={true} orbitDuration="39s" shouldSpin={true} spinDuration="5s">
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={700} rotation={79} shouldOrbit={true} orbitDuration="10s" shouldSpin={true} spinDuration="5s">
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={700} rotation={79} shouldOrbit={true} orbitDuration="10s" shouldSpin={true} spinDuration="5s">
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
       <HeroOrbit size={520} rotation={-41} shouldOrbit={true} orbitDuration="35s" shouldSpin={true} spinDuration="5s">
        <div className="size-2 rounded-full bg-emerald-300/20" ></div>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178} shouldOrbit={true} orbitDuration="40s" shouldSpin={true} spinDuration="5s">
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
       <HeroOrbit size={550} rotation={20} shouldOrbit={true} orbitDuration="45s" shouldSpin={true} spinDuration="8s">
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
       <HeroOrbit size={590} rotation={98}  shouldOrbit={true} orbitDuration="50s" shouldSpin={true} spinDuration="5s">
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit={true} orbitDuration="55s" shouldSpin={true} spinDuration="5s">
        <div className="size-2 rounded-full bg-emerald-300/20" ></div>
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144} shouldOrbit={true} orbitDuration="60s" shouldSpin={true} spinDuration="9s">
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={900} rotation={144} shouldOrbit={true} orbitDuration="40s" shouldSpin={true} spinDuration="5s">
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={900} rotation={144} shouldOrbit={true} orbitDuration="20s" shouldSpin={true} spinDuration="6s">
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      {/* circle icon  */}
        <HeroOrbit size={800} rotation={-72} shouldOrbit={true} orbitDuration="70s" shouldSpin={true} spinDuration="5s">
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={85 } shouldOrbit={true} orbitDuration="65s" shouldSpin={true} spinDuration="4s">
        <div className="size-2 rounded-full bg-emerald-300/20" ></div>
      </HeroOrbit>
       <HeroOrbit size={800} rotation={-72} shouldOrbit={true} orbitDuration="70s" shouldSpin={true} spinDuration="5s">
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
       <HeroOrbit size={900} rotation={-72} shouldOrbit={true} orbitDuration="70s" shouldSpin={true} spinDuration="8s">
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
       <HeroOrbit size={650} rotation={-72} shouldOrbit={true} orbitDuration="100s" shouldSpin={true} spinDuration="5s">
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
    
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop" />

          <div className="bg-gray-950 boder border-gary-800 px-4 py-1.5 inline-flex  items-center gap-4 rounded-lg" >
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium"> Available for new projects</div>
          </div>

        </div>
        <div className="max-w-lg mx-auto">
          <h1 className=" font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide"> Building Exceptional User Experiences</h1>
          <p className="mt-4  md:text-lg text-center text-white/60 "> I specialize in  transforming designs into functional , high-performing web application. Let's discuss your next project.</p>
        </div>
        <div className=" flex flex-col  md:flex-row  justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12  rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="semi-bold">Let's Connect</span>

          </button>
        </div>
      </div>

    </div>
  )
};

// import Image from "next/image";
// import  memojiImage from "@/assets/images/memoji-computer.png";
// import ArrowDown from "@/assets/icons/arrow-down.svg";
// import grainImage from "@/assets/images/grain.jpg";
// import StarIcon from "@/assets/icons/star.svg";
// import  SparkleIcon  from "@/assets/icons/sparkle.svg"
// import { HeroOrbit } from "@/components/HeroOrbit";

// export const HeroSection = () => {
//   return (
//     <div className="py-32 md:py-48 lg:py-60 relative z-0  overflow-x-clip">
//       <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
//       <div className="absolute inset-0 -z-30 opacity-5 " style={{ backgroundImage: `url(${grainImage.src})` }}></div>
//       <div className=" size-[620px] hero-ring"></div>
//       <div className=" size-[820px] hero-ring"></div>
//       <div className=" size-[1020px] hero-ring"></div>
//       <div className=" size-[1220px] hero-ring"></div>

// {/* Star code   and their rotation */}
//       <HeroOrbit size={800} rotation={-72}>
//         <StarIcon className="size-28 text-emerald-300" />
//       </HeroOrbit>
//       <HeroOrbit size={550} rotation={20}>
//         <StarIcon className="size-12 text-emerald-300" />
//       </HeroOrbit>
//       <HeroOrbit size={590} rotation={98}>
//         <StarIcon className="size-8 text-emerald-300" />
//       </HeroOrbit>
//       {/* sparkel icon  */}
//       <HeroOrbit size={430} rotation={-15}>
//         <SparkleIcon className="size-8 text-emerald-300/20" />
//       </HeroOrbit>
//       <HeroOrbit size={440} rotation={79}>
//         <SparkleIcon className="size-5 text-emerald-300/20" />
//       </HeroOrbit>
//       <HeroOrbit size={530} rotation={178}>
//         <SparkleIcon className="size-10 text-emerald-300/20" />
//       </HeroOrbit>
//       <HeroOrbit size={710} rotation={144}>
//         <SparkleIcon className="size-14 text-emerald-300/20" />
//       </HeroOrbit>
//       {/* circle icon  */}
//       <HeroOrbit size={720} rotation={85}>
//         <div className="size-2 rounded-full bg-emerald-300/20" ></div>
//       </HeroOrbit>
//       <HeroOrbit size={520} rotation={-41}>
//         <div className="size-2 rounded-full bg-emerald-300/20" ></div>
//       </HeroOrbit>
//       <HeroOrbit size={650} rotation={-5}>
//         <div className="size-2 rounded-full bg-emerald-300/20" ></div>
//       </HeroOrbit>
//       </div>
//       <div className="container">
//         <div className="flex flex-col items-center">
//           <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop" />

//           <div className="bg-gray-950 boder border-gary-800 px-4 py-1.5 inline-flex  items-center gap-4 rounded-lg" >
//             <div className="bg-green-500 size-2.5 rounded-full"></div>
//             <div className="text-sm font-medium"> Available for new projects</div>
//           </div>

//         </div>
//         <div className="max-w-lg mx-auto">
//           <h1 className=" font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide"> Building Exceptional User Experiences</h1>
//           <p className="mt-4  md:text-lg text-center text-white/60 "> I specialize in  transforming designs into functional , high-performing web application. Let's discuss your next project.</p>
//         </div>
//         <div className=" flex flex-col  md:flex-row  justify-center items-center mt-8 gap-4">
//           <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12  rounded-xl">
//             <span className="font-semibold">Explore My Work</span>
//             <ArrowDown className="size-4" />
//           </button>
//           <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
//             <span>👋</span>
//             <span className="semi-bold">Let's Connect</span>

//           </button>
//         </div>
//       </div>

//     </div>
//   )
// };
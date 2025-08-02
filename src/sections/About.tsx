"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import MapImage from "@/assets/images/map.png";
import smileemoji from "@/assets/images/memoji-smile.png"
import CardHeader from "@/components/CardHeader";
import ToolBoxItem from "@/components/ToolBoxItem";
import {motion } from "framer-motion";
import { useRef } from "react";

const toolboxItem = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS5",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  // {title:"Node",
  //   icon:"",
  // },
  // {title:"Nextjs15",
  //   icon:"",
  // },
  // {title:"MongoDB",
  //   icon:"",
  // },
  // {title:"",
  //   icon:"",
  // },
  // {title:"",
  //   icon:"",
  // },
]
const hobbies=[
  { title: "Traveling",
    iconType: "✈️",
    left:"5%",
    top:"5%"
  },
  { title: "Photography",
    iconType: "📸",left:"50%",
    top:"5%"
  },
  { title: "Cooking",
    iconType: "🍳",left:"35%",
    top:"40%"
  },
  { title: "Gaming",
    iconType: "🎮",left:"10%",
    top:"35%"
  },
  { title: "Music",
    iconType: "🎵",left:"70%",
    top:"45%"
  },
  { title: "Reading",
    iconType: "📚",left:"80%",
    top:"20%"
  },
  { title: "Fitness",
    iconType: "🏋️",left:"20%",
    top:"70%"
  },
  { title: "Coding",
    iconType: "💻",left:"60%",
    top:"80%"
  },
  { title: "Art",
    iconType: "🎨",left:"90%",
    top:"60%"
  },
  { title: "Nature",
    iconType: "🌳",left:"30%",
    top:"10%"
  },

  

]
export const AboutSection = () => {
  const constrainRef=useRef(null)
  return (
  <div className="py-16 lg:py-28">
    <div className="container">
      <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am,What I do, and what inspires me." />
      <div className="mt-20 flex flex-col gap-8">

        <div className="grid  grid-cols-1 gap-8  lg:grid-cols-3 md:grid-cols-5 ">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} />
            </div>
          </Card>



          <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
            <CardHeader title="My Toolbox" description=" Explore the technologies and tools.  I use to craft exceptional digital experiences ."   />
            <ToolBoxItem toolboxItem={toolboxItem} itemsWrapperClassName="animate-move-left [animation-duration:30s]"  />
            <ToolBoxItem toolboxItem={toolboxItem} className="mt-6" itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]" />
          </Card>

        </div>


        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
          <CardHeader className="px-6 py-6" title="Beyond the Code" description="Explore  my interests and hobbies beyond the digital experiences ." />
          <div className="relative flex-1 " ref={constrainRef}>
            {hobbies.map((hobbies, i) => (

              <motion.div className="inline-flex items-center gap-2  rounded-full py-1.5 absolute px-6   bg-gradient-to-r from-emerald-300 to-sky-400" style={{
                left: hobbies.left,
                top: hobbies.top,

              }}
              drag 
              dragConstraints={constrainRef}
              key={i}>
                <span className="font-medium text-gray-950">{hobbies.title}</span>
                <span>{hobbies.iconType}</span>
              </motion.div>
            ))}
          </div>
        </Card>


            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={MapImage} className="h-full w-full object-cover object-left-top" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30" >
                <div className="bg-gradient-to-r from-emerald-300 to bg-sky-400  absolute inset-0 -z-20 rounded-full animate-ping  [animation-duration:2s]"></div>
                <div className="bg-gradient-to-r from-emerald-300 to bg-sky-400  absolute inset-0 -z-10 rounded-full"></div>
                <Image src={smileemoji} className="size-20" />
              </div>
            </Card>

        </div>
      </div>
    </div>
  </div>

  )
};

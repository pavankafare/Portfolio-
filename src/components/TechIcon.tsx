import React from 'react'

const TechIcon = ({component}:{component:React.ElementType}) => {
    const Component=component;
  return (

    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]"/>
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="#00f260" />
          <stop offset="100%" stopColor="#0575e6" />


        </linearGradient>
      </svg>
    </>
  )
}

export default TechIcon

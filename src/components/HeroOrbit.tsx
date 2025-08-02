import React from 'react'
import { PropsWithChildren } from 'react';
import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from 'tailwind-merge';
export const HeroOrbit = ({ children, 
  size,
   rotation,
    orbitDuration,
     shouldOrbit = false ,
     shouldSpin =false,spinDuration }: PropsWithChildren<{ 
      size: number,
       rotation: number,
        shouldSpin?:boolean,
         spinDuration?:string,
         orbitDuration?: string,
          shouldOrbit?: boolean }>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 ">
      <div className={twMerge(shouldOrbit === true && "animate-spin")} style={{
        animationDuration: orbitDuration,
      }}>
        <div className=" flex items-start justify-start  " style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
        }}>
          <div className={twMerge(shouldSpin === true && "animate-spin")} style={{
        animationDuration: spinDuration,
      }}>


            <div className="  inline-flex  " style={{
              transform: `rotate(${rotation * -1}deg)`,
            }}>
              {children}
            </div>
          </div>
        </div></div>
    </div>

  )
}


//  animate-spin [animation-duration:30s]"
//  animate-spin [animation-duration:5s]
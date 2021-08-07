/* eslint-disable react/no-unescaped-entities */
import { Container, CardSkill } from "./styles";
import {FaReact,FaHtml5,FaCss3} from 'react-icons/fa';
import { SiNextDotJs,SiJavascript,SiStyledComponents,SiBootstrap,SiTypescript } from "react-icons/si";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { useState,useRef,useEffect, TimeHTMLAttributes } from "react";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


export default function Skills(){
  const [pause, setPause] = useState(false);
  const timer = useRef<NodeJS.Timer>();
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 4,
    spacing: 15,
    loop: true,
    duration: 2000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
    breakpoints: {
      '(min-width: 320px)': {
        slidesPerView: 1
      },
      '(min-width: 456px)': {
        slidesPerView: 2
      },
      '(min-width: 768px)': {
        slidesPerView: 3
      },
      '(min-width: 1280px)':{
        slidesPerView: 4
      },
    }
    
  })
  
  useEffect(() => {
    sliderRef.current?.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current?.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  useEffect(() => {
    
      timer.current = setInterval(() => {
        if (!pause && slider) {
          slider.next()
        }
      }, 4000)
    
    return () => {
      if(timer.current){
        clearInterval(timer.current)
      }
      
    }
  }, [pause, slider])
  return(
    <Container>
      <h2>Skills</h2>
      <div className="separation"></div>
      <div className="skills">
        <div ref={sliderRef as React.RefObject<HTMLDivElement>} className="keen-slider">
        <CardSkill className="keen-slider__slide number-slide1">
          <FaReact />
          <span>React.js</span>
          <p>About 2 years ago I started studying React.js, where I saw courses at Alura and also at RockeatSeat.
In addition to private projects, I work daily with this stack, in my current service. </p>
        </CardSkill>
        <CardSkill className="keen-slider__slide number-slide2">
          <SiNextDotJs/>
          <span>Next.js</span>
          <p>Even though I'm still new to the stack, I can interact well with it, as I also use it on a daily basis. </p>
        </CardSkill>
        <CardSkill className="keen-slider__slide number-slide3">
          <FaHtml5/>
          <span>Html 5</span>
          <p>I think my HTML level is currently very high, but I still want to improve a lot. </p>
        </CardSkill>
        <CardSkill className="keen-slider__slide number-slide4">
          <FaCss3/>
          <span>CSS 3</span>
          <p>Like HTML, I think my CSS level is good, but I still think I have a lot to improve.</p>
        </CardSkill>
        <CardSkill className="keen-slider__slide number-slide5">
          <SiJavascript/>
          <span>Javascript</span>
          <p>I feel very comfortable using Javascript, as I have 2 years of learning and experience with this language. </p>
        </CardSkill>
        <CardSkill className="keen-slider__slide number-slide6">
          <SiTypescript/>
          <span>Typescript</span>
          <p>I'm still starting to develop better with Typescript, but it's something I'm studying to improve</p>
        </CardSkill>
        <CardSkill className="keen-slider__slide number-slide7">
          <SiStyledComponents/>
          <span>Styled-Components</span>
          <p>It's been about a year since I started studying styled-components, and for me it's something I think is essential in every project because of its ease and practicality.</p>
        </CardSkill>
        <CardSkill className="keen-slider__slide number-slide8">
          <SiBootstrap/>
          <span>Bootstrap</span>
          <p>My experience with bootstrap is not very big, but I've used it in some projects. </p>
        </CardSkill>
        </div>
      </div>
      
    </Container>
  )
}
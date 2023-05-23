import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import { NavHashLink } from "react-router-hash-link"
import { TypeAnimation } from 'react-type-animation';
import WordCloud from './wordcloud'

export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hi 👋, I am</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1>Hager Abd El Galil</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000} className="my-3">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              1000,
              'Software Engineer',
              1000,
              'Open Source Developer',
              1000,
            ]}
            speed={50}
            style={{ fontSize: '2.5rem',color:"var(--green)"}}
            repeat={Infinity}
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Highly Skilled and Motivated Software Engineer with 2 years of <br></br>Experience in Full-Stack web Development.</p>
        </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.8*1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contact" className="button">CONTACT</NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
      </div>
      <div className="tagcloud-wrap">
        <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
          <WordCloud />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  #about{
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    font-size: 3.5rem;

    img{
      width: 3.3rem;
      border-radius: 5px;
      display:flex;
      align-items:center;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }



  .about-image{
    text-align: center;
    margin: 15rem 0rem;
   img{
     margin-top: 2rem;
     width: 100%;
     filter: grayscale(1);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  .stage-cube-cont {
    width: 50%;
    height: 100%;
  }

  .cubespinner {
    animation-name: spincube;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 12s;
    transform-style: preserve-3d;
    transform-origin: 100px 100px 0;
    margin-left: calc(50% - 100px);

    div {
      position: absolute;
      width: 200px;
      height: 200px;
      border: 1px solid #ccc;
      background: rgba(255, 255, 255, 0.4);
      text-align: center;
      font-size: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 20px 0px lightyellow;
    }

    .face1 {
      transform: translateZ(100px);
      color: #dd0031;
    }
    .face2 {
      transform: rotateY(90deg) translateZ(100px);
      color: #f06529;
    }
    .face3 {
      transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
      color: #28a4d9;
    }
    .face4 {
      transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
      color: #5ed4f4;
    }
    .face5 {
      transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
      color: #efd81d;
    }
    .face6 {
      transform: rotateX(-90deg) translateZ(100px);
      color: #ec4d28;
    }
  }

  @keyframes spincube {
    from,
    to {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    16% {
      transform: rotateY(-90deg);
    }
    33% {
      transform: rotateY(-90deg) rotateZ(90deg);
    }
    50% {
      transform: rotateY(-180deg) rotateZ(90deg);
    }
    66% {
      transform: rotateY(-270deg) rotateX(90deg);
    }
    83% {
      transform: rotateX(90deg);
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
    }
    .stage-cube-cont {
      width: 50%;
      height: 100%;
    }

    .cubespinner {
      animation-name: spincube;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 12s;
      transform-style: preserve-3d;
      transform-origin: 100px 100px 0;
      margin-left: calc(50% - 100px);

      div {
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        background: rgba(255, 255, 255, 0.4);
        text-align: center;
        font-size: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px 0px lightyellow;
      }

      .face1 {
        transform: translateZ(100px);
        color: #dd0031;
      }
      .face2 {
        transform: rotateY(90deg) translateZ(100px);
        color: #f06529;
      }
      .face3 {
        transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
        color: #28a4d9;
      }
      .face4 {
        transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
        color: #5ed4f4;
      }
      .face5 {
        transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
        color: #efd81d;
      }
      .face6 {
        transform: rotateX(-90deg) translateZ(100px);
        color: #ec4d28;
      }
    }

    @keyframes spincube {
      from,
      to {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
      }
      16% {
        transform: rotateY(-90deg);
      }
      33% {
        transform: rotateY(-90deg) rotateZ(90deg);
      }
      50% {
        transform: rotateY(-180deg) rotateZ(90deg);
      }
      66% {
        transform: rotateY(-270deg) rotateX(90deg);
      }
      83% {
        transform: rotateX(90deg);
      }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;

    .about-image{
      display: flex;
    }
    .hard-skills{
      justify-content: center;
    }

    .stage-cube-cont {
      width: 50%;
      height: 100%;
    }

    .cubespinner {
      animation-name: spincube;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 12s;
      transform-style: preserve-3d;
      transform-origin: 100px 100px 0;
      margin-left: calc(50% - 100px);

      div {
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        background: rgba(255, 255, 255, 0.4);
        text-align: center;
        font-size: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px 0px lightyellow;
      }

      .face1 {
        transform: translateZ(100px);
        color: #dd0031;
      }
      .face2 {
        transform: rotateY(90deg) translateZ(100px);
        color: #f06529;
      }
      .face3 {
        transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
        color: #28a4d9;
      }
      .face4 {
        transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
        color: #5ed4f4;
      }
      .face5 {
        transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
        color: #efd81d;
      }
      .face6 {
        transform: rotateX(-90deg) translateZ(100px);
        color: #ec4d28;
      }
    }

    @keyframes spincube {
      from,
      to {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
      }
      16% {
        transform: rotateY(-90deg);
      }
      33% {
        transform: rotateY(-90deg) rotateZ(90deg);
      }
      50% {
        transform: rotateY(-180deg) rotateZ(90deg);
      }
      66% {
        transform: rotateY(-270deg) rotateX(90deg);
      }
      83% {
        transform: rotateX(90deg);
      }
    }

  }

`

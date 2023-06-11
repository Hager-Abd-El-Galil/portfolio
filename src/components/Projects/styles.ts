import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;
    display:inline-block;
    padding-bottom: 2rem;
    border-bottom: 0.2rem solid var(--green);
  }

  .projects{
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      background-color: #2a2a2a;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 310px;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        border: solid thin var(--green);
        opacity: 0.9;
        background: transparent;
        cursor: pointer;
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: solid thin var(--green);
        border-radius: 2px;
        padding-bottom:3%;
        color: var(--blue);
        margin-bottom: 3rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 2.6rem;
        }
      }
      .proj-title{
        display: flex;
        gap: 1.5rem;
        align-items: center;
        color: white;
        font-size: 2rem;
      }

      h3{
        margin-bottom: 2rem;
      }

      p{
        font-size: 14px;
        letter-spacing: 0.1rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`

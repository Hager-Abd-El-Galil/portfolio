import styled from "styled-components";



export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
    background-color: transparent;
    border: solid thin var(--green);
    border-radius: 10px;
    color: var(--green);
  }

  .button:hover{
    color:white;
    background-color: var(--green);
  }
  .tagcloud-wrap {
    float: right;
    width: 50%;
    height: 90%;
  
    .tagcloud {
      color: var(--green);
      font-family: 'Red Hat Display', sans-serif;
      font-size: 16px;
      font-weight: 500;
      margin: auto auto;
      background: var(--black);
      border-radius: 50%;
    }
    .tagcloud--item:hover {
      color: #fff;
    }
  }

  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .tagcloud-wrap{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 25%;
  }
  @media(max-width: 480px){
    margin-top: 35%;
  }

  
`
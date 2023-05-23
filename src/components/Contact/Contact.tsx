import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2 className="mb-5">CONTACT ME</h2>
        <p className="my-4">If you have seen my potential or want to talk to me, do not hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:hagerabdelgalilahmed@gmail.com">hagerabdelgalilahmed@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+201201422915">(20) 1201422915</a>
        </div>  
      </div>
    </Container>
  )
}
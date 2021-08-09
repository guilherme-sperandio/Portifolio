/* eslint-disable react/no-unescaped-entities */
import { Container, DownloadButton } from "./styles";
import Image from 'next/image';
import ProfileImg from '../../../public/profile2.jpg'
import {FaGithub,FaLinkedinIn} from 'react-icons/fa';

export default function About (){
  return(
    <Container >
      <div className="profileImg">
        <Image src={ProfileImg} alt="Imagem de perfil do desenvolvedor" quality={100} width={300} height={400} />
      </div>
      <div className="about">
        <h2>About me</h2>
        <div className="division"></div>
        <p>hello, my name is guilherme, I'm 22 years old, I'm a Front-End developer who lives in Piracicaba, São Paulo(BR). I have 1 year of experience with Development, where I use React.js and Next.js frameworks daily, besides that I also use Html 5, CSS 3, Javascript, Typescript and Styled-components.
I really like what I do, and I hope I get better every day.</p>
        <div className="moreInformation">
          <span><strong>Name:</strong> Guilherme Henrique Sperandio</span>
          <span><strong>Age:</strong> 22</span>
          <span><strong>Graduation:</strong> Bachelor's degree in computer engineering</span>
          <span><strong>Institution:</strong> EEP</span>
          <span><strong>Office:</strong> Front-end developer</span>
          <span><strong>Experience:</strong> 1 year</span>
          <span><strong>Stacks:</strong> React.js, Next.js</span> 
        </div>
        <div className="buttons">
          <DownloadButton target='_blank' rel='noreferrer noopener' href="https://github.com/guilherme-sperandio"><FaGithub size={25}/> GitHub</DownloadButton>
          <DownloadButton target='_blank' rel='noreferrer noopener' href="https://www.linkedin.com/in/guilherme-sperandio-0143491a8/"><FaLinkedinIn size={20}/> Linkedin</DownloadButton>
       
        </div>
        
      </div>
    </Container>
  );
}


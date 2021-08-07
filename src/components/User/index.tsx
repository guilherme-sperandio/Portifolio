import { Container } from "./styles";
import Image from 'next/image';
import UserImage from '../../../public/perfil.png'

export default function User(){
  return(
    <Container>
      <div className="userImage">
        <Image src={UserImage} alt="imagem de perfil do desenvolvedor" quality={100} width={200} height={200} objectFit="cover" objectPosition='top' />
      </div>
      <div className="userInfo">
        <h1>Guilherme Sperandio</h1>
        <span>Front-end Developer</span>
      </div>
      
    </Container>
  );
}
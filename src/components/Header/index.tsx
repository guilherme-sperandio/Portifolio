import { Container } from "./styles";
import { animateScroll } from 'react-scroll';



export default function Header(){ 
  function scrollTo(locationToScroll:string){
    if(locationToScroll === 'home'){
      const positionToScroll:HTMLElement | null = document.querySelector('#user')
      if(positionToScroll){
        animateScroll.scrollTo(  positionToScroll.offsetTop);
      }
      
    }
    else if(locationToScroll === 'about'){
      const positionToScroll:HTMLElement | null = document.querySelector('#about');
      if(positionToScroll){
        animateScroll.scrollTo(  positionToScroll.offsetTop);
      }
    }
    else{
      const positionToScroll:HTMLElement | null = document.querySelector('#skills');
      if(positionToScroll){
        animateScroll.scrollTo(  positionToScroll.offsetTop);
      }
    }
    
  }

 

  return(
    <Container>
      <ul>
        <li>
          <button onClick={() => scrollTo('home')}>
            Home
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo('about')} >
            About
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo('skills')} >
            Skills
          </button>
        </li>
       
      </ul>
    </Container>
  );
}
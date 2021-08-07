import { Container } from "./styles";



export default function Header(){ 
 
  return(
    <Container>
      <ul>
        <li>
          <button>
            Home
          </button>
        </li>
        <li>
          <button>
            About
          </button>
        </li>
        <li>
          <button>
            Skills
          </button>
        </li>
       
      </ul>
    </Container>
  );
}
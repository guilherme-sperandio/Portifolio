import styled from 'styled-components';


export const Container = styled.header`
padding-top: 1rem;
  ul{
    display: flex;
    justify-content: center;

    li{
      margin-left: 1.5rem;
      list-style-type: none;

      button{
        border: none;
        background: none;
        width: 50px;
        height: 40px;
        font-weight: 700;
        font-size: 20px;
        color: #fff;
        :hover{
          color: var(--color-title);
        }

      }
    }
  }
  
  @media (min-width:768px){
    ul{
      li{
        margin-left: 4rem;
        button{
          width: 100px;
        }
      }
    }

  }
`;
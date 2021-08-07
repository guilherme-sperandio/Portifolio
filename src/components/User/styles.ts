import styled from "styled-components";

export const Container = styled.div`
 height: 400px;
 display: flex;
 align-items: center;
 justify-content: center;
  .userImage{
    margin-right: 2rem;
    margin-left: 1rem;
    img{
      border-radius: 50%;
    }
  }
  .userInfo{
    h1{
      color: var(--color-title);
      margin-bottom: 1rem;
    }
    span{
      color: #fff;
      width: 1rem;
    }
  }
 

  @media (min-width:768px){
  .userImage{
    margin-right: 4rem;
    margin-left: 0;
   
  }
  }

`;
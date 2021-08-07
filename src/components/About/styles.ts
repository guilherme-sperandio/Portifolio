import styled from "styled-components";

export const Container = styled.section`
  padding-top: 3rem;
  background-color: var(--color-darkblue);
  min-height: 600px;
  display: flex;
  justify-content: center;
  .profileImg{
   display: none;
    
  }
  .about{
    min-width: 300px;
    margin-right: 2rem;
    margin-left: 2rem;
    padding-top: 0;
    h2{
      color: #fff;
    }
    .division{
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
      width: 60px;
      height: 2px;
      background-color: var(--color-title);
    }
    p{
      line-height: 21px;
      color: #fff;
      margin-bottom: 2rem;
    }
    .moreInformation{
      display: grid;
      height: 250px;
      border: 1px solid #fd5d55;
      border-radius:4px;
      padding: 15px;
      span{
        margin-bottom: 0.5rem;
        color: #fff;
      }
    }
    
    .buttons{
      display: flex;
      align-items: center;
    }
   
  }

  @media (min-width:768px){
      padding-top: 6rem;
    
    .profileImg{
      display: unset;
      margin-top: 2rem;
      height: 262px;
      width: 200px;
      border: 6px solid #2a2a2a;
      margin-right: 2rem;
      
    }
    .about{
      width: 450px;
      height: 412px;
      padding-top: 2rem;
      
    
      .moreInformation{
        display: grid;
        height: auto;
        grid-template-columns: 2fr 1fr;
    
      }
    }
  }

  @media (min-width: 1024px){
  .profileImg{
    height: 412px;
    width: auto;   
  }
  .about{
    width: 550px;
  }

  }
`;


export const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-right: 2rem;
  width: 160px;
  height: 40px;
  background-color: var(--color-button);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  text-decoration:none ;

  svg{
    margin-right: 0.5rem;
  }
`;
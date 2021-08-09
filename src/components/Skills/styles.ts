import styled from "styled-components";

export const Container = styled.section`
  min-height: 440px;
  background-color: var(--color-ligthblue);
  padding-top: 4rem;
  
  h2{
    margin-left: 4rem;
    color: #fff;
  }
  .separation{
    margin-top: 0.5rem;
    margin-left: 4rem;
    margin-bottom: 1rem;
    width: 60px;
    height: 2px;
    background-color: #fd5d55;
  }
  .skills{
    margin-left: 4rem;
    margin-right: 0.5rem;
    :last-child{
      margin-left:4.5rem;
    }
  }
  
`;


export const CardSkill = styled.div`

  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  padding-right: 10px;
  height: 235px;
  width: 300px;
  border: 1px solid #fd5d55;
  border-radius: 8px;
  svg{
    width: 60px;
    height: 60px;
    color: #fd5d55;
    display: block;
    margin-bottom: 0.75rem;
  }

  span{
    font-size: 24px;
    font-weight: 700;
    color: #fff;
  }
  p{
    margin-top: 1.5rem;
    font-size: 14px;
    color: #fff;
    line-height: 20px;
  }
`;
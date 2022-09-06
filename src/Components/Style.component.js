import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1Style = styled.h1`
  color: red;
  font-size: 3rem;
  font-style: italic;
`;

export const H2Style = styled.h2`
  color: maroon;
  font-family: "Times New Roman", Times, serif;
  font-size: 2rem;
`;

export const Button = styled.button`
  font-size: 3rem;
  padding: 15px 30px;
  background-color: magenta;
  color: wheat;
  margin: 8rem 0 3rem;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: green;
  }
`;

/* background-VideoColorSpace; ${(props)=>props.backgroundColor} 

in App <Button backgroundColor ="red">-->> 
*/

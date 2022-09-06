import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1Style = styled.h1`
  color: yellowgreen;
  font-size: 4rem;
  font-style: italic;
`;

export const H2Style = styled.h2`
  color: limegreen;
  font-family: "Times New Roman", Times, serif;
  font-size: 2.5rem;
`;

export const Button = styled.button`
  opacity: 0.4;
  font-size: 3rem;
  font-weight: bold;
  padding: 15px 30px;
  background-color: pink;
  color: black;
  margin: 10rem 0 3rem;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: green;
    color: white;
  }
`;

/* background-VideoColorSpace; ${(props)=>props.backgroundColor} 

in App <Button backgroundColor ="red">-->> 
*/

import styled from "styled-components";

export const Title = styled.h3`
  font-size: 44px;
  color: white;
  font-weight: bold;
  text-align: center;
`

export const ContentWrapper = styled.section`
  width: 330px;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-left: 16px solid #282828;
  padding: 50px 35px;
`

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const SusTitle = styled.h4`
  color: white;
  font-weight: 200;
  font-size: 24px;
  text-align: center;
`

export const RadioInput = styled.input`
  margin-right: 5px;

  /* Estilos personalizados do input radio */
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  outline: none;

  box-shadow:0px 0px 0px 3px black inset;


  &:checked {
    background-color: #ccc;
  }
`;

export const PriceRange = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
   & div{
    display: flex;
    justify-content: space-between;
   }
`

export const RangeBar = styled.input`
  margin: 0 5px;

  -webkit-appearance: none;
  appearance: none;
  height: 3px;
  border-radius: 5px;
  background-color: black;

  display: flex;
  align-items: center;

  margin: 20px 20px 10px;

  &::-webkit-slider-thumb{
    -webkit-appearance: none;
    appearance: none;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: #D9D9D9;
    cursor: pointer;
  }


  &::after{
    content: '';
    display: block;
    width:3px;
    height:10px;
    border-radius: 50%;
    background: inherit;
  }
  &::before{
    content: '';
    position: relative;
    display: block;
    width:3px;
    height:10px;
    background: inherit;
  }
`

export const SendButton = styled.button`
  background-color: #D9D9D9;
  font-size: 24px;
  color: black;
  padding: 2px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  margin-top: 100%;
`
export const Element = styled.div`
  margin: 50px 0;
`

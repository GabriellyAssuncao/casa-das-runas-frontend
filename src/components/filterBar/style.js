import styled from "styled-components";

export const Description = styled.h3`
  font-size: 24px;
  color: white;
  font-weight: 100;
`

export const FilterWrapper = styled.div`
  width: 100%;
  padding: 15px 40px;
  border-radius: 20px;
  background-color: #282828;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 20px 0;
`

export const SelectionField = styled.select`
  background-color: #d9d9d9;
  width: 233px;
  font-size: 24px;
  padding-left: 15px;
  margin-left: 15px;

  &:focus{
    outline: none;
  }
`

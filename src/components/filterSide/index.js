import React, { useState } from 'react';
import * as C from './style'

const FilterSide = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [rangeValue, setRangeValue] = useState(10);
  const handeRangeValue = (event) => {
    setRangeValue(event.target.value)
  }
  return (
    <C.ContentWrapper>
      <C.Title>Filtrar por:</C.Title>
      <C.Element>
        <C.SusTitle>Tipo de Poção: </C.SusTitle>
        <C.RadioContainer>
        <C.RadioLabel><C.RadioInput type="radio" value="option1" name='selectFilter' checked={selectedOption === 'option1'} onChange={handleOptionChange}/>Option 1</C.RadioLabel>
        <C.RadioLabel><C.RadioInput type="radio" value="option2" name='selectFilter' checked={selectedOption === 'option2'} onChange={handleOptionChange}/> Option 2</C.RadioLabel>
        <C.RadioLabel><C.RadioInput type="radio" value="option3" name='selectFilter' checked={selectedOption === 'option3'} onChange={handleOptionChange}/> Option 3</C.RadioLabel>
        </C.RadioContainer>
      </C.Element>
      <C.Element>
        <C.SusTitle>Faixa de preço:</C.SusTitle>
        <C.PriceRange>
          <C.RangeBar type="range" min={10} max={10000} value={rangeValue} onChange={handeRangeValue}/>
          <div>
            <span>{new Intl.NumberFormat({ style: 'currency', currency: 'BRL' }).format(rangeValue)} ptc</span>
            <span>10.000 ptc</span>
          </div>
        </C.PriceRange>
      </C.Element>
      <C.SendButton>Filtrar</C.SendButton>
    </C.ContentWrapper>
  )
}

export default FilterSide

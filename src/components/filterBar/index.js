import React, { useState } from 'react';
import * as C from './style'

const FilterBar = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <C.FilterWrapper>
      <C.Description>Ordernar:</C.Description>
      <C.SelectionField value={selectedOption} onChange={handleChange}>
        <option value="Crescente">Crescente</option>
        <option value="Decrescente">Decrescente</option>
      </C.SelectionField>
    </C.FilterWrapper>
  )
}

export default FilterBar

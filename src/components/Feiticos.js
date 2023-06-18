import React, {useState} from 'react'
import Header from './header/Header'
import Sidebar from './Sidebar'

function Feiticos() {

    const [datevalue, setDateValue] = useState("")
    const [finalPrice, setFinalPride] = useState("10")

    const handleChangeDate = (event) => {
        setDateValue(event.target.value)
    }

    const handleSubmit = (e) =>{

        e.preventDefault()
    }

  return (
    <div>
        <Header/>
        <Sidebar/>
        <div className='feiticos'>
            <div className='feiticos-content'>
            <h1>Na compra de um feitiço, você receberá um pergaminho mágico para recitar seu feitiço
                e tornar seus desejos realidade!
            </h1>
              <form onSubmit={handleSubmit}>
              <label>Tipo de Feitiço</label>
                <select>
                 <option value="option1">Option 1</option>
                 <option value="option2">Option 2</option>
                 <option value="option3">Option 3</option>
                </select>
                <label>Alvo Do Feitiço</label>
                <input
                    type='checkbox'
                    id='firstCheckBox'
                    name='firstCheckBox'
                    value={""}
                />
                <label for="firstCheckBox">Eu</label>
                <input
                    type='checkbox'
                    id='secondCheckBox'
                    name='secondCheckBox'
                    value={""}
                />
                <label for="secondCheckBox">Outra Pessoa</label>
                <select>
                 <option value="option1">Option 1</option>
                 <option value="option2">Option 2</option>
                 <option value="option3">Option 3</option>
                </select>
                <label>Mago</label>
                <select>
                 <option value="option1">Option 1</option>
                 <option value="option2">Option 2</option>
                 <option value="option3">Option 3</option>
                </select>
                <label>Date</label>
                    <input
                        type='date'
                        value={datevalue}
                       onChange={handleChangeDate}
                    />
                    <p>Valor Final: {finalPrice} </p>
                    <button type='submit'>Solicitar</button>
             </form>
            </div>
        </div>
    </div>
  )
}

export default Feiticos
import React from 'react'


const BUTTON_STYLE = {
  backgroundColor: '#b79e80',
  position: 'relative',
  position: 'relative',
  top: '60px',  
}



export default function F_password({isOpen, setModalOpen, children }) {
  if (isOpen){
    return (
    
    <div className='Background_style'>
      <div className='Modal_style'>
        <div> 
          {children}
        </div>
         <button style={BUTTON_STYLE} onClick={setModalOpen}>
          <spam className= 'Font_style'>Fechar</spam></button>
        
        </div>
    </div>
    )
  }
  return null
}

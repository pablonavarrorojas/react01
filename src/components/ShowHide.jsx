import React, { useState } from 'react'

function ShowHide() {

    //useState devuelve un array con 2 elementos, uno la variable donde se guarda el estado
    //y el otro la función que cambia el valor de esa variable
    const [show, setShow] = useState(true);

    const handleClick = (event) => { 
        setShow(!show); //cambia al contrario del valor que trae show
    }

  return (
      <div>
          {/* otra forma es { show ? <h2>HIDE ME</h2> : '' } */}
        <button onClick={ handleClick }>{ show ? 'Hide' : 'Show'} Text</button>
          {show && <h2>HIDE ME</h2>}
          
    </div>
  )
}

export default ShowHide
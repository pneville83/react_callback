import { useState } from "react";



function Box (props) {

  const [count, updateCount] = useState (0);

  function click () {
    props.clickCall(props.id);
    updateCount (count +1);
  }



  return (
    <div className="container">
      <div className="box">Caja {props.id}
        <button className="btn" onClick={() => click ()} >+1</button>
        <p>Contador Caja {props.id} = {count}</p>
        <p>Diferencia entre Cajas = {count - props.boxDifference}</p>
      </div>
    </div>
  );



}

export default Box;
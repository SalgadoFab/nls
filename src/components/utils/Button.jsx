

//Boton que recibe texto y accion de click como props, debe ser una funcion.
//Si no se pasa accion, el boton no hace nada.
export const Button = ({text, action = null}) => {

  const onHandleClick = () => {
    if (action !== null) {
      action();
    }
  }

  return (
    <div className="btn-wrapper">
      <button 
        className="btn-hover" 
        onClick={onHandleClick}
      >{text}</button>
    </div>
  )
}

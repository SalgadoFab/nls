

//Boton que recibe texto y accion de click como props, debe ser una funcion.
//Si no se pasa accion, el boton no hace nada.
export const Button = ({text, type=null, action = null}) => {

  const onHandleClick = () => {
    if (action !== null) {
      action();
    }
  }

  return (
    <div className="btn-wrapper">
      <button 
        type={type}
        className="btn-hover" 
        onClick={onHandleClick}
      >{text}</button>
    </div>
  )
}

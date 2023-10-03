import {TextField} from "@mui/material";
import {Button} from "@/components";
import {setScrollTo} from "@/helpers/scrollTo";


export const Contacto = () => {
  return <>
    <section id="contacto">
      <div className={"main-container"} >

        <div className={"title-container"}>
          <h2 className={"title"}>Contactanos</h2>
        </div>

        <div className={"container"}>
          <div className={"content-container"}>
            <div className={"first-row"}>
              <TextField className={"first-row-txt"}
                         required
                         id="standard-required"
                         label="Nombre"
                         variant="standard"
                         placeholder="e.g.Jhon"
              />

              <TextField className={"first-row-txt"}
                         required
                         id="standard-required"
                         label="Apellido"
                         variant="standard"
                         placeholder="e.g.Smith"
              />
            </div>

            <div className={"second-row"}>
              <TextField className={"second-row-txt"}
                         required
                         id="standard-required"
                         label="Correo electrónico"
                         variant="standard"
                         placeholder="e.g.example@gmail.com"
              />
            </div>

            <div className={"third-row"}>
              <TextField className={"third-row-txt"}
                         required
                         id="standard-multiline-static"
                         label="Mensaje"
                         multiline
                         rows={4}
                         variant="standard"
                         placeholder="Escribe tu mensaje"/>
            </div>

            <div className={"actions-row"}>
              <Button text='Enviar' action={() => {} } />
              <h3 className={"final-txt"}>Estaremos encantados de hablar contigo</h3>
            </div>


          </div>

        </div>
        </div>

    </section>
  </>


}

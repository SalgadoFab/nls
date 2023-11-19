import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { useForm } from "@/hooks/useForm"
import { TextField } from "@mui/material";
import { Button } from "@/components";

export const Contacto = () => {

  const form = useRef();

  const [isPending, setIsPending] = useState('')

  const { username, lastname, email, message, onInputChange, onResetForm } = useForm({
    username: '',
    lastname: '',
    email: '',
    message: ''
  });

  const success = () => toast.success('Mensaje enviado', {
    style: {
      borderRadius: '0.5rem',
      background: '#a476f1',
      color: '#fff',
      border: 'solid 1px #a476f1'
    },
  })

  const onFormSubmit = (e) => {
    e.preventDefault();

    const loadingToast = toast('Enviando...', {
      style: {
        borderRadius: '0.5rem',
        background: '#a476f1',
        color: '#fff',
        border: 'solid 1px #a476f1'
      },
    });

    setIsPending('pending')

    emailjs.sendForm('nls_landingpage', 'template_default', form.current, 'wL7gYc43X6S1sePvp')
      .then((result) => {
        toast.dismiss(loadingToast);
        success();
        onResetForm();
      }, (error) => {
        toast.dismiss(loadingToast);
        error(error);
      });

    setIsPending('');
  }


  return <>
    <section id="contacto">
      <div className={"main-container"} >
        <div className={"title-container"}>
          <h2 className={"title"}>Contactanos</h2>
        </div>
        <div className={"container"}>
          <form ref={form} onSubmit={onFormSubmit}>
            <div className={"content-container"}>
              <div className={"first-row"}>
                <TextField className={"first-row-txt"}
                  required
                  label="Nombre"
                  variant="standard"
                  placeholder="e.g.Jhon"
                  name='username'
                />

                <TextField className={"first-row-txt"}
                  required
                  label="Apellido"
                  variant="standard"
                  placeholder="e.g.Smith"
                  name='lastname'
                  onChange={onInputChange}
                />
              </div>
              <div className={"second-row"}>
                <TextField className={"second-row-txt"}
                  required
                  label="Correo electrónico"
                  variant="standard"
                  placeholder="e.g.example@gmail.com"
                  name='email'
                  onChange={onInputChange}
                />
              </div>
              <div className={"third-row"}>
                <TextField className={"third-row-txt"}
                  required
                  label="Mensaje"
                  multiline
                  rows={4}
                  variant="standard"
                  name='message'
                  onChange={onInputChange}
                  placeholder="Escribe tu mensaje" />
              </div>
              <div className={"actions-row"}>
                <Button text='Enviar' type="submit" />
                <h3 className={"final-txt"}>Estaremos encantados de hablar contigo</h3>
              </div>
            </div>
            <Toaster />
          </form>
        </div>
      </div>
    </section>
  </>


}

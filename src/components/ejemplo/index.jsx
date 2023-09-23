import React from 'react'
import { Content } from '../utils'

export const Ejemplo = () => {
  return (
    <section id='ejemplo'>
      <div className='name-container'>
        <Content title='Titulo de la seccion'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et mauris malesuada,
            convallis velit eu, condimentum nunc. Mauris nulla metus, placerat non lacus lacinia,
            congue mattis tortor. Nunc nisl sem, dapibus in risus sit amet, fermentum pretium tortor.
          </p>
        </Content>
      </div>
    </section>
  )
}

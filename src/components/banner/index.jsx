import { Gradient } from './gradient/Gradient'
import { Button } from '../utils'
import { setScrollTo } from '@/helpers/scrollTo'


export const Banner = () => {
  return (
    <section id='banner' >
      <div className="container">
        <div className='background-container'>
          <div className="wrapper">
            <Gradient />
          </div>
        </div>
        <div className="content">
          <h1>
            No Limits Solutions
          </h1>
          <p>
            Innovación impulsada por el compromiso.
          </p>
          <Button text='Conocenos' action={() => setScrollTo('ejemplo')} />
        </div>
      </div>
    </section>
  )
}

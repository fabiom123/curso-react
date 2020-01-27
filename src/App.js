import React,{Fragment} from 'react';
import Curso from './Curso';
import './styles/styles.scss';

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="banner"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="#" className="button">Botón del banner</a>
          </div>
        </div>
        </div>
    </div>
    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
  </>
)

export default App;

//reglas jsx
//1: toda etiqueta debe cerrarse
//2: los componentes solo deben devolver UN solo elemento padre
//3: apoyarse de los fragment cuando necesito envolver dos elementos
//<Fragment></Fragment> o <> </>
//5: img siemrpe se cierra
//6: class sera className
//7: for sera htmlFor
//8: no podemos usar if else o while
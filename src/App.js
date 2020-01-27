import React,{Fragment} from 'react';
import Curso from './Curso';
import './styles/styles.scss';

const cursos = [
  {
    "title": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "price":40,
    "profesor": "Beto Quiroga",
    "img_prof": "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
  },
  {
    "title": "Diseño UI",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-01/ui_design.png",
    "price":30,
    "profesor": "Alvaro Felipe",
    "img_prof": "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
  },
  {
    "title": "Programación orientada a objetos con JavaScript",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-11/js-poo.png",
    "price":50,
    "profesor": "Beto Quiroga",
    "img_prof": "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
  },
  {
    "title": "Node.js desde cero",
    "image": "https://res.cloudinary.com/edteam/image/upload/w_400/v1573257385/courses/nodejs.png",
    "price":60,
    "profesor": "Camilo Montoya",
    "img_prof": "https://api.ed.team/files/avatars/ed17fe0c-1dc1-4bf6-b823-7594cc2d465d.jpeg"
  }
]

const App = () => (
  <Fragment>
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
      {
        // uso map para que devuleva un array  
        cursos.map( c => 
          <Curso  
            title={c.title} 
            image={c.image}  
            price={c.price} 
            img_prof = {c.img_prof} 
            nom_prof = {c.profesor} 
          />
        )
      }  
    </div>
  </Fragment>
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
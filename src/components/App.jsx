import React,{Fragment} from 'react';
import '../styles/styles.scss';
import Form from './pages/Form';
import Course from './pages/Course';
import MainMenu from './organisms/MainMenu';
import Historial from './pages/Historial';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Users from './pages/Users';
import Courses from './pages/Courses';

const App = () => (
  <Router> 
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/cursos/:id" component={ Course } />
      <Route path="/cursos" component={ Courses } />
      <Route path="/historial/:valor" component={ Historial } />
      <Route path="/usuarios" component={ Users } />
      <Route path="/Formulario" component={ () => <Form name="Contact-page" /> } />
      <Route component={ () => (
        <div className="ed-grid">
          <h1>Error 404</h1>
        </div>
      )} />
    </Switch>
  </Router>
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
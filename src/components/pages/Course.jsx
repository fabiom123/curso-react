import React, { useState, useEffect } from 'react';
import axios from "axios"
import useCourse from "../custonHooks/useCourse"
import useFetch from "../custonHooks/useFetch"
const Course = ({ match }) => {
    //hook useState: state guarda el estado actual, setState se usa para ctulizar el estado
    /*const [state, setState] = useState({
        id: 1,
        title: "React desde cero",
        image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
        price: 40,
        profesor: "Beto Quiroga",
        img_prof: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    })*/

    
    /*const changeTitle = (text) =>{
        setState({
            ...state,
            title:text
        })
    }
    <button onClick={changeTitle.bind(this,"go desde cero")}>Cambiar titulo</button>
    */

    //const cursoActual = cursos.filter( c => c.id === parseInt(match.params.id))[0];

    //const [course, setCourse] = useState({})
    const [comment, setComment] = useState("Sin comentarios")
    const course = useCourse(match.params.id);
    //este hook permite emular el ciclo de vida del componente
    //useEffect resive dos parametros un callback y una regla
    // el array vascio "regla" nos dice que el actulise cuando el compenete se renderiza una vez ``
    /*useEffect(()=>{
            axios.get(`http://my-json-server.typicode.com/fabiom123/api-cursos/cursos/${match.params.id}`)
            .then(resp => setCourse(resp.data))
    },[])*/

    const changeCommend = e =>{
        setComment(e.target.value)
    }

    return(
        <div className="ed-grid m-grid-3">
        { 
            course ? (
            <>
               <div className="l-block">
                    <h1 className="m-cols-3">{course.title}</h1>
                    <img className="m-cols-1" src={course.image} />
                    <p className="m-cols-2">Profesor: {course.profesor}</p>
               </div>
               <div>
                   <h2>Escribe tu comentario</h2>
                   <input type="text" name="name" onChange={changeCommend.bind(this)}/>
                   <p>{comment}</p>
               </div>     
            </>
            ) : (
                <h1>El curso no existe</h1>
            )
        }   
        </div>
    )
}

export default Course;
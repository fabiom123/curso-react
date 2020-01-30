import React, {Component} from 'react'
import { element } from 'prop-types'

class Form extends Component{
    constructor(props){
        super(props)
        this.state ={
            nombre: "",
            correo: "",
            fecha: new Date()
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarCorreo(e){
        this.setState({
            correo: e.target.value
        })
    }

    cambiarFecha(){
        this.setState({
            fecha: new Date()
        })
    }

    //this.setState
    render(){
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <h4>{ Math.ceil(this.state.fecha/1000) }</h4>
                <form action="" id="elemento">
                    <div className="m-grid-2">
                        <div className="form__item">
                        <label htmlFor="">Nombre Completo</label>
                            <input type="text" 
                            onChange={this.cambiarNombre} 
                            name="" 
                            id=""/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="">Correo Electronico</label>
                            <input type="text" 
                            onChange={ this.cambiarCorreo } 
                            name="" 
                            id=""/>
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )

    }

    componentDidMount(){;
        this.intervaloFecha = setInterval(() => {
            this.cambiarFecha()
            console.log(new Date())
        },1000);
    }
    componentDidUpdate(prevProps, prevState){
        //console.log(prevProps);
        //console.log(prevState);
    }
    componentWillUnmount(){
        clearInterval(this.intervaloFecha)
    }
}
export default Form
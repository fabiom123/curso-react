import React,{Fragment} from 'react';
import PropTypes from 'prop-types';

const Curso = props => (
    <Fragment>
        <article className="card" id="props.title">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={ props.image } alt={ props.title }/>
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="center">
                    { props.title }
                </h3>
                <div className="s-mb-2 s-main-center">
                    <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                        <img src={ props.img_prof } alt= { props.nom_prof }/>
                        </div>
                    </div>
                        <span className="small">{ props.nom_prof }</span>
                    </div>
                </div>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny" href="#">
                        { `$ ${props.price} USD`}
                    </a>
                </div>
            </div>
        </article>
    </Fragment>
  )

  Curso.propTypes = {
    title:PropTypes.string,
    image:PropTypes.string,
    price:PropTypes.number,
    profesor:PropTypes.string
  }

  Curso.defaultProps = {
      title:"No se encontró titulo",
      image:"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png",
      price:0,
      nom_prof:"No seasigno profesor",
      img_prof:"https://www.avatarproject.it/sites/default/files/project/Marotta-Russo-Not-Found.jpg"
  }
  
  export default Curso;
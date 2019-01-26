import React, { Component } from 'react';
import Parts from './Parts'
import FEATURES from '../index'


function Specs (props) {
       
            return (
                <section className="main__form">
                    <div className="feature__name">{props.title}</div>
<<<<<<< HEAD
                <ul className="feature__list">
                {props.options && props.options.map((key, index, options,) =>
                        <Parts
                            // key={key}
                            title={props.title}
                            parts={options[index]}
                            name={key.name}
                            cost={key.cost}
                            onClick={props.onClick}                   
=======
                <ul className="feature__list" key={props.index}>
                {props.options && props.options.map((option, stuff, index) =>
                        <Parts
                            name={option.name}
                            cost={option.cost}
                            onClick={props.onClick}  
                            index={index}                   
>>>>>>> parent of a0fface... added price functionality and value keys
                        />
                    )}
                </ul>
                </section>
            );
        
      
}

export default Specs;
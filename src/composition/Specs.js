import React, { Component } from 'react';
import Parts from './Parts'
import FEATURES from '../index'


function Specs (props) {
       
            return (
                <section className="main__form">
                    <div className="feature__name">{props.title}</div>
                <ul className="feature__list" key={props.index}>
                {props.options && props.options.map((option, stuff, index) =>
                        <Parts
                            name={option.name}
                            cost={option.cost}
                            onClick={props.onClick}  
                            index={index}                   
                        />
                    )}
                </ul>
                </section>
            );
        
      
}

export default Specs;
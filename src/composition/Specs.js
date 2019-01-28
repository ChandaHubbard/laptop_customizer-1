import React from 'react';
import Parts from './Parts'
import './Specs.css'


function Specs (props) {
            return (
                <section className="main__form">
                    <div className="feature__name">{props.title}</div>
                <ul className="feature__list">
                {props.options && props.options.map((key, index, options,) =>
                        <Parts
                            key={index}
                            title={props.title}
                            parts={options[index]}
                            name={key.name}
                            cost={key.cost}
                            onClick={props.onClick}                   
                        />
                    )}
                </ul>
                </section>
            );
        
      
}

export default Specs;
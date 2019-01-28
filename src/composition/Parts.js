import React from 'react';
import './Parts.css'




function Parts(props) {
        // console.log(props.title, props.name, props.cost)
        return (
                <div className="feature" >
                                <li key={props.index} className="feature__option"
                                onClick={() =>props.onClick && props.onClick(props.name, props.cost, props.title) }
                                style={{backgroundColor:props.bgColor}}
                                
                                >
                                {props.name} (${props.cost})
                        </li>
                </div>
        )
       
}

export default Parts;
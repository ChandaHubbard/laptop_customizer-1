import React, { Component } from 'react';




function Parts(props) {
        return (
                <li 
                onClick={() =>props.onClick && props.onClick(props.name, props.cost)}
                key={props.index}
                >
                  {props.name} (${props.cost})
                </li>
        )
       
}

export default Parts;
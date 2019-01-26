import React, { Component } from 'react';




function Parts(props) {
<<<<<<< HEAD
        // console.log(props.title, props.name, props.cost)
        return (
                <div className="feature" >
                        <div className="feature__name">{props.title}
                                <li key={props.index}
                                onClick={() =>props.onClick && props.onClick(props.name, props.cost, props.title)}
                                >
                                {props.name} (${props.cost})
                        </li>
                        </div>
                </div>
=======
        return (
                <li 
                onClick={() =>props.onClick && props.onClick(props.name, props.cost)}
                key={props.index}
                >
                  {props.name} (${props.cost})
                </li>
>>>>>>> parent of a0fface... added price functionality and value keys
        )
       
}

export default Parts;
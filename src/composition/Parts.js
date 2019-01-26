import React from 'react';




function Parts(props) {
        console.log(props.title, props.parts)
        return (
                <li key={props.index}
                onClick={() =>props.onClick && props.onClick(props.name, props.cost, props.title)}
                >
                  {props.name} (${props.cost})
                </li>
        )
       
}

export default Parts;
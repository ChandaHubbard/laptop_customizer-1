import React from 'react';




function Parts(props) {
        // console.log(props.title, props.name, props.cost)
        return (
                <div className="feature" >
                                <li key={props.index}
                                onClick={() =>props.onClick && props.onClick(props.name, props.cost, props.title)}
                                >
                                {props.name} (${props.cost})
                        </li>
                </div>
        )
       
}

export default Parts;
import React from 'react';
import './summary.css'





function Summary(props) {
  console.log(`props.title is ${props.title}`)
  console.log(`props.name is ${props.name}`)

  return (
      <div className="summary__option" key={props.index}>
          <div className="summary__option__label">{props.title} </div>
          <div className="summary__option__value">{props.name} </div>
          <div className="summary__option__cost">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(props.cost) }
          </div>
      </div>
  )
}

export default Summary;
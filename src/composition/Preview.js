import React from 'react'
import './Preview.css'

function Preview(props) {
    console.log(props.title)
    return (
        <div className="summary__option" key={props.key}>
            <div className="summary__option__label">{props.title} <br /><br /> <br /></div>
            <div className="summary__option__value">{props.name}<br /><br /> <br /> </div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(props.costs) }
            </div>
        </div>
    )
    
}

export default Preview
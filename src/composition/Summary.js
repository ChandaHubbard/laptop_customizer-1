import React, { component } from 'react';




function Summary(props) {
  const { summary } = Object.keys(props.selectedParts)
    .map(key => 
      <div className="summary__option" key={key}>
        <div className="summary__option__label">{key}  </div>
        <div className="summary__option__value">{props.selectedParts.name}</div>
        <div className="summary__option__cost">
          {/* { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(props.selectedParts[key].cost) } */}
        </div>
      </div>)
          return (
              <section className="main__summary">
              <h3>NEW GREENLEAF 2018</h3>
              {summary}
              <div className="summary__total">
                <div className="summary__total__label">Your Price:  </div>
                <div className="summary__total__value">
                {/* { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(props.setTotal) } */}
                </div>
              </div>
            </section>
          )
}

export default Summary;
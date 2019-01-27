import React, { component } from 'react';
import './summary.css'
import Preview from './Preview'




function Summary(props) {
 console.log(props.selectedParts)
          return (
              <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                
                  <Preview
                    key={props.selectedParts}
                    keys={Object.keys(props.selectedParts)}
                    name={props.selectedParts.name}
                    title={props.selectedParts.title}
                    costs={props.selectedParts['cost']}
                  />
                
                
                   
                 
                
                <div className="summary__total">
                  <div className="summary__total__label">Your Price:  </div>
                  <div className="summary__total__value">
                  { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(props.setTotal) }
                  </div>
                </div>
            </section>
          )
}

export default Summary;
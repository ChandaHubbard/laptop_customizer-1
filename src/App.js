import React, { Component } from 'react';
import './App.css';
import FEATURES from './index';
import Specs from './composition/Specs'
import Summary from './composition/Summary'
import Total from './composition/Total'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            features: FEATURES,
            selected: { },
            bgColor: 'white'
        };
        this.handleClick = this.handleClick.bind(this)
        this.total = this.total.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }

    handleClick( name, cost, title) {
        const selected = Object.assign({}, this.state.selected);
        selected[title] = [name, cost]
  
        this.setState({
            selected
        });


        this.changeColor(name)

        this.total()
        console.log(this.state.selected)
    }

    changeColor() {
        // this.setState({bgColor: 'gainsboro'})
        Object.keys(this.state.selected).forEach(key => {
      
            this.setState({bgColor: 'gainsboro'})
        })
        return this.setState({bgColor: 'gainsboro'})
    }

    total = () => {
        let sum = 0
        Object.keys(this.state.selected).forEach(key => {
            sum += this.state.selected[key][1]
        })
        return sum;
    }
    

    render (key) {
        return (
            <div className="App">
                <header>
                    <h1>ELF Computing</h1>
                    <h3>Laptops</h3>
                    <h5>Customize your laptop</h5>  
                </header>      
                <main>
                <section className="main__form">
                    <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                    {Object.keys(this.state.features)
                        .map((key, index, title) => 
                        <Specs
                            key={index}
                            index={index}
                            title={title[index]}
                            options={this.state.features[key]}
                            selected={this.state.selected}
                            onClick={this.handleClick} 
                            bgColor={this.state.bgColor}
                            change={this.changeColor}
                        />
                    )}
                </section>
                <section className="main__summary">
                    <h3>NEW GREENLEAF 2018</h3>

                    {Object.keys(this.state.selected)
                        .map((key, index, title) =>
                    <Summary 
                        key={key}
                        index={index}
                        name={this.state.selected[key][0]}
                        title={Object.keys(this.state.selected)[index]}
                        cost={this.state.selected[key][1]}
                        selectedParts={this.state.selected}
                        setTotal={this.total()}
                    />
                    )}
                    <Total 
                        total={this.total()}
                    />
                </section>
                </main>
            </div>
        );
    }

}

export default App;
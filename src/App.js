import React, { Component } from 'react';
import './App.css';
import FEATURES from './index';
import Specs from './composition/Specs'
import Summary from './composition/Summary'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            features: FEATURES,
            selected: {
                Processor: {
                    name: '17th Generation Intel Core HB (7 Core with donut spare)',
                    cost: 700
                  },
                "Operating System": {
                    name: 'Ubuntu Linux 16.04',
                    cost: 200
                  },
                "Video Card":{
                    name: 'Toyota Corolla 1.5v',
                    cost: 1150.98
                  },
                Display: {
                    name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
                    cost: 1500
                  }
            }
        };
        this.handleClick = this.handleClick.bind(this)
        // this.total = this.total.bind(this)
    }

<<<<<<< HEAD
    handleClick( feature, newValue) {
        const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });

=======
    handleClick( name, cost) {
        const selected = {
            name:name,
            cost:cost
        }
>>>>>>> parent of a0fface... added price functionality and value keys
       // Conditional logic for element that is selected to apply style
        console.log(newValue);

<<<<<<< HEAD
        // {this.total(cost)}
    }
=======
    // total = () => {
    //    let totalPrice = Object.keys(this.state.selected[key])
    //       .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0); 
    // }
>>>>>>> parent of a0fface... added price functionality and value keys

 
    // total = () => {
    //    const totalPrice = Object.keys(this.state.selected).reduce((acc, curr) => acc + this.state.selected[curr].cost, 0); 
    //       return totalPrice;
    // }

    

    render (key) {
        console.log(this.state.selected)
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
                            key={key}
                            index={index}
                            title={title[index]}
                            options={this.state.features[key]}
                            onClick={this.handleClick} 
                        />
                    )}
                </section>
                <Summary 
<<<<<<< HEAD
                    // setTotal={this.total}
                    selectedName={Object.keys(this.state.selected).map((key, index, name) => this.state.selected[key][name])}
                    selectedParts={Object.keys(this.state.selected).map((key, index) => this.state.selected[key])}
                    // setTotal={this.total()}
=======
                    setTotal={this.total}
>>>>>>> parent of a0fface... added price functionality and value keys
                />
                </main>
            </div>
        );
    }

}

export default App;
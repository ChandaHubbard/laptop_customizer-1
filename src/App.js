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
            selected: { },
            costs: [0 ],
        };
        this.handleClick = this.handleClick.bind(this)
        this.total = this.total.bind(this)
    }

    handleClick( title, cost, name) {
        // const obj = {
        //     title: name,
        //     name: title,
        //     cost: cost
        // }
        const selected = Object.assign({}, this.state.selected, );
        selected.title = name
        selected.name = title;
        selected['cost'] = cost
        this.state.costs.push(cost) 

        this.setState({
            selected
        });

   
        console.log(selected);
        console.log(this.state.costs);

        {this.total(cost)}
    }

 
    total = () => {
        const add = (a, b) =>
            a + b;
        const sum = this.state.costs.reduce(add)
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
                            key={key}
                            index={index}
                            title={title[index]}
                            options={this.state.features[key]}
                            onClick={this.handleClick} 
                        />
                    )}
                </section>
                <Summary 
                    setTotal={this.total}
                    selectedParts={this.state.selected}
                    setTotal={this.total()}
                />
                </main>
            </div>
        );
    }

}

export default App;
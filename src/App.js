import React, { Component } from 'react';
import './App.css';
import FEATURES from './index';
import MainForm from './composition/MainForm'
import MainSummary from './composition/MainSummary'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            features: FEATURES,
            selected: { },
        };
        this.handleClick = this.handleClick.bind(this)
        this.total = this.total.bind(this)
    }

    handleClick( name, cost, title) {
        const selected = Object.assign({}, this.state.selected);
        selected[title] = [name, cost]
  
        this.setState({
            selected
        });

        this.total()
    }

    total = () => {
        let sum = 0
        Object.keys(this.state.selected).forEach(key => {
            sum += this.state.selected[key][1]
        })
        return sum;
    }
    

    render () {
        return (
            <div className="App">
                <header role="banner">
                    <h1>ELF Computing</h1>
                    <h3>Laptops</h3>
                    <h5>Customize your laptop</h5>  
                </header>      
                <main role="main">
                    <MainForm
                        features={this.state.features}
                        selected={this.state.selected}
                        onClick={this.handleClick} 
                    />
                    <MainSummary 
                        selected={this.state.selected}
                        total={this.total()}
                    />
                </main>
            </div>
        );
    }

}

export default App;
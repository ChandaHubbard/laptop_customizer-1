import React from 'react';
import './Parts.css'




class Parts extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        backgroundColor: props.bgColor,
                        active: null,
                        selectedNames: [],
                        selected: this.props.selected
                }
        }

        handleClick(position) {

                this.props.onClick && this.props.onClick(this.props.name, this.props.cost, this.props.title)
    
           
                if (this.state.active === position) {
                        this.setState({active: null})
                }else {
                        this.setState({active: position})
                }
        }

        selectedColor(position) {
                const selectedName = Object.keys(this.props.selected).map(key => this.props.selected[key][0])
                console.log(selectedName);
                for (let i = 0; i < selectedName.length; i++) {
                        if (this.state.active === position && selectedName[i] === this.props.name) {
                                return 'gainsboro';
                        }
                }
                return "";
        }

        render() {
                return (
                        <div className="feature" >
                                        <li key={this.props.index} className="feature__item"
                                        onClick={() => this.handleClick()}
                                        style={{backgroundColor: this.selectedColor()}}
                                      
                                        >
                                        <div className="feature_option">

                                                {this.props.name} (${this.props.cost})
                                        </div>
                                </li>
                        </div>
                )
        }
}

export default Parts;
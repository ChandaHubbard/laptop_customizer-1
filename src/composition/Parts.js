import React from 'react';
import './Parts.css'




class Parts extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        backgroundColor: props.bgColor
                }
        }

        handleClick() {
                this.setState({
                        backgroundColor: 'gainsboro'
                })
                this.props.onClick && this.props.onClick(this.props.name, this.props.cost, this.props.title)
                if (this.state.backgroundColor === 'gainsboro') {
                        this.setState({
                                backgroundColor: 'white'
                        })
                }
        }

        render() {
                return (
                        <div className="feature" >
                                        <li key={this.props.index} className="feature__item"
                                        onClick={() => this.handleClick() }
                                        style={{backgroundColor:this.state.backgroundColor}}
                                        >

                                        {this.props.name} (${this.props.cost})
                                </li>
                        </div>
                )
        }
}

export default Parts;
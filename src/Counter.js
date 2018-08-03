import React from 'react'

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            number: 0
        }
    }

    incHandler = (number) => {
        this.setState(
            {
                number: this.state.number + number
            }
        )
    }

    decHandler = (number) => {
        this.setState(
            {
                number: this.state.number - number
            }
        )
    }

    restartNumber = () => {
        this.setState(
            {
                number: 0
            }
        )
    }

    render() {
        return (
            <div className='counter'>
                <h1 className='counter-number'>{this.state.number}</h1>
                <ul className='counter-buttons'>
                <li>
                <button 
                    className='counter-btn'
                    onClick={() => this.incHandler(1)}
                >
                    + 1
                </button>
                <button
                    className='counter-btn'
                    onClick={() => this.decHandler(1)}
                >
                    - 1
                </button>
                </li>
                <li>
                <button
                    className='counter-btn'
                    onClick={() => this.incHandler(5)}
                >
                    + 5
                </button>
                <button
                    className='counter-btn'
                    onClick={() => this.decHandler(5)}
                >
                    - 5
                </button>
                </li>
                <li>
                <button
                    className='.counter-btn counter-btn-restart'
                    onClick={() => this.restartNumber()}
                >
                    RESTART
                </button>
                </li>
                </ul>
            </div>)
    }
}


export default Counter
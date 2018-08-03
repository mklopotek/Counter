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
                <h1>{this.state.number}</h1>
                <button 
                    className='counter-button'
                    onClick={() => this.incHandler(1)}
                >
                    + 1
                </button>
                <button
                    className='counter-button'
                    onClick={() => this.decHandler(1)}
                >
                    - 1
                </button>
                <button
                    className='counter-button'
                    onClick={() => this.incHandler(5)}
                >
                    + 5
                </button>
                <button
                    className='counter-button'
                    onClick={() => this.decHandler(5)}
                >
                    - 5
                </button>
                <button
                    className='counter-button'
                    onClick={() => this.restartNumber()}
                >
                    RESTART
                </button>
            </div>)
    }
}


export default Counter
import React from 'react'
import Button from './Button'

class Clock extends React.Component{
    state = {
        sec: 0,
        min: 0,
        intervalTime: null,
        isTicking: true
    }

    componentDidMount(){
       this.play()
    }

    stop(){
        clearInterval(this.state.intervalTime)
        this.setState({
            sec: 0,
            min: 0,
            isTicking: false,
        })
    }

    play(){
        let interval = setInterval(() => {
            this.state.sec += 1;
            if(this.state.sec >= 59){
                this.state.sec = 0
                this.state.min += 1
            }
            this.setState({
                sec: this.state.sec,
                min: this.state.min
            })
        }, 1000)

        this.setState({
            intervalTime: interval,
            isTicking: true,
        })
    }

    pause(){
        clearInterval(this.state.intervalTime)
        this.setState({isTicking: false})
    }

    componentWillUnmount(){
        console.log("Se destruye")
        clearInterval(this.state.intervalTime)
    }

    prettyNumbers(num){
        if(num < 10){
            return "0" + num
        }else{
            return num
        }
    }

    render () {
        return (
            <div>
                <h1>
                    {this.prettyNumbers(this.state.min)}:{this.prettyNumbers(this.state.sec)}
                </h1>
                {this.state.isTicking ?
                    <Button click={() => this.pause()}>Pause</Button>
                :
                    <Button click={() => this.play()}>Start</Button>
                }
                <Button click={() => this.stop()}>Stop</Button>
            </div>
        )
    }
}

export default Clock;
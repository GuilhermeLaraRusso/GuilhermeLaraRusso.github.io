import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      minutes: 0,
      seconds: 0
    }
  }

  componentDidMount() {
    console.log('montei');
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds === 0 && prevState.minutes === 0) {
      alert('acabou');
      
    } else if (prevState.seconds === 0){
      
      this.setState({ 
        minutes: prevState.minutes - 1,
        seconds: prevState.seconds + 59
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  startButton() {

  }
  

  render() {
    const { minutes, seconds } = this.state;
    return(
      <div>
        <label htmlFor="minutes">
          <input type="number" name="minutes" id="minutes" max={99} min={0} value={minutes}/>
        </label>
        <label htmlFor="seconds">
          <input type="number" name="seconds" id="seconds" min={0} max={59} value={seconds} />
        </label>
        <label htmlFor="start">
          <button type="button">Start</button>
        </label>
        <label htmlFor="pause">
          <button type="button">Pause</button>
        </label>
        <label htmlFor="stop">
          <button type="button">Stop</button>
        </label>
      </div>
    )
  }
}

export default Stopwatch;

import  React from 'react'
import "../Styles/DateTime.scss";

//Reusable Date time clock component with timezone support
//Gets timezone input as a prop and uses it to change local date to new timezone
//Both analogue and dialog clocks with option to delete

class DateTime extends React.Component {
  clockInterval = 0;
  constructor(props) {
    super(props);
    this.timez = props.timeZone;
    this.handleDate = this.handleDate.bind(this);
    this.state = {
      timeDate: new Date(
        new Date().toLocaleString("en-US", { timeZone: this.timez }).toString()
        ),
        hours: "",
        minutes: "",
        seconds: "",
        Day: "",
        Month: "",
        Year: ""
    };
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.handleDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    const { hours, minutes, seconds, Day, Month, Year } = this.state;
    const secondsStyle = {
      transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
      transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
      transform: `rotate(${hours * 30}deg)`
    };

    return (
      <div className={"clock"}>
        <h3>{this.timez}</h3>
        <div className={"analog-clock"}>
        <span className="close" onClick={this.props.onDelete}></span>
          <div className={"dial seconds"} style={secondsStyle} />
          <div className={"dial minutes"} style={minutesStyle} />
          <div className={"dial hours"} style={hoursStyle} />
        </div>
        <div className={"digital-clock"}>
        Time: 
          {hours}:{minutes}:{seconds}
        </div>
        <div >
        Date:
          {Day}.{Month}.{Year}
        </div>
      </div>
    );
  }
//this gets called during setinterval every second to update clock values 
  handleDate() {
    this.setState({
      time: new Date(
        new Date().toLocaleString("en-US", { timeZone: this.timez }).toString()
      ),
    });
    const now = this.state.time;
    let hours = this.formatTime(now.getHours());
    let minutes = this.formatTime(now.getMinutes());
    let seconds = this.formatTime(now.getSeconds());
    let Day = now.getDate();
    let Month = now.getMonth();
    let Year = now.getFullYear();
    this.setState({ hours, minutes, seconds , Day, Month, Year });
  }

  formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}
export default DateTime;

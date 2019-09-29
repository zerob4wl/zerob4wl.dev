import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()}
    }
    componentDidMount() {
        setInterval(()=>{
            const newTime = new Date();
            this.setState({time: newTime});
            this.props.eventManager.emit('body.time', newTime);
        },1000);
    }

    render() {
        return <p>{this.state.time.toTimeString()}</p>
    }
}


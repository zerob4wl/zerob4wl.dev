import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()}
    }
    componentDidMount() {
        setInterval(()=>{
            this.setState({time: new Date()});
        });
    }

    render() {
        return <p>{this.state.time.toTimeString()}</p>
    }
}


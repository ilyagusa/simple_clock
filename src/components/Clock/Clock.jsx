import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            time: 0
        };
    }

    //забираем данные с сервера flask
    tick() {
        let url = "http://localhost:5000/time/"
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        time: result.time
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    async componentDidMount() {
        this.interval = setInterval(() => {
            this.tick()
        }, 1000);
        this.intervalID = setInterval(() => this.tick(), 1000);
    }



    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>error</p>
        }
        else if (!isLoaded) {
            return <p>Loading...</p>
        }
        else {
            return (
                <p className="App-clock">
                    Текущее время: {this.state.time}.
                </p>
            );
        }
    }
}

export default Clock;
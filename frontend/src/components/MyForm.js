import React from "react";
import axios from "axios";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const name = this.state;

        axios
            .post("http://localhost:3500/", name)
            .then(() => console.log("Name Created"))
            .catch((err) => {
                console.error(err);
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={this.state.value}
                        name="name"
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default MyForm;

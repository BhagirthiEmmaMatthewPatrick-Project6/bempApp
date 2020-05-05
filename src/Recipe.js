import React, { Component } from 'react';
import axios from 'axios';


class Recipes extends Component {
    constructor() {
        super();
        this.state = {
            recipes: []
        };
    }


    componentDidMount() {
        const url = "https://api.edamam.com/search?q=pasta&app_id=3543772f&app_key=b9b71abdb0e3fe794b96dca1ba1d68c5&Health=Gluten";
        const key = "b9b71abdb0e3fe794b96dca1ba1d68c5";
        const id = "3543772f";
        axios({
            method: 'GET',
            url: url,
            "api_id": id,
            "api_key": key,
            format: 'json',
        }).then((res) => {
            console.log(res.data.hits);
            this.setState({
                recipes: res.data.hits
            })
        })
    }



    render() {
        return (
            <ul>
                {this.state.recipes.map((recipe) => {
                    return (
                        <li></li>
                    )

                })}

            </ul>
        )
    }

};

export default Recipes;
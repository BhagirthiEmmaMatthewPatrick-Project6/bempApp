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
        this.getRecipes();
    }

    getRecipes = () => {
        // Spoonacular API call
        const url = 'https://api.spoonacular.com/recipes/search?apiKey=ac3ee15e730b4a6c9dbc8bfa56524854&query=pizza&intolerances=gluten';
        const key = 'ac3ee15e730b4a6c9dbc8bfa56524854';

        axios({
            method: 'GET',
            url: url,
            "apiKey": key,
            format: 'json',
            query: "pizza",
            intolerances: "gluten",
            diet: " "
        }).then((res) => {
            console.log(res.data.results);
            this.setState({
                recipes: res.data.results
            })
        })
    }


    render() {
        return (
            <ul className="recipeGallery">
                {this.state.recipes.map((recipeObj) => {
                     console.log(recipeObj);
                    return (
                        
                        <li>
                            <h2><a href={recipeObj.sourceUrl}>{recipeObj.title}</a></h2>
                            <img src={`https://spoonacular.com/recipeImages/${recipeObj.id}-${"480x360"}.${"jpg"}`} alt={recipeObj.title}/>
                        </li>
                    )

                })}

            </ul>
        )
    }

};

export default Recipes;
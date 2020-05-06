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
        const url = "https://api.edamam.com/search?q=pasta&app_id=3543772f&app_key=b9b71abdb0e3fe794b96dca1ba1d68c5&Health=Gluten";
        const key = "b9b71abdb0e3fe794b96dca1ba1d68c5";
        const id = "3543772f";
        axios({
            method: 'GET',
            url: url,
            "api_id": id,
            "api_key": key,
            format: 'json',
            params: {
                
            }
        }).then((res) => {
            
            this.setState({
                recipes: res.data.hits
            })
        })
    }


    render() {
        return (
            <ul className="recipeGallery">
                {this.state.recipes.map((recipeObj) => {
                     console.log(recipeObj.recipe.image);
                    return (
                        
                        <li><img src={recipeObj.recipe.image} alt=""/></li>
                    )

                })}

            </ul>
        )
    }

};

export default Recipes;
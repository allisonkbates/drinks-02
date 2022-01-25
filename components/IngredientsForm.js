import React, { Component } from 'react';
import IngredientList from './IngredientList';

class IngredientsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    }
    this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let id = event.target.id;
    let inStock = event.target.checked;
    let updatedIng = {
      "id": id,
      "fields": {
        "inStock": inStock
      }
    }
    this.setState({
      ingredients: Array.from(new Set([...this.state.ingredients, updatedIng ]))
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    let fields = this.state.ingredients;

		try {
      const res = await fetch('./api/updateIngredients', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ fields })
      })

      if (res.status === 200) {
        console.log('Your ingredients were updated!')
				console.log(JSON.stringify({ fields }));
      } else {
				console.log('Sorry, something went wrong.')
				console.log(JSON.stringify({ fields }));
      }
    } catch(err) {
        alert(err);
    }
	}
	
  render() {
    return (
      <form className="form__container" onSubmit={this.handleSubmit}>
        <h1 className="add__heading">{this.props.heading}</h1>
        <input type="submit" name="submit" value="Save Ingredients"/>
        <IngredientList 
          ingredients={this.props.ingredients} 
          handleChange={this.handleChange} 
          >
        </IngredientList>
				<label htmlFor="submit" className="submit-label">Save Drink</label>
        
      </form>
    )
  }
}

export default IngredientsForm;
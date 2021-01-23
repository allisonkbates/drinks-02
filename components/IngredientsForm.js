import React, { Component } from 'react';

class IngredientsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
			id: '',
			ingredientName: '',
			inStock: ''
    }
    this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let inputName = event.target.name;
    let val = event.target.value;
    this.setState({[inputName]: val});
  }

  async handleSubmit(event) {
		event.preventDefault();
    let fields = {
			"id": this.state.id,
			"ingredientName": this.state.ingredientName,
			"inStock": this.state.inStock
		}
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
				console.log(res.response);
      } else {
				console.log('Sorry, something went wrong.')
				console.log(JSON.stringify({ fields }));
      }
    } catch(err) {
      alert(err);
    }
	}
	
  render() {
    function showIngredients(ingredients) {
      return ingredients
        .map(ingredient => 
          <div className="row" key={ingredient.id}>
            <input type="hidden" name="id" value={ingredient.id}></input>
            <label htmlFor="ingredientName">{ingredient.fields.ingredientName}</label>
            <input type="hidden" name="ingredientName" value={ingredient.fields.ingredientName}></input>
            <label className="hidden" htmlFor="inStock"></label>
            <input type="checkbox" name="inStock" defaultChecked={ingredient.fields.inStock}></input>
          </div>
      )
    }

		{console.log(this.props.ingredients)}
    return (
      <form className="form__container" onSubmit={this.handleSubmit}>
				<p className="drink__body">Ingredients Will Go Here!</p>
        {showIngredients(this.props.ingredients)}
				<label htmlFor="submit" className="submit-label">Save Drink</label>
        <input type="submit" name="submit" value="Save Ingredients"/>
      </form>
    )
  }
}

export default IngredientsForm;

/*           
ID - Hidden Input
<input type="hidden" name="id" value={ingredient.id}></input>
Ingredient Name - Not Editable
<label htmlFor="ingredientName">{ingredient.ingredientName}</label>
<input type="hidden" name="ingredientName" value={ingredient.fields.ingredientName}></input>
In Stock - Editable Checkbox
<label htmlFor="inStock">{ingredient.fields.inStock}</label>
<input type="checkbox"></input>
*/
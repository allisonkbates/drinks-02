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
		{console.log(this.props.ingredients[0])}
    return (
      <form className="form__container" onSubmit={this.handleSubmit}>
				<label htmlFor="id">{this.props.ingredients[0].id}</label>
        <input type="text" name="id" onChange={this.handleChange} value={this.props.ingredients[0].id} contentEditable/>
				<label htmlFor="ingredientName">Ingredient Name</label>
        <input type="text" name="ingredientName" onChange={this.handleChange}/>
				<p className="drink__body">Ingredients Will Go Here!</p>
				<label htmlFor="submit" className="submit-label">Save Drink</label>
        <input type="submit" name="submit" value="Save Ingredients"/>
      </form>
    )
  }
}

export default IngredientsForm;
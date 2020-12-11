import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktailName: '',
      ingredients: '',
      preparation: '',
      alcohol: ''
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
			"cocktailName": this.state.cocktailName,
			"ingredients": this.state.ingredients,
			"preparation": this.state.preparation,
			"tags": [this.state.alcohol]
		}
		try {
      const res = await fetch('./api/addDrinks', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ fields })
      })

      if (res.status === 200) {
        console.log('Your drink was added!')
        console.log(res.response);
      } else {
        console.log('Sorry, something went wrong.')
      }
    } catch(err) {
      alert(err);
    }
	}
	
  render() {
    return (
      <div className="add__page">
        <div className="add__container">
          <h1 className="add__heading">Add Your Favorite Drink</h1>
          <p className="add__text">Tell us about your favorite drink & we'll add it to our database :) </p>
          <form className="form__container" onSubmit={this.handleSubmit}>
            <label htmlFor="cocktailName">Cocktail Name</label>
            <input type="text" name="cocktailName" onChange={this.handleChange}/>
            <label htmlFor="ingredients">What ingredients are in your cocktail?</label>
            <textarea name="ingredients" rows="4" onChange={this.handleChange}></textarea>
            <label htmlFor="preparation">Tell us how to make your cocktail</label>
            <textarea name="preparation" rows="4" onChange={this.handleChange}></textarea>
            <label htmlFor="alcohol">Select the primary alcohol</label>
            <div className="select-container">
              <input type="radio" id="Gin" name="alcohol" value="Gin"/>
              <label htmlFor="Gin">Gin</label><br></br>
              <input type="radio" id="Whiskey" name="alcohol" value="Whiskey"/>
              <label htmlFor="Whiskey" className="radio">Whiskey</label><br></br>
              <input type="radio" id="Vodka" name="alcohol" value="Vodka"/>
              <label htmlFor="Vodka" className="radio">Vodka</label><br></br>
              <input type="radio" id="Rum" name="alcohol" value="Rum"/>
              <label htmlFor="Rum" className="radio">Rum</label><br></br>
              <input type="radio" id="other" name="alcohol" value="other"/>
              <label htmlFor="other" className="radio">Other</label>
            </div>
            <label htmlFor="submit" className="submit-label">Save Drink</label>
            <input type="submit" name="submit" value="Save Drink"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Form;
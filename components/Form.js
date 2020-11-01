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
      <div className="container">
        <div className="messages"> {/* Expand this for styling based on response */}
          <p></p>
        </div>
        <div className="form-container">
          <h1>Add Your Favorite Cocktail</h1>
          <p>Tell us about your favorite cocktail & we'll add it to our database :) </p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="cocktailName">Cocktail Name</label>
            <input type="text" name="cocktailName" onChange={this.handleChange}></input>
            <label htmlFor="ingredients">What ingredients are in your cocktail?</label>
            <input type="text" name="ingredients" onChange={this.handleChange}></input>
            <label htmlFor="preparation">Tell us how to make your cocktali</label>
            <input type="text" name="preparation" onChange={this.handleChange}></input>
            <label htmlFor="alcohol">Select the primary alcohol</label>
            <select id="alcohol" name="alcohol" onChange={this.handleChange}>
              <option value="none">None</option>
              <option value="vodka">Vodka</option>
              <option value="gin">Gin</option>
              <option value="whiskey">Whiskey</option>
              <option value="rum">Rum</option>
            </select>
          {/*<label for="upload">Upload a Photo</label>
            <input type="file" name="upload"></input>*/}
            <label htmlFor="submit">Submit</label>
            <button type="submit" name="submit">Submit</button>
          </form>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
          }
          .form-container {
            background-color: white;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
            width: 50vw;
            min-height: 600px;
            margin: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: sans-serif;
          }

          form {
            display: flex;
            flex-direction: column;
          }

          label {
            padding: 8px 0px;
          }

          input {
            margin-bottom: 12px;
          }
        `}</style>
      </div>
    )
  }
}

export default Form;


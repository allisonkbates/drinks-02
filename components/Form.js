import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFormContainer = styled.div`
	padding: 0px 5% 20px;
	border-top: 20px solid #377084;
`; /* probably lose this, keeping for sanity now*/

const StyledH1 = styled.h1`
	font-family: "Advent Pro", sans-serif;
	font-weight: 400;
	color: #377084;
	margin-bottom: 0;
`;

const StyledP = styled.p`
	font-family: "Oxygen", sans-serif;
	color: #377084;
	width: 75%;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 75%;
	
	label {
		font-family: "Oxygen", sans-serif;
		color: #377084;
		margin: 10px -10px -10px 16px;
		padding: 0px 5px;
		background-color: #EFF3F4;
		z-index: 1;
	}
	input[type="text"],
	textarea {
		background-color: transparent;
		border: 2px solid #377084;
		border-radius: 5px;
		width: 75%;
		margin-bottom: 20px;
		min-height: 40px;
		padding: 10px;
	}
	input[type="text"]:focus,
	textarea:focus {
		outline-color: #2c5969;
	}

	textarea {
		min-height: 80px;
	}

	.submit-label {
	display: none;
	}

	.select-container {
		min-height: 50px;
		width: 75%;
		padding: 16px;
		border: 2px solid #377084;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 20px;
	}

	input[type="radio"] {
		opacity: 0;
		position: absolute;
	}

	input[type="radio"]:checked + label:after {
		content: "";
		position: absolute;
		width: 12px;
		height: 12px;
		top: 9px;
		left: -18px;
		background: #377084;
		border-radius: 50%;
	}
	input[type="radio"] + label {
		position: relative;
		top: 0;
		padding: 5px 5px;
		margin: 0 16px 0 24px;
		cursor: pointer;
		font-weight: 500;
	}
	input[type="radio"] + label:before {
		content: "";
		position: absolute;
		width: 16px;
		height: 16px;
		border: 2px solid;
		border-radius: 50%;
		left: -22px;
	}

		input[type="submit"] {
		padding: 12px 20px;
		color: #fffaf0;
		background-color: #377084;
		border-radius: 3px;
		border: none;
		margin-bottom: 20px;
	}

`;

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
      <StyledFormContainer>
        <StyledH1>Add Your Favorite Cocktail</StyledH1>
        <StyledP>Tell us about your favorite cocktail & we'll add it to our database :) </StyledP>
        <StyledForm onSubmit={this.handleSubmit}>
          <label htmlFor="cocktailName">Cocktail Name</label>
          <input type="text" name="cocktailName" onChange={this.handleChange}/>
          <label htmlFor="ingredients">What ingredients are in your cocktail?</label>
					<textarea name="ingredients" rows="4" onChange={this.handleChange}></textarea>
          <label htmlFor="preparation">Tell us how to make your cocktail</label>
					<textarea name="preparation" rows="4" onChange={this.handleChange}></textarea>
          <label for="alcohol">Select the primary alcohol</label>
					<div className="select-container">
						<input type="radio" id="Gin" name="alcohol" value="Gin"/>
						<label for="Gin">Gin</label><br></br>
						<input type="radio" id="Whiskey" name="alcohol" value="Whiskey"/>
						<label for="Whiskey" class="radio">Whiskey</label><br></br>
						<input type="radio" id="Vodka" name="alcohol" value="Vodka"/>
						<label for="Vodka" className="radio">Vodka</label><br></br>
						<input type="radio" id="Rum" name="alcohol" value="Rum"/>
						<label for="Rum" className="radio">Rum</label><br></br>
						<input type="radio" id="other" name="alcohol" value="other"/>
						<label for="other" className="radio">Other</label>
					</div>
          <label htmlFor="submit" className="submit-label">Submit</label>
					<input type="submit" name="submit"/>
        </StyledForm>
      </StyledFormContainer>
    )
  }
}

export default Form;
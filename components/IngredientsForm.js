import React, { Component } from 'react';

class IngredientsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
			// add state here
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let inputName = event.target.name;
    let val = event.target.value;
    this.setState({[inputName]: val}); // check to see if this is right
  }

  async handleSubmit(event) {
		event.preventDefault();
    let fields = {
			// add fields here
		}
		try {
      const res = await fetch('', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ fields })
      })

      if (res.status === 200) {
        console.log('Your ingredients were updated!')
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
      <form className="form__container" onSubmit={this.handleSubmit}>
				<label htmlFor="submit" className="submit-label">Save Drink</label>
				<p className="drink__body">Ingredients Will Go Here!</p>
        <input type="submit" name="submit" value="Save Ingredients"/>
      </form>
    )
  }
}

export default IngredientsForm;
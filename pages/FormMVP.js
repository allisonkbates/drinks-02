import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { table, prepareRecords } from './api/utils/Airtable';
import { useState } from 'react';

export default function Home(initialDrinks) {
  const [drinkName, setInput] = useState('');

  const addDrink = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('./api/addDrinks', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          cocktailName: drinkName
        })
      })

      if (res.status === 200) {
        alert('Your drink was added!')
      } else {
        alert('Sorry, something went wrong.')
      }
    } catch(err) {
      alert(err);
    }
  }

  return (
    <div className="container">
      <h1>Drinks MVP</h1>
      {console.log(initialDrinks)}
      <form>
        <label htmlFor="cocktailName">Cocktail Name</label>
        <input type="text" name="cocktailName" value={drinkName} onChange={e => setInput(e.target.value)}></input>
        <label htmlFor="submit">Submit</label>
        <button type="submit" name="submit" onClick={addDrink}>Submit</button>
      </form>
      <style jsx>{`
        .container {
          margin: 20px;
        }
        form {
          display: flex;
          flex-direction: column;
          width: 500px;
        }  
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const drinks = await table.select({}).firstPage();
    return {
      props: {
        initialDrinks: prepareRecords(drinks)
      }
    }
  } catch(err) {
    console.error(err);
  }
}

/* 
1) Test Form just on the basic index page for functionality
2) Test that this can post to the API 
3) If this works, obviously break out into its own component...

  const subscribe = async (e) => {
    e.preventDefault() // prevents page reload
    alert("You have subscribed!")
  }



*/
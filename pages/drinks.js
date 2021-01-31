import { drinksTable, prepareRecords } from './api/utils/Airtable';
import { getFilteredDrinks } from '../helpers/drinkFormat';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function viewAll(props) {
  const drinks = props.drinks;
  let  initialDrinks = getFilteredDrinks(drinks, 'all', 100, 'card-width-400');
  
  function handleClick(event) {
    console.log(event);
    /* learn use state */
  }

  return (
    <div className="">
      <Nav />
      <h1 className="all__heading">View All Drinks</h1>
      <div className="filter__container">
        <button className="filter__chip filter__chip--active" value="whiskey" onClick={handleClick}>Whiskey</button>
        <button className="filter__chip" value="gin">Gin</button>
        <button className="filter__chip" value="vodka">Vodka</button>
        <button className="filter__chip" value="rum">Rum</button>
        <button className="filter__chip" value="tequila">Tequila</button>
        <button className="filter__chip" value="other">Other</button>
      </div>
      <div className="view-all">
				{initialDrinks}
			</div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const drinks = await drinksTable.select({
    sort: [{field: "cocktailName", direction: "asc"}]
  }).firstPage();
  const preparedDrinks = prepareRecords(drinks);
  return {
    props: {
      drinks: preparedDrinks
    }
  }
}



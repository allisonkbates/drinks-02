import { drinksTable, prepareRecords } from './api/utils/Airtable';
import { getFilteredDrinks } from '../helpers/drinkFormat';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function viewAll(props) {
	const drinks = getFilteredDrinks(props.drinks, 'all', 100, 'card-width-400');

  return (
    <div className="">
      <Nav />
      <h1 className="all__heading">View All Drinks</h1>
      <div className="view-all">
				{drinks}
			</div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const drinks = await drinksTable.select({}).firstPage();
  const preparedDrinks = prepareRecords(drinks);
  return {
    props: {
      drinks: preparedDrinks
    }
  }
}



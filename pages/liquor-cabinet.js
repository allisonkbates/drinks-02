import { ingredientsTable, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav';
import Rec from '../components/Rec';
import Footer from '../components/Footer';

function showIngredients(ingredients) {
	return ingredients
		.map(ingredient => <li key={ingredient.id}>{`${ingredient.fields.ingredientName} - ${ingredient.fields.inStock ? 'In Stock' : 'Out of Stock'}`}</li>)
}

export default function LiquorCabinet(props) {

  return (
    <div className="">
      <Nav />
			<ul>
				{showIngredients(props.ingredients)}
			</ul>
			{console.log(props.ingredients)}
      <form>
        <input type="checkbox" name="ingredient1" value="whiskey" checked></input>
        <label htmlFor="ingredient1">Whiskey</label>
      </form>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const ingredients = await ingredientsTable.select({
		sort: [{field: "ingredientName", direction: "asc"}]
	}).firstPage();
  const preparedIngredients = prepareRecords(ingredients);
  return {
    props: {
      ingredients: preparedIngredients
    }
  }
}

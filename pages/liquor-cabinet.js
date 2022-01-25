import { ingredientsTable, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav';
import IngredientsForm from '../components/IngredientsForm';
import Footer from '../components/Footer';

export default function LiquorCabinet(props) {
  return (
    <div>
      <Nav />
      <div className="page_container">
        <h1>Manage your Liquor Cabinet</h1>
        <p>Keep track of what ingredients you have in stock.</p>
        <IngredientsForm 
          ingredients={props.ingredients}>
        </IngredientsForm>
      </div>
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

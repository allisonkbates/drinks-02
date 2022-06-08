import { ingredientsTable, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav';
import Footer from '../components/Footer';





export default function IngredientsPage(props) {
  let ing = props.ingredients[0];
  let handleChange;
  return (
    <div>
      <Nav />
      <div className="page_container">
        <h1>The Liquor Cabinet</h1>
        <input type="checkbox" name="inStock" defaultChecked={ing.fields.inStock} id={ing.id} onChange={handleChange}></input>
        <label htmlFor="ingredientName">{ing.fields.ingredientName}</label>
      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
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
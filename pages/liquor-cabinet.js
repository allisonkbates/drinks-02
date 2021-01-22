import { ingredientsTable, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav';
import FormLayout from '../components/FormLayout';
import IngredientsForm from '../components/IngredientsForm';
import Footer from '../components/Footer';
/*
function showIngredients(ingredients) {
	return ingredients
		.map(ingredient => <li key={ingredient.id}>{`${ingredient.fields.ingredientName} - ${ingredient.fields.inStock ? 'In Stock' : 'Out of Stock'}`}</li>)
}*/

export default function LiquorCabinet(props) {

  return (
    <div className="">
      <Nav />
      <FormLayout 
        heading={'Manage your Liquor Cabinet'} 
        description={'Keep track of what alcohol you have in stock.'}>
        <IngredientsForm></IngredientsForm>
      </FormLayout>
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

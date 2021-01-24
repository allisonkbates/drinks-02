import { ingredientsTable, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav';
import FormLayout from '../components/FormLayout';
import IngredientsForm from '../components/IngredientsForm';
import Footer from '../components/Footer';

export default function LiquorCabinet(props) {
  return (
    <div>
      <Nav />
      <FormLayout 
        heading={'Manage your Liquor Cabinet'} 
        description={'Keep track of what alcohol you have in stock.'}>
        <IngredientsForm ingredients={props.ingredients}></IngredientsForm>
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

import { table, prepareRecords } from './api/utils/Airtable';
import Nav from '../components/Nav';
import Form from '../components/Form';

export default function Home(initialDrinks) {
  return (
    <div className="container">
      <Nav />
      <h1>Drinks MVP</h1>
      <p>You have {initialDrinks.initialDrinks.length} drinks in your database.</p>
      {console.log(initialDrinks)}
      <Form />
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

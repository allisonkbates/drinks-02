import Head from 'next/head';
import { table, prepareRecords } from './api/utils/Airtable';
import Form from '../components/Form';

export default function Home(initialDrinks) {
  return (
    <div className="container">
      <h1>Drinks MVP</h1>
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

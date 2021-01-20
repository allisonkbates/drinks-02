import Airtable from 'airtable';

Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
const drinksTable = base(process.env.AIRTABLE_DRINKS_TABLE_NAME);
const ingredientsTable = base(process.env.AIRTABLE_INGREDIENTS_TABLE_NAME);


const prepareRecord = (record) => {
	return {
		id: record.id,
		fields: record.fields
	};
};

const prepareRecords = (records) => {
	return records.map((record) => prepareRecord(record));
}

export { ingredientsTable, drinksTable, prepareRecords, prepareRecord };
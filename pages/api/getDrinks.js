import { table, prepareRecords} from './utils/Airtable';

export default async (req, res) => {
	try {
		const records = await table.select({}).firstPage();
		const preparedRecords = prepareRecords(records);
		res.statusCode = 200;
		res.json(preparedRecords);
	} catch(err) {
		res.statusCode = 500;
		res.json({ msg: 'Something went wrong' });
	}
};
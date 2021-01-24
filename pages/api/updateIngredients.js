import { ingredientsTable } from './utils/Airtable';

export default async (req, res) => {
	try {
		const fields = req.body.fields;
		const createdRecords = await ingredientsTable.update(fields);
		res.statusCode = 200;
		res.json({createdRecords});
		console.log(createdRecords);
	} catch(err) {
		console.error(err);
		console.log(req.body.fields);
		res.statusCode = 500;
		res.json({ msg: 'Something went wrong' });
	}
}

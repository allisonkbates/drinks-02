import { table } from './utils/Airtable';

export default async (req, res) => {
	try {
		const { cocktailName, ingredients, preparation, tags } = req.body.fields;
		const createdRecords = await table.create([
			{ fields: { cocktailName, ingredients, preparation, tags} }
		]);
		res.statusCode = 200;
		res.json({createdRecords});
		console.log(createdRecords);
	} catch(err) {
		console.error(err);
		res.statusCode = 500;
		res.json({ msg: 'Something went wrong' });
	}
}

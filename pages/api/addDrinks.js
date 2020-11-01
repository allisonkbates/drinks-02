import { table } from './utils/Airtable';

export default async (req, res) => {
	const { cocktailName, ingredients, preparation, tags } = req.body.fields;
	try {
		const createdRecords = await table.create([
			{ fields: { cocktailName, ingredients, preparation, tags} }
		]);
		res.statusCode = 200;
		res.json({createdRecords});
		console.log()
		console.log(createdRecords);
	} catch(err) {
		console.error(err);
		res.statusCode = 500;
		res.json({ msg: 'Something went wrong' });
	}
}



/* 
- Probably should add some sort of condition if req.body is blank, don't do anything




export default async (req, res) => {
	const cocktailName = req.body.fields.cocktailName;
	const ingredients = req.body.fields.ingredients;
	const preparation = req.body.fields.preparation;
	const alcohol = req.body.fields.alcohol;
	try {
		const createdRecords = await table.create([
			{ fields: {"cocktailName": cocktailName, "ingredients": ingredients, "preparation": preparation, "tags": [alcohol]} }
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
*/

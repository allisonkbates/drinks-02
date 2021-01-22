import Nav from '../components/Nav';
import FormLayout from '../components/FormLayout';
import DrinkForm from '../components/DrinkForm';
import Footer from '../components/Footer';

export default function add() {
	return (
		<div style={{backgroundColor: "#EFF3F4"}}>
			<Nav />
			<FormLayout 
				heading={'Add Your Favorite Drink'}
				description={"Tell us about your favorite drink & we'll add it to our database :)"}>
				<DrinkForm></DrinkForm>
			</FormLayout>
			<Footer />
		</div>
	)
}
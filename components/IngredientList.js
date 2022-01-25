export default function IngredientList(props) {
  /* Assign Props */
  let handleChange = props.handleChange;
  let ingredients = props.ingredients;

  const FILTER_ING_MAP = {
    Alcohol: {
      filter: ing => ing.fields.ingredientType === 'alcohol',
      title: 'Alcohol'
    },
    Liqueurs: {
      filter: ing => ing.fields.ingredientType === 'liqueurs' || ing.fields.ingredientType === 'bitters',
      title: 'Liqueurs & Bitters'
    },
    Other: {
      filter: ing => ing.fields.ingredientType === "wines-vermouths",
      title: 'Wines & Vermouths'
    },
    Grocery: {
      filter: ing => ing.fields.ingredientType === 'grocery' || ing.fields.ingredientType === "sugars",
      title: 'Grocery Items',
    }
  }
  
  const FILTER_ING_NAMES = Object.keys(FILTER_ING_MAP);
  
  let categoriesWithIng = FILTER_ING_NAMES
  .map(category => {
    let ingredientList = ingredients
    .filter(FILTER_ING_MAP[category]['filter'])
    .map(ing => (
      <div key={ing.id}>
        <input type="checkbox" name="inStock" defaultChecked={ing.fields.inStock} id={ing.id} onChange={handleChange}></input>
        <label htmlFor="ingredientName">{ing.fields.ingredientName}</label>
      </div>
      )
    )
    return (
      <>
      <h2>{FILTER_ING_MAP[category]['title']}</h2>
      <div>
        {ingredientList}
      </div>
      </>
      );
  })

  return categoriesWithIng;
  
}


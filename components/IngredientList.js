export default function IngredientList(props) {
  /* Assign Props */
  let handleChange = props.handleChange;
  let ingredients = props.ingredients;
  
  /* Organize Ingredients into Categories */
  const FILTER_ING_MAP = {
    Alcohol: ing => ing.fields.ingredientType === 'alcohol',
    Liqueurs: ing => ing.fields.ingredientType === 'liqueurs',
    Bitters: ing => ing.fields.ingredientType === 'bitters',
    Other: ing => ing.fields.ingredientType === "wines-vermouths" || ing.fields.ingredientType === "sugars",
    Grocery: ing => ing.fields.ingredientType === 'grocery',
  }
  
  const FILTER_ING_NAMES = Object.keys(FILTER_ING_MAP);
  
  let categoriesWithIng = FILTER_ING_NAMES
  .map(category => {
    let ingredientList = ingredients
    .filter(FILTER_ING_MAP[category])
    .map(ing => (
      <div key={ing.id}>
        <input type="checkbox" name="inStock" defaultChecked={ing.fields.inStock} id={ing.id} onChange={handleChange}></input>
        <label htmlFor="ingredientName">{ing.fields.ingredientName}</label>
      </div>
      )
    )
    return (
      <>
      <h2>{category}</h2>
      <div>
        {ingredientList}
      </div>
      </>
      );
  })

  return categoriesWithIng;
  
}


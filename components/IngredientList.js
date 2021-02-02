export default function IngredientList(props) {
  let handleChange = props.handleChange;
  let ingredientFilter = props.filter;
  return props.ingredients
    .filter(ingredient => ingredient.fields.ingredientType && ingredient.fields.ingredientType === ingredientFilter)
    .map(ingredient => 
      <div className="row" key={ingredient.id}>
        <input type="hidden" name="id" value={ingredient.id}></input>
        <label htmlFor="ingredientName">{ingredient.fields.ingredientName}</label>
        <input type="hidden" name="ingredientName" value={ingredient.fields.ingredientName}></input>
        <label className="hidden" htmlFor="inStock"></label>
        <input type="checkbox" name="inStock" defaultChecked={ingredient.fields.inStock} id={ingredient.id} onChange={handleChange}></input>
      </div>
  )
}


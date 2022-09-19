import React, { useState } from 'react'
import { Formik } from 'formik'
import axios from 'axios'

const NewRecipeScreen = () => {
	const [ingredients, setIngredients] = useState([])
	const [name, setName] = useState('')
	const [quantity, setQuantity] = useState('')

	const initialValues = {
		type: '',
		recipeName: '',
		imageURL: '',
		prepTime: '',
		cookTime: '',
		serves: '',
		ingredients: [],
		instructions: '',
	}

	const addIngredient = () => {
		setIngredients([...ingredients, { name, quantity }])
		setName('')
		setQuantity('')
	}

	function onSubmit(values) {
		values.ingredients = ingredients
		console.log(values)
		axios.post(`https://recipes.devmountain.com/recipes`, values)
	}

	return (
		<section className="recipe-form-container">
			<h1>Tell us about your Recipe!</h1>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ values, handleChange, handleSubmit }) => (
					<form className="recipe-form" onSubmit={handleSubmit}>
						<fieldset className="recipe-main-info">
							<input
								type="text"
								placeholder="Name"
								value={values.recipeName}
								onChange={handleChange}
								name="recipeName"
							/>
							<input
								type="text"
								placeholder="Image URL"
								value={values.imageURL}
								onChange={handleChange}
								name="imageURL"
							/>
						</fieldset>
						<fieldset className="radios">
							<input
								type="radio"
								id="cook"
								name="type"
								value={values.type}
								onChange={handleChange}
							/>
							<label htmlFor="cook">Cook</label>
							<input
								type="radio"
								id="bake"
								name="type"
								value={values.type}
								onChange={handleChange}
							/>
							<label htmlFor="bake">Bake</label>
							<input
								type="radio"
								id="drink"
								name="type"
								value={values.type}
								onChange={handleChange}
							/>
							<label htmlFor="drink">Drink</label>
						</fieldset>
						<fieldset className="details-inputs">
							<input
								type="text"
								placeholder="Prep Time"
								value={values.prepTime}
								onChange={handleChange}
								name="prepTime"
							/>
							<input
								type="text"
								placeholder="Cook Time"
								value={values.cookTime}
								onChange={handleChange}
								name="cookTime"
							/>
							<input
								type="text"
								placeholder="Serves"
								value={values.serves}
								onChange={handleChange}
								name="serves"
							/>
						</fieldset>
						<div className="ingredients-area">
							<fieldset className="ingredients-inputs">
								<input
									type="text"
									placeholder="Ingredient"
									value={name}
									onChange={e => setName(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Quantity"
									value={quantity}
									onChange={e => setQuantity(e.target.value)}
								/>
							</fieldset>
							<ul className="output">Output here</ul>
						</div>
						<button
							type="button"
							className="orange-btn"
							onClick={addIngredient}
						>
							Add Another
						</button>
						<textarea
							name="instructions"
							id="instructions"
							cols="30"
							rows="10"
							value={values.instructions}
							onChange={handleChange}
						></textarea>
						<button type="submit">Save</button>
					</form>
				)}
			</Formik>
		</section>
	)
}

export default NewRecipeScreen

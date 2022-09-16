import React, { useEffect, useState } from 'react'
import axios from 'axios'

import mag from '../../assets/icons8-search.svg'
import AdBanner from './AdBanner'
import RecipeCard from '../newRecipeComponents/RecipeCard'

const HomeScreen = () => {
	const [recipes, setRecipes] = useState([])
	const [search, setSearch] = useState('')

	const url = 'https://recipes.devmountain.com'

	const getRecipes = () => {
		axios.get(`${url}/recipes`).then(res => {
			setRecipes(res.data)
		})
	}

	let filteredRecipes = recipes.filter(
		recipe =>
			recipe.recipe_name.toLowerCase().includes(search.toLowerCase()) &&
			recipe.recipe_name != 'undefined'
	)

	useEffect(() => {
		getRecipes()
	}, [])

	return (
		<div className="container">
			<AdBanner />
			<div className="search-wrapper">
				<input
					className="search-input"
					type="text"
					placeholder="Search for a Recipe"
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				<img className="mag" src={mag} alt="magnifying glass" />
			</div>
			<main className="recipe-cards-container">
				{filteredRecipes.map(recipe => (
					<RecipeCard recipe={recipe} key={recipe.recipe_id} />
				))}
			</main>
		</div>
	)
}

export default HomeScreen

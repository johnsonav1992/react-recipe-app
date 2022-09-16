import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
	return (
		<header className='main-header'>
			<h2 className='header-title'>Devmountain Eatery</h2>
			<nav>
				<button>
					<Link to="index">Home</Link>
				</button>
				<button>
					<Link to="newRecipe">Add Recipe</Link>
				</button>
			</nav>
		</header>
	)
}

export default Header

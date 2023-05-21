import { useState } from "react"
import './SearchBar.css'


export function SearchBar({onSubmit}) {
	const [term, setTerm] = useState('');
	

	const handleFormSubmit = (event) => {
		event.preventDefault()
		//console.log('Submit');
		onSubmit(term)
		
	}

	const handleChange = (event) => {
		setTerm(event.target.value)
	}
	return (
		<div className="search-bar">
			<form onSubmit={handleFormSubmit}>
				<label>Enter Search Term</label>
			  <input value={term} onChange={handleChange}/>
			</form>
		</div>
	)
}
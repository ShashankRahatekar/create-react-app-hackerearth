import React from 'react';

const Search = ({onChange}) => {
	return (
		<span className=''>
			<input 
				style={{ width: '25%', height: '25px' }}
				type='text' 
				placeholder='Search'
				onChange = { (e) => onChange(e.target.value) }
			/>
		</span>
	);
};

export default Search;
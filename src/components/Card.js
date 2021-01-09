import React from 'react';

const Card = ({ image, id, name, onClick }) => {
	return (
		<div onClick={onClick} className='four wide column'>
			<div className="ui card" key= {id}>
				<div className="image">
					<img alt='kristy' style={{ height: '300px' }} src={image} />
				</div>
				<div className="content">
					<p href='/' className="header">{name}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture,rating}) {
  return( 
  <div>
  <h1>I like {name}</h1>
  <h4>{rating}/5.0</h4>
  <img src = {picture} alt ={name}/>
  </div>
  );

}

const foodILike= [

  {
    id : 1,
    name : 'kimchi',
    image : 'https://bit.ly/3d14HVx',
    rating:4.9,
  },
  { 
    id : 2,
    name : 'Samgyeopsal',
    image:'http://asq.kr/wttMFjg1Ikyc',
    rating:5,
  },
];

function renderFood(dish){
  return <Food name = {dish.name} image = {dish.image}/>;
}

function App(){
  return(
    <div>
   {foodILike.map(dish=>(<Food key={dish.id} name = {dish.name} image = {dish.image}
   rating = {dish.rating}
   />))}
    </div>
  )
}
Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;

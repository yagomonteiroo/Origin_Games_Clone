import './card.css'
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState } from 'react';

const Card = (props) => {
  const game = props.data;

  const [wish, setWish]= useState(false);

  const handleWish = ()=>{
    setWish(!wish)
  }

  return (
    <div className='card'>
      <a className='card-item' href='/'>
        <div className='card-image'>
          <img src={game.thumbnail} alt={game.title}></img>
        </div>
        <h2 className='card-title'>{game.title}</h2>
        
        
      </a>

      <div className='card-botton' href={game.linkWish}>
        <span className='card-price'>{'R$200'}</span>
        <FaRegHeart onClick={handleWish} className={`wishlist ${wish ? "wishFalse" : "" }`} />
        <FaHeart onClick={handleWish} className={`wished ${wish ? "wish" : "" }`}/>

      </div>

    </div>
  )
}

export default Card
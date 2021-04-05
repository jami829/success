import React from 'react';

// css
import '../css/Item.scss';

function Item(props) {
  console.log('props', props)
  return (
    <div className='item'>
      <div className='card-container'>
        <div className="img">
          <img src={props.imagePath} alt='상품 이미지입니다.' />
          <div className='d-day'>{props.closingTime}</div>
          <div className='count'> ♥︎{props.count} </div>
        </div>

        <div className='info'>
          <div className="title">
            {props.productName}
          </div>
          <div className='price'>
            {props.currentPrice}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;
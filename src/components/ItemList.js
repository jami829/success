import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components
import Item from '../view/Item';

function ItemList() {
  const [itemInfo, setItemInbfo] = useState([]);

  useEffect(() => {
    axios.get("https://rest.dealink.co.kr/auction/group/2?page=0&size=3&sort=createdDate,desc")
      .then((res) => {
        console.log('res', res)
      })
      .catch((err) => {
        console.log('err', err)
      })
  })

  return (
    <div>
      asdf
      <Item />
    </div>
  )
}

export default ItemList;
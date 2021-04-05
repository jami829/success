import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components
import Item from '../view/Item';

function ItemList() {
  const [itemInfo, setItemInfo] = useState([]);

  useEffect(() => {
    axios.get("https://rest.dealink.co.kr/auction/group/2?page=0&size=3&sort=createdDate,desc")
      .then((res) => {
        // console.log('res', res)
        setItemInfo(res.data);
      })
      .catch((err) => {
        console.log('err', err.response.data)
      })
  }, []);

  console.log("itemInfo", itemInfo);

  return (
    <div>

      {itemInfo.map((item, idx) => <Item
        key={idx}

        // item={item}
        imagePath={item.imagePath}
        productName={item.productName}
        currentPrice={item.currentPrice} // 경매 현재가로 각 카드에 가격 표시
        count={item.count} // 찜한 사람 수, 좋아요 표시로 출력
      />)}

    </div>
  )
}

export default ItemList;
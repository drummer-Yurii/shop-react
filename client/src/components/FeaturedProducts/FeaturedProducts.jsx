import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';
import axios from 'axios';

const FeaturedProducts = ({ type }) => {
  // const data = [
  //   {
  //     id: 1,
  //     img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     title: 'Long Sleeve Graphic T-shirt',
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 2,
  //     img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     title: 'Coat',
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 3,
  //     img: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     title: 'Skirt',
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 4,
  //     img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     title: 'Hat',
  //     oldPrice: 19,
  //     price: 12,
  //   },
  // ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*", 
          {
            headers: { 
              Authorization: "bearer" + process.env.REACT_APP_API_TOKEN, 
            },
        });
        setData(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum architecto quos esse
          voluptatem tempore, aliquid asperiores eveniet ratione delectus optio numquam quaerat et
          vero error ab? Debitis iste mollitia nisi?
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

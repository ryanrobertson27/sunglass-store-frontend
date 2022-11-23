import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetSunglassBrandsQuery } from '../services/sunglasses';

const SideBar = () => {
  const [brands, setBrands] = useState([]);

  const { data, error, isLoading } = useGetSunglassBrandsQuery();

  let content;

  if (error) {
    content = <div>Error</div>;
  }
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (data) {
    content = (
      <>
        <div>Brands</div>
        <ul className="w-full">
          {data.map((brand) => (
            <li key={brand.id} className="border w-full p-2">
              <Link to={brand.id}>{brand.name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return <div className="flex flex-col w-48 border-r items-center bg-white">{content}</div>;
};

export default SideBar;

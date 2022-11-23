import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSunglassProductsByBrandQuery, useAddProductToCartMutation } from '../services/sunglasses';

const BrandModels = () => {
  const { brandId } = useParams();
  const { data, error, isLoading } = useGetSunglassProductsByBrandQuery(brandId);
  const [addProduct] = useAddProductToCartMutation();

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
        {data.map((product) => (
          <div key={product.id} className="w-80 m-4 flex h-fit flex-col shadow-md bg-white">
            <div className="p-5 flex flex-col items-center">
              <img className="w-2/3" src={product.imageUrls[0]} alt="main-sunglass-img" />
              <div className="my-2 text-lg font-semibold">{product.name}</div>
              <div className="font-light">{product.description}</div>
              <div className="">{`$${product.price}`}</div>
            </div>
            <button
              type="button"
              onClick={() => addProduct(product)}
              className="bg-orange-400 text-white text-center py-1 font-light"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </>
    );
  }

  return <div className="flex flex-1 flex-wrap items-start justify-start h-fit">{content}</div>;
};

export default BrandModels;

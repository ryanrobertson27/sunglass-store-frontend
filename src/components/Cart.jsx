import { useEffect } from 'react';
import { useGetCartQuery, useClearCartMutation } from '../services/sunglasses';
import CartItem from './CartItem';

const Cart = () => {
  const { data, error, isLoading } = useGetCartQuery();
  const [clearCart] = useClearCartMutation();

  useEffect(() => {
    console.log(data);
  });

  let content;

  if (error) {
    content = <div>Error...</div>;
  }
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (data) {
    content = <CartItem data={data} />;
  }

  return (
    <div className="flex flex-col w-80 bg-white p-4">
      <div>{content}</div>
      <button type="button" className="bg-green-500 text-white p-2 my-1">
        Checkout
      </button>
      <button onClick={() => clearCart()} type="button" className="bg-red-500 text-white p-2">
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;

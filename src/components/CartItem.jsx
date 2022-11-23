const CartItem = ({ data }) => (
  <div className="flex flex-col items-center">
    {data.map((item, idx) => (
      <div key={idx} className="flex justify-between border-b w-full px-2 py-3 last:mb-4">
        <div>
          <img className="w-8" src={item.imageUrls[0]} alt="product-img" />
        </div>
        <div>{item.name}</div>
        <div className="font-semibold">{`$${item.price}`}</div>
      </div>
    ))}
  </div>
);

export default CartItem;

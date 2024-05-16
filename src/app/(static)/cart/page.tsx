import Cart from "@/components/cart/Cart";
import Wrapper from "@/components/wrapper/Wrapper";

const CART_DATA = {
  stores: [
    {
      id: 1,
      name: "Apple Offical Store",
      items: [
        {
          id: 1,
          slug: "iphone-15-pro-max-12345",
          name: "Iphone 15 Pro Max",
          variant: {
            id: 1,
            price: 30990000,
            image:
              "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
            attributeValue: "Titan Xanh - 256GB",
            quantity: 11,
          },
          cartQuantity: 1,
        },
        {
          id: 1,
          slug: "iphone-15-pro-max-12345",
          name: "Iphone 15 Pro Max",
          variant: {
            id: 2,
            price: 29990000,
            image:
              "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
            attributeValue: "Titan Trắng - 256GB",
            quantity: 10,
          },
          cartQuantity: 2,
        },
      ],
    },
    {
      id: 2,
      name: "Samsung Offical Store",
      items: [
        {
          id: 5,
          slug: "samsung-galaxy-s24-5gg",
          name: "Samsung Galaxy S24 5G",
          variant: {
            id: 1,
            price: 20690000,
            image:
              "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
            attributeValue: "",
            quantity: 12,
          },
          cartQuantity: 1,
        },
      ],
    },
  ],
  totalItems: 4,
};

const CartPage = () => {
  return (
    <Wrapper disableScroll={true}>
      <Cart data={CART_DATA} />
    </Wrapper>
  );
};

export default CartPage;

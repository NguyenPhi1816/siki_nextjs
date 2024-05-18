import Cart from "@/components/cart/Cart";
import Wrapper from "@/components/wrapper/Wrapper";
import { ICart } from "@/types/cart";

const CART_DATA: ICart[] = [
  {
    id: 1,
    product: {
      id: 1,
      name: "Iphone 15 Pro Max",
      price: 30990000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
      productAttributeValues: "Titan Xanh - 256GB",
      quantity: 10,
      store: {
        id: 1,
        name: "Apple Offical Store",
      },
    },
    quantity: 1,
    isSelected: false,
  },
  {
    id: 2,
    product: {
      id: 1,
      name: "Iphone 15 Pro Max",
      price: 29990000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-white-thumbnew-600x600.jpg",
      productAttributeValues: "Titan Trắng - 256GB",
      quantity: 10,
      store: {
        id: 1,
        name: "Apple Offical Store",
      },
    },
    quantity: 2,
    isSelected: false,
  },
  {
    id: 3,
    product: {
      id: 5,
      name: "Samsung Galaxy S24 5G",
      price: 20690000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-yellow-thumb-600x600.png",
      productAttributeValues: "",
      quantity: 10,
      store: {
        id: 2,
        name: "Samsung Offical Store",
      },
    },
    quantity: 1,
    isSelected: false,
  },
];

const CartPage = () => {
  return (
    <Wrapper disableScroll={true}>
      <Cart data={CART_DATA} />
    </Wrapper>
  );
};

export default CartPage;

import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch('products.json');
  const products = await loadedProducts.json();

  // if cart data is in database, you have use async await
  const storedCart = getShoppingCart();
  const savedCart = [];

  for(const id in storedCart){
    const   adddedProduct = products.find(pd => pd.id === id);
    if(adddedProduct){
      const quantity = storedCart[id];
      adddedProduct.quantity = quantity;
      savedCart.push(adddedProduct);
    }
  }

  //  if you need to send two things;
  // return [product, saveCart];
  // another options
  // return {products, cart: savedCart}

  return savedCart;
}
export default cartProductsLoader;
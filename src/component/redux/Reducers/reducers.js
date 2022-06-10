const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.playload;
  switch (action.type){
    case ADDCART:
    const exist = state.find((x) => x.id === product.id )
    break;
    default:

      break;
  }
}

export default handleCart;

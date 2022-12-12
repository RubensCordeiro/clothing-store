const addItemToCart = (cartItemList, itemToAdd) => {
  const foundItem = cartItemList.find((item) => item.name === itemToAdd.name);
  let updatedCart = [];

  if (foundItem) {
    foundItem.quantity += 1;
    updatedCart = cartItemList.map((item) =>
      item.name === itemToAdd.name ? foundItem : item
    );
  } else {
    itemToAdd.quantity = 1;
    updatedCart = [...cartItemList, itemToAdd];
  }

  return updatedCart;
};

const removeItemFromCart = (cartItemList, itemToRemove) => {
  const foundItem = cartItemList.find(
    (item) => item.name === itemToRemove.name
  );
  let updatedCart = [];

  if (foundItem.quantity >= 2) {
    foundItem.quantity -= 1;
    updatedCart = cartItemList.map((item) =>
      item.name === itemToRemove.name ? foundItem : item
    );
  } else {
    updatedCart = cartItemList.filter(
      (item) => item.name !== itemToRemove.name
    );
  }

  return updatedCart;
};

const cartItemReducer = (cartItemList, action) => {
  const { type, payload } = action;
  const itemToUpdate = payload.itemToUpdate;
  let updatedCart = [];

  switch (type) {
    case "ADD_ITEM":
      updatedCart = addItemToCart(cartItemList, itemToUpdate);
      break;
    case "REMOVE_ITEM":
      updatedCart = removeItemFromCart(cartItemList, itemToUpdate);
      break;
    case "DELETE_ITEM":
      updatedCart = cartItemList.filter(
        (item) => item.name !== itemToUpdate.name
      );
      break;
    default:
      throw Error("Action not mapped for the cartItem");
  }

  return updatedCart;
};

export default cartItemReducer;

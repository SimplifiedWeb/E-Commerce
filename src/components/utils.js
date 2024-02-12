export const storingDataOnLocalStorage = (state, key, newItem, stateKey) => {
  let store = Array.isArray(state[stateKey])
    ? state[stateKey]
    : JSON.parse(localStorage.getItem(key)) || [];

  let isElementExists = store.some((item) => item.id === newItem.id);

  if (stateKey === "storeAddWishList" && isElementExists) {
    // If it's the wishlist and the element exists, remove it
    const updatedList = store.filter((item) => item.id !== newItem.id);
    localStorage.setItem(key, JSON.stringify(updatedList));
  } else if (stateKey === "addToCartStore" && isElementExists) {
    return;
  } else {
    // If it's not the wishlist or the element doesn't exist, add it
    const updatedList = [...store, newItem];
    localStorage.setItem(key, JSON.stringify(updatedList));
  }
};

export const removeElementsFromLocalStorage = (
  state,
  key,
  removeId,
  stateKey
) => {
  const store = Array.isArray(state[stateKey]) ? state[stateKey] : [];
  const storedItems = JSON.parse(localStorage.getItem(key)) || [];

  const updatedStore = storedItems.filter((_, index) => index !== removeId);

  localStorage.setItem(key, JSON.stringify(updatedStore));
};

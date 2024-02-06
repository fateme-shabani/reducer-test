export const reducer = (currentProduct, action) => {
  switch (action.type) {
    case "add":
      return [
        ...currentProduct,
        {
          id: Date.now(),
          name: action.payload.name,
          price: action.payload.p,
          isActive: false,
        },
      ];
    case "change-activity":
      return currentProduct.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, isActive: !item.isActive };
        }
        return item;
      });
    case "delete":
      return currentProduct.filter((item) => {
        return item.id !== action.payload.id
      });
    default:
      currentProduct;
  }
};

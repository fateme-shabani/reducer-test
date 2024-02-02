export const reducer = (currentProduct, action) => {
  switch (action.type) {
    case "add":
      return [
        ...currentProduct,
        {
          id: new Date(),
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
      })
      default :
      currentProduct
  }
};

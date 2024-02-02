export const reducer = (currentProduct, action) => {
  switch (action.type) {
    case "add":
      return [
        ...currentProduct,
        {
          id: new Date(),
          name: action.payload.name,
          price: action.payload.p,
          isActive:false
        },
      ];
  }
};

const calculateTotalAmount = (products) => {
  const totalAmount = products.reduce(
    (prev, product) => prev + product.price,
    0
  );
  return totalAmount;
};

export default calculateTotalAmount;

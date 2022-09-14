interface Order {
  id?: number,
  userId: string,
  productIds: number[],
}
    
export default Order;
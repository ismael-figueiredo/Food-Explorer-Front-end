export function aggregateOrdersByName(orders) {
  const aggregatedOrders = {}

  orders.forEach((order) => {
    if (aggregatedOrders[order.name]) {
     
      aggregatedOrders[order.name].amount += order.amount
      aggregatedOrders[order.name].totalPrice += order.price * order.amount
    } else {
      
      aggregatedOrders[order.name] = {
        ...order,
        totalPrice: order.price * order.amount,
      }
    }
  })

 Object.values(aggregatedOrders).forEach((order) => {
   order.totalPrice = parseFloat(order.totalPrice.toFixed(2))
 })

 return Object.values(aggregatedOrders) 
}

import { createContext, useContext, useState, useEffect } from "react"

export const OrdersContext = createContext({})

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem("@FoodExplorer:orders")
    return storedOrders ? JSON.parse(storedOrders) : []
  })

  useEffect(() => {
    localStorage.setItem("@FoodExplorer:orders", JSON.stringify(orders))
  }, [orders])

  function addOrder(newOrder) {
    setOrders((prevOrders) => [...prevOrders, newOrder])
  }

  function removeOrder(orderId) {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    )
  }

  function clearOrders() {
    setOrders([])
  }

  return (
    <OrdersContext.Provider
      value={{ orders, addOrder, removeOrder, clearOrders }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

export function useOrders() {
  const context = useContext(OrdersContext)

  return context
}

import React from "react"
import { useOrders } from "../../hooks/orders"
import { Container, OrderContainer } from "./styles"
import { aggregateOrdersByName } from "../../utils/aggregateOrdersByName"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"

export function Orders() {
  const { orders, removeOrder } = useOrders()
  const aggregatedOrders = aggregateOrdersByName(orders)

  const navigate = useNavigate()
  const totalOrderPrice = aggregatedOrders
    .reduce((total, order) => total + order.totalPrice, 0)
    .toFixed(2)

  return (
    <Container>
      <h1>Meu pedido</h1>
      {aggregatedOrders.length > 0 ? (
        <>
          <ul>
            {aggregatedOrders.map((order) => (
              <OrderContainer key={order.name}>
                <img src={order.image} alt={`Imagem do item ${order.name}`} />
                <div>
                  <div>
                    <h3>{`${order.amount}X ${order.name}`}</h3>
                    <p>{order.description}</p>
                    <span>{` R$ ${order.totalPrice}`}</span>
                  </div>
                  <button onClick={() => removeOrder(order.id)}>Excluir</button>
                </div>
              </OrderContainer>
            ))}
          </ul>
          <div>
            <h3>Total: R$ {totalOrderPrice}</h3>

            <Button title={"Avançar"} />
          </div>
        </>
      ) : (
        <h2>Nenhum pedido encontrado.</h2>
      )}
    </Container>
  )
}

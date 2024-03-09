import { useOrders } from "../../hooks/orders"
import { useAlert } from "../../hooks/alert"
import { Container, OrderContainer } from "./styles"
import { aggregateOrdersByName } from "../../utils/aggregateOrdersByName"
import { Button } from "../../components/Button"

export function Orders() {
  const { orders, removeOrder } = useOrders()
  const aggregatedOrders = aggregateOrdersByName(orders)
  const { showAlert } = useAlert()

  function handleRemoveOrder(id) {
    removeOrder(id)
    showAlert("removido com sucesso", "success")
  }
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
                  <button onClick={() => handleRemoveOrder(order.id)}>
                    Excluir
                  </button>
                </div>
              </OrderContainer>
            ))}
          </ul>
          <div>
            <h3>Total: R$ {totalOrderPrice}</h3>

            <Button
              title={"Avançar"}
              onClick={() =>
                alert(
                  `Aplicação em versão demo! Para mais detalhes entre em contato (48) 9880-20536.`
                )
              }
            />
          </div>
        </>
      ) : (
        <h2>Nenhum pedido encontrado.</h2>
      )}
    </Container>
  )
}

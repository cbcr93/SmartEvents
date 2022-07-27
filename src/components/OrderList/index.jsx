import { Container, ContainerDetail } from "./styles";
import ticket from "../../assets/img/ticket.png";

const OrderList = ({ product }) => {
  return (
    <Container>
      <img src={ticket} alt={product.title} />
      <hr />
      <ContainerDetail>
        <h3>{product.ticket.title}</h3>
        <h4>{product.ticket.category}</h4>
        <p>{product.ticket.description}</p>
        {product.isPaid ? (
          <h5>Compra Confirmada</h5>
        ) : (
          <h5>Aguardando Confirmação</h5>
        )}

        <span> Quantidade: {product.amountBuy} - </span>
        <span>
          {" "}
          Total gasto:
          {(product.ticket.price * product.amountBuy).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </ContainerDetail>
    </Container>
  );
};
export default OrderList;

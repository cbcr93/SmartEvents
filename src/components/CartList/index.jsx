import {
  Container,
  ContainerCart,
  ContainerHeader,
  ContainerTotal,
  ContainerLinerButtom,
  ContainerProduct,
} from "./styles";
import CardCart from "../CardCart";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

function CartList() {
  const cart = useSelector((store) => store.cart);
  const history = useHistory();

  return cart.length === 0 ? (
    Redirect("/dashboard")
  ) : (
    <Container>
      <ContainerCart>
        <ContainerHeader>
          <h4>Produto</h4>
          <h4>Preço</h4>
        </ContainerHeader>
        <ContainerProduct>
          {cart.map((produto, index) => (
            <>
              <hr />
              <CardCart key={index} product={produto} />
            </>
          ))}
        </ContainerProduct>
        <ContainerLinerButtom />
      </ContainerCart>
      <ContainerTotal>
        <h3>Resumo do Pedido</h3>
        <ContainerHeader>
          <p>{cart.length} itens</p>
          <p>
            {cart
              .reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue.price,
                0
              )
              .toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}{" "}
          </p>
        </ContainerHeader>
        <button onClick={() => {}}>Finalizar pedido</button>
        <ContainerLinerButtom />
      </ContainerTotal>
    </Container>
  );
}

export default CartList;

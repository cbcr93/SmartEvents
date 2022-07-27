import {
  Container,
  ContainerCart,
  ContainerHeader,
  ContainerTotal,
  ContainerLinerButtom,
  ContainerProduct,
} from "./styles";
import CardCart from "../CardCart";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  OrderThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

function CartList() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const { token, isSeller } = useSelector((store) => store.user);

  const getOut = () => {
    cart.map((item) => {
      dispatch(removeFromCartThunk(item));
    });
  };

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
          {cart.map((produto) => (
            <>
              <hr />
              <CardCart product={produto} />
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
                  previousValue + Number(currentValue.price),
                0
              )
              .toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}{" "}
          </p>
        </ContainerHeader>
        <button
          onClick={() => {
            dispatch(OrderThunk(cart[0], cart.length, token, isSeller));
            getOut();
          }}
        >
          Finalizar pedido
        </button>

        <button
          onClick={() => {
            getOut();
          }}
        >
          Voltar
        </button>
        <ContainerLinerButtom />
      </ContainerTotal>
    </Container>
  );
}

export default CartList;

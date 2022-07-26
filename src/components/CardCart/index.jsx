import { Container, ContainerTotal } from "./styles";
import { useDispatch } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";

function CardCart({ product }) {
  const dispatch = useDispatch();
  return (
    <Container>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <ContainerTotal>
        <span>
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => dispatch(removeFromCartThunk(product))}>
          Remover
        </button>
      </ContainerTotal>
    </Container>
  );
}
export default CardCart;

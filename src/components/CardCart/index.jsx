import { Container, ContainerTotal } from "./styles";
import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";
import ticket from "../../assets/img/ticket.png";

function CardCart({ product }) {
  const dispatch = useDispatch();
  return (
    <Container>
      <img src={ticket} alt={product.name} />
      <ContainerTotal>
        <h4>{product.title}</h4>
        <h5>{product.category}</h5>
        <h5>{product.description}</h5>
      </ContainerTotal>
      <ContainerTotal>
        <span>
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => dispatch(addToCartThunk(product))}>
          Acidionar
        </button>

        <button onClick={() => dispatch(removeFromCartThunk(product))}>
          Remover
        </button>
      </ContainerTotal>
    </Container>
  );
}
export default CardCart;

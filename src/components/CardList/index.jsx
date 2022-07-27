import { Container, ContainerDetail } from "./styles";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import ticket from "../../assets/img/ticket.png";
import { useHistory } from "react-router-dom";
const CardList = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Container>
      <img src={ticket} alt={product.title} />
      <hr />
      <ContainerDetail>
        <h3>{product.title}</h3>
        <h4>{product.category}</h4>
        <p>{product.description}</p>
        <span>
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </ContainerDetail>
      <button
        onClick={() => {
          dispatch(addToCartThunk(product));
          history.push("/cart");
        }}
      >
        Mais informações
      </button>
    </Container>
  );
};
export default CardList;

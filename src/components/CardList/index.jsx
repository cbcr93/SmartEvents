import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import { toast } from "react-toastify";
const CardList = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <img src={product.image} alt={product.name} />
      <hr />
      <h3>{product.name}</h3>
      <span>
        {product.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <button
        onClick={() => {
          toast.success("Produto adicionado ao carrinho!");
          dispatch(addToCartThunk(product));
        }}
      >
        Adicionar ao carrinho
      </button>
    </Container>
  );
};
export default CardList;

import { Container, ContainerDetail } from "./styles";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import ticket from "../../assets/img/ticket.png";
import { useHistory } from "react-router-dom";
import TransitionsModal from "../Modal";
import { Button } from "@mui/material";
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
      <TransitionsModal ticketTrue={false} text={"Mais Informações"}>
        <h3>{product.title}</h3>
        <h4>Categoria: {product.category}</h4>
        <p>Descrição: {product.description}</p>
        <p>
          {" "}
          Preço:
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, background: "#fd377e", color: "#fff" }}
          onClick={() => {
            dispatch(addToCartThunk(product));
            history.push("/cart");
          }}
        >
          Ir para compra
        </Button>
      </TransitionsModal>
    </Container>
  );
};
export default CardList;

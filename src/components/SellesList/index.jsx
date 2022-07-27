import {
  Container,
  ContainerDetail,
  ContainerMap,
  ContainerOrder,
} from "./styles";
import ticket from "../../assets/img/ticket.png";
import TransitionsModal from "../Modal";
import { FaRegCheckCircle } from "react-icons/fa";

import { CgBlock } from "react-icons/cg";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateTicketThunk } from "../../store/modules/users/thunck";

const SellesList = ({ product }) => {
  const dispatch = useDispatch();
  const { token, userId } = useSelector((store) => store.user);

  return (
    <Container>
      <img src={ticket} alt={product.title} />
      <hr />
      <ContainerDetail>
        <h3>{product.title}</h3>
        <h4>{product.category}</h4>
        <p>{product.description}</p>
        {product.orders.find((item) => item.isPaid === false) ? (
          <h5>Aguardando Confirmação</h5>
        ) : (
          <h5>Compras Confirmadas</h5>
        )}

        <span> Quantidade: {product.orders.length} - </span>
        <span>
          {" "}
          Total ganho:
          {(product.price * product.orders.length).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </ContainerDetail>
      <TransitionsModal>
        <ContainerOrder>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <ContainerMap>
            {product.orders.map((item, index) => (
              <>
                <hr />
                <p>
                  Quantidade: {item.amountBuy} - Criado:{" "}
                  {item.createdAt.split("T")[0]}
                </p>
                <section>
                  <p>
                    Pago: {item.isPaid ? <FaRegCheckCircle /> : <CgBlock />}{" "}
                  </p>
                  {!item.isPaid ? (
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        dispatch(updateTicketThunk(item.id, token, userId));
                      }}
                    >
                      Check
                    </Button>
                  ) : (
                    <></>
                  )}
                </section>
              </>
            ))}
          </ContainerMap>
        </ContainerOrder>
      </TransitionsModal>
    </Container>
  );
};
export default SellesList;

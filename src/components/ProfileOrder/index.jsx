import { useSelector } from "react-redux";
import OrderList from "../OrderList";
import { Container, ContainerCards } from "./styles";

function ProfileOrder() {
  const { orders } = useSelector((store) => store.user);

  return (
    <Container>
      <h2>Pedidos</h2>
      <ContainerCards>
        {orders[0].ticket ? (
          orders.map((item, index) => (
            <>
              <OrderList key={index} product={item} />
            </>
          ))
        ) : (
          <>Not Found 404</>
        )}
      </ContainerCards>
    </Container>
  );
}

export default ProfileOrder;

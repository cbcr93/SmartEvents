import { useState } from "react";
import { useSelector } from "react-redux";
import OrderList from "../OrderList";
import { Container, ContainerCards } from "./styles";

function ProfileOrder() {
  const { orders } = useSelector((store) => store.user);
  const [order] = useState(orders);

  return (
    <Container>
      <h2>Pedidos</h2>
      <ContainerCards>
        {order.map((item, index) => (
          <OrderList key={index} product={item} />
        ))}
      </ContainerCards>
    </Container>
  );
}

export default ProfileOrder;

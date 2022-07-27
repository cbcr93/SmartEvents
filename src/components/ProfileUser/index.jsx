import { Button } from "@mui/material";
import { useSelector } from "react-redux";

import { Container } from "./styles";

function ProfileInfo() {
  const { user, ticket, orders, isSeller } = useSelector((state) => state.user);

  return (
    <>
      <Container>
        <h3>{user.username}</h3>
        <hr />

        <h4>
          <strong>Nome:</strong> {user.name}
        </h4>
        <h4>
          <strong>Email:</strong> {user.email}
        </h4>
        <h4>
          <strong>Compras nesse canal:</strong> {orders.length}
        </h4>

        {isSeller ? (
          <h4>
            <strong>Tickets nesse canal:</strong> {ticket.length}
          </h4>
        ) : (
          <h4></h4>
        )}

        <Button onClick={() => {}}>Alterar informaçõe</Button>
      </Container>
    </>
  );
}

export default ProfileInfo;

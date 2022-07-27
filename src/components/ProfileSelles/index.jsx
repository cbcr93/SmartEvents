import { useState } from "react";
import { useSelector } from "react-redux";
import SellesList from "../SellesList";
import { Container, ContainerCards } from "./styles";

function ProfileSelles() {
  const { ticket } = useSelector((store) => store.user);
  const [tickets] = useState(ticket);

  return (
    <Container>
      <h2>Pedidos</h2>
      <ContainerCards>
        {tickets.map((item, index) => (
          <SellesList key={index} product={item} />
        ))}
      </ContainerCards>
    </Container>
  );
}

export default ProfileSelles;

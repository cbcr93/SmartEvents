import { useState } from "react";
import { useSelector } from "react-redux";
import SellesList from "../SellesList";
import { Container, ContainerCards } from "./styles";
import TransitionsModal from "../Modal";
import RegisterTicket from "../RegisterTicket";

function ProfileSelles() {
  const { ticket } = useSelector((store) => store.user);
  const [tickets] = useState(ticket);

  return (
    <Container>
      <section>
        <h2>Pedidos</h2>

        <TransitionsModal test={"N"} ticketTrue={true}>
          <RegisterTicket />
        </TransitionsModal>
      </section>
      <ContainerCards>
        {tickets.map((item, index) => (
          <SellesList key={index} product={item} />
        ))}
      </ContainerCards>
    </Container>
  );
}

export default ProfileSelles;

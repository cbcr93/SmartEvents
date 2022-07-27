import { useState } from "react";
import { useSelector } from "react-redux";
import SellesList from "../SellesList";
import { Container, ContainerCards } from "./styles";
import { FcPlus } from "react-icons/fc";
import { IconButton } from "@mui/material";
import TransitionsModal from "../Modal";
import RegisterTicket from "../RegisterTicket";

function ProfileSelles() {
  const { ticket } = useSelector((store) => store.user);
  const [tickets] = useState(ticket);

  return (
    <Container>
      <section>
        <h2>Pedidos</h2>
        <IconButton
          aria-label="menu"
          onClick={() => {}}
          sx={{
            fontSize: "50px",
            color: "var(--secundary-1)",
          }}
        >
          <FcPlus />
          <TransitionsModal>
            <RegisterTicket />
          </TransitionsModal>
        </IconButton>
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

import { useSelector } from "react-redux";
import CardList from "../CardList";
import { Container, ContainerCards } from "./styles";

function List() {
  const tickets = JSON.parse(localStorage.getItem("@SE:tickets")) || {
    title: "ERRO",
    description: "ERRO",
    price: 0,
    image: "",
    category: "ERRO",
  };

  console.log(tickets);

  const products = [tickets];
  return (
    <Container>
      <ContainerCards>
        {products.map((item, index) => (
          <CardList key={index} product={item} />
        ))}
      </ContainerCards>
    </Container>
  );
}

export default List;

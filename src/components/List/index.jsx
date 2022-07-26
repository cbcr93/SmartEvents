import { useState } from "react";
import { useSelector } from "react-redux";
import CardList from "../CardList";
import Filter from "../Filter";
import { Container, ContainerCards } from "./styles";

function List() {
  const { tickets } = useSelector((state) => state.tickets);
  const [productsFilter, SetProductsFilter] = useState(tickets);

  const products = tickets;

  return (
    <Container>
      <Filter
        productsFilter={productsFilter}
        SetProductsFilter={SetProductsFilter}
      />
      <ContainerCards>
        {productsFilter.map((item, index) => (
          <CardList key={index} product={item} />
        ))}
      </ContainerCards>
    </Container>
  );
}

export default List;

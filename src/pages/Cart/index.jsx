import CartList from "../../components/CartList";
import Header from "../../components/Header";
import { Container } from "./styles";

function Cart() {
  return (
    <Container>
      <Header />
      <CartList />
    </Container>
  );
}

export default Cart;

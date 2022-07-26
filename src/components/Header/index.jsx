import { useHistory } from "react-router-dom";
import { Container, ContainerCart, ContainerHeader } from "./styles";

function Header() {
  const history = useHistory();

  return (
    <ContainerHeader>
      <Container>
        <h3
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          <strong>Smart</strong>Event
        </h3>
        <ContainerCart>
          <button
            onClick={() => {
              history.push("/cart");
            }}
          >
            Carrinho
          </button>
        </ContainerCart>
      </Container>
    </ContainerHeader>
  );
}
export default Header;

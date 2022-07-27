import Header from "../../components/Header";
import ProfileInfo from "../../components/ProfileUser";
import { Container } from "./styles";

function infoProfile() {
  return (
    <Container>
      <Header />
      <ProfileInfo />
    </Container>
  );
}

export default infoProfile;

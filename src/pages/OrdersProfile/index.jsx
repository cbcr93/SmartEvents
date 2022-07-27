import { useSelector } from "react-redux";
import Header from "../../components/Header";
import ProfileOrder from "../../components/ProfileOrder";
import ProfileSelles from "../../components/ProfileSelles";
import { Container } from "./styles";

function OrderProfile() {
  const { isSeller } = useSelector((store) => store.user);
  return (
    <Container>
      <Header />
      {!isSeller ? <ProfileOrder /> : <ProfileSelles />}
    </Container>
  );
}

export default OrderProfile;

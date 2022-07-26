import Container from "./stylesLoadingScreen";
import Lottie from "react-lottie";
import loading from "../../assets/loading/loading.json";

const LoadingScreen = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Lottie options={defaultOptions} height={300} width={320} />
    </Container>
  );
};

export default LoadingScreen;

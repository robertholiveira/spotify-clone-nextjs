import Title from "../Title";
import styles from "./styles.module.scss";

function Welcome({ name }) {
  const getGreting = () => {
    const date = new Date();

    const hours = date.getHours();
    switch (true) {
      case hours < 10:
        return "Bom dia";
      case hours < 18:
        return "Boa tarde";
      default:
        return "Boa noite";
    }
  };

  const getFirstName = () => {
    return name.split(" ")[0];
  };

  return (
    <Title
      className={styles.greeting}
    >{`${getGreting()}, ${getFirstName()}!`}</Title>
  );
}

export default Welcome;

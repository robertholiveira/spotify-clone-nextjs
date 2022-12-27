import useTranslation from "next-translate/useTranslation";

import Title from "../Title";
import styles from "./styles.module.scss";

function Welcome({ name }) {
  const { t } = useTranslation("home");
  const getGreting = () => {
    const date = new Date();

    const hours = date.getHours();
    switch (true) {
      case hours < 12:
        return t("welcome.morning");
      case hours < 18:
        return t("welcome.afternoon");
      default:
        return t("welcome.evening");
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

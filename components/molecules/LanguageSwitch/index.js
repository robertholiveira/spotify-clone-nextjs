import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { setCookie } from "cookies-next";

import styles from "./styles.module.scss";

function LanguageSwitch({ alternativeLayout = false }) {
  const ref = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const { locales = [], locale: currentLocale, asPath, pathname } = useRouter();

  const { t } = useTranslation("common");

  const getTranslatedLocale = (locale) => t(`languages.${locale}`);

  const handleActive = () => {
    setIsActive((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setIsActive]);

  useEffect(persistLocaleCookie, [currentLocale]);
  function persistLocaleCookie() {
    setIsActive(false);
    setCookie("NEXT_LOCALE", currentLocale);
  }

  return (
    <div
      className={`${styles.languageSwitch} ${
        alternativeLayout && styles.alternativeLayout
      }`}
    >
      <span>{t("languageSwitch")}</span>
      <div
        ref={ref}
        className={`${styles.languageSwitchWrapper} ${
          isActive && styles.isActive
        }`}
      >
        <h3>
          <a onClick={handleActive}>{getTranslatedLocale(currentLocale)}</a>
        </h3>
        <ul>
          {locales.map((locale) => {
            if (locale === currentLocale) return null;

            return (
              <li key={locale}>
                <Link href={`/${locale}${pathname}`} locale={locale}>
                  {getTranslatedLocale(locale)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LanguageSwitch;

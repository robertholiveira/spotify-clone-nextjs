import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FastAverageColor } from "fast-average-color";

export const ColorContext = React.createContext();

export const useColor = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const fac = new FastAverageColor();
  const dynamicRoute = useRouter().asPath;

  const [predominantColor, setPredominantColor] = useState("#121212");
  useEffect(() => setPredominantColor("#121212"), [dynamicRoute]);

  const getPredominantColor = async (image) => {
    let colorScheme = await fac.getColorAsync(image);
    setPredominantColor(colorScheme.hex);
  };

  return (
    <ColorContext.Provider
      value={{
        predominantColor,
        setPredominantColor,
        getPredominantColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

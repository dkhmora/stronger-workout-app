import { useEffect, useState } from "react";

type WindowDimension = {
  width: number;
  height: number;
};

export default function useWindowDimension() {
  const [windowDimension, setWindowDimension] = useState<WindowDimension>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension.width < 640;

  return { isMobile, windowDimension };
}

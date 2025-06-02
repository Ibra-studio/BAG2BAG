import { Observer } from "tailwindcss-intersect";
import { useEffect } from "react";

export default function ObserverProvider({ children }) {
  useEffect(() => {
    Observer.start();
  }, []);

  return <>{children}</>;
}

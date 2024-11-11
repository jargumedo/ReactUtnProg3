import { useEffect, useState } from "react";

export const UseEffectComponent = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    console.log("componente montado");

    return () => console.log("componente desmontado");
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <p>{state ? "true" : "false"}</p>
      <button onClick={() => setState(!state)}>Cambiar estado</button>
    </div>
  );
};

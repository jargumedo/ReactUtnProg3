import { AppProduct } from "./components/AppProducts/AppProduct";
import { CounterComponent } from "./components/CounterComponent/CounterComponent";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { MyFirstComponent } from "./components/MyFirstComponent";
import { UseEffectComponent } from "./components/UseEffectComponent/UseEffectComponent";

export const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <AppProduct />
    </div>
  );
};

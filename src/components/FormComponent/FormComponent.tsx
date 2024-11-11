import { useForm } from "../Hooks/useForm";

export const FormComponent = () => {
  const { values, handleChange, resetForm } = useForm({
    email: "",
    nombre: "",
    edad: 0,
  });

  const handleSubmitForm = () => {
    console.log(values);
    resetForm();
  };

  return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
        <input
          value={values.email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={values.nombre}
          name="nombre"
          onChange={handleChange}
          type="text"
          placeholder="Nombre"
        />
        <input
          value={values.edad}
          name="edad"
          onChange={handleChange}
          type="number"
          placeholder="Edad"
        />
      </div>
      <div>
        <button onClick={handleSubmitForm}>Enviar</button>
      </div>
    </div>
  );
};

import { FC } from "react";
import { Card } from "react-bootstrap";

interface ItemProduct {
  precio: number;
  nombre: string;
  imagen: string;
}

interface IPropsListProducts {
  arrItems: ItemProduct[];
}

export const ListProducts: FC<IPropsListProducts> = ({ arrItems }) => {
  console.log(arrItems);

  return (
    <div
      className="p-1 m-3 border rounded d-grid gap-2"
      style={{
        gridTemplateColumns: "repeat(2, 1fr)",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {arrItems.map((item, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.imagen} />
          <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>{item.precio}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

import { FC } from "react";

interface IPropsMyFirstComponent {
  text: string;
  color: string;
}

export const MyFirstComponent: FC<IPropsMyFirstComponent> = ({
  text,
  color,
}) => {
  return (
    <div style={{ color: color }}>
      <h1>{text}</h1>
    </div>
  );
};

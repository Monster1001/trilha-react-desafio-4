import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, id }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} id={id}>{title}</ButtonContainer>;
};

export default Button;

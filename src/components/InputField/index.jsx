import { Container } from "./style";
import { cpf, cep, telefone } from "../../utils/mask";
import { useCallback } from "react";

export function InputField({ mask, title, ...props }) {
  const handleKeyUp = useCallback(
    (e) => {
      if (mask === "cep") {
        return cep(e);
      }
      if (mask === "cpf") {
        return cpf(e);
      }

      if (mask === "telefone") {
        return telefone(e);
      }
    },
    [mask]
  );

  return (
    <Container>
      <label>{title}</label>
      <input {...props} onKeyUp={handleKeyUp} />
    </Container>
  );
}

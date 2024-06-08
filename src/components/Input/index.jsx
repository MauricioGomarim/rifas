
import { Container } from "./style"

export function Input({title, children, ...props }){


    return(
        <Container>
            <label>{title}</label>
            {children}
        </Container>
    )
}
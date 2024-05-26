
import { Container } from "./style"


export function Input({title, children }){
    return(
        <Container>
            <label>{title}</label>
            {children}
        </Container>
    )
}
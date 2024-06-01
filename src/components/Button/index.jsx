import { Container } from "./style"

export function Button({title, icon, children, ...rest}) {
    return (
        <Container {...rest}>
            {icon}{title}
        </Container>
    )
}
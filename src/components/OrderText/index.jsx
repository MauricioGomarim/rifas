import {Container} from "./style";



export function OrderText({title, number, children}){
    return(
        <Container>
            <div className="text-campo">
                <i className="number">{number}</i>
                <span className="title">{title}</span>
            </div>
            {children}
        </Container>
    )
}
import { Form } from "react-bootstrap"

const Input = (props) => {
    return (
        <Form.Group controlId={props.index} key={props.index} className={props.className}>
            {props.label && <Form.Label>{props.label}</Form.Label>}
            <Form.Control 
                id={props.id}
                as={props.as}
                name={props.name}
                placeholder={props.placeholder}
                min={props.min}
                max={props.max}
                value={props.value}
                autoComplete={props.autoComplete}
                onChange={(event) => {
                    (props.setInput) && 
                        (props.setInput(event))
                }}
                onBlur={(e) => {
                    (props.onBlur) && 
                        (props.onBlur(e))
                }}
                onMouseOut={(e) => {
                    (props.onBlur) && 
                        (props.onBlur(e))
                }}/>
        </Form.Group>
    )
}
export default Input;
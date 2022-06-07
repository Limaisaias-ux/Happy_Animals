import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import Menu from "../components/Menu"
import './Login.css';

function Login() {
    return (
        <>
    <Menu />
    <div className="fundo">
        <h1>Fazer Login</h1>
        <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Digite o E-Mail" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Logar
    </Button>
    </Form>
    </div>
    </>
    );
}

export default Login
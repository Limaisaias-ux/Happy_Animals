import React from 'react';
import { Formik } from 'formik'; //npm install formik --save
import * as Yup from 'yup';//npm install -S yup
import { Form, Row, Col, Button } from "react-bootstrap";
import './Login.css';
import { useRef, useEffect } from 'react';
import { useAuth } from '../providers/authProvider';
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";

//const { formik } = Formik;

const schema = Yup.object().shape({
  email: Yup.string().required(),
  pass: Yup.string().min(8, 'Mínimo 8 caracteres')
    .required(),
  terms: Yup.bool().required().oneOf([true], 'Aceite os Termos'),
});

const Login = () => {

  const emailRef = useRef();
  const passRef = useRef();

  const { setIsLogged, setUserLogged, isLogged, userLogged } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    emailRef.current.focus()
  }, [])

    return (
      <>
        <Menu />
        <div className='parede'>
          <Formik
            validationSchema={schema}
            onSubmit={async (values) => {
              const formData = new FormData();
              formData.append('email', values.email);
              formData.append('pass', values.pass);
              fetch(
                "http://localhost/lp2/api/auth/login",
                { method: 'POST', body: formData }
              )
                .then(async (response) => {
                  if (response.status === 200) {
                    let data = await response.json()
                    setIsLogged(true)
                    setUserLogged(data.session)
                    localStorage.setItem('userLogged', JSON.stringify(data.session));
                    navigate('/')
                  } else {
                    let data = await response.json()
                    data?.message
                      ? alert(data.message)
                      : alert('Erro ao Logar!')
                  }
                })
            }}
            initialValues={{
              email: '',
              pass: '',
              terms: false,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <div className='corpo'>
                <h1 className='loname'>Fazer Login</h1>
                <Form noValidate onSubmit={(event) => handleSubmit(event)}>
                  <Row className="mb-3">
                    <Form.Group className='form' as={Col} md="8" controlId="validationFormik02">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        ref={emailRef}
                        onChange={handleChange}
                        isValid={touched.email && !errors.email}
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className='form' as={Col} md="6" controlId='validationFormikpass'>
                      <Form.Label>Senha</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder='Senha'
                        name='pass'
                        value={values.pass}
                        ref={passRef}
                        onChange={handleChange}
                        isInvalid={!!errors.pass}
                      />
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      name="terms"
                      label="Estou de Acordo com as Condições dos Termos "
                      onChange={handleChange}
                      isInvalid={!!errors.terms}
                      feedback={errors.terms}
                      feedbackType="invalid"
                      id="validationFormik0"
                    />
                  </Form.Group>
                  <Button className='blogar' type="submit">Logar</Button>
                </Form>
                <h1>User Logged</h1>
                {isLogged
                  ? (<span>isLogged True</span>)
                  : (<span>isLogged False</span>)
                }
                <br />
                <p>
                  {JSON.stringify(userLogged)}
                </p>
              </div>
            )}
          </Formik>
        </div>
      </>
    );

}



export default Login
import React from 'react';
import { Formik } from 'formik'; //npm install formik --save
import * as Yup from 'yup';//npm install -S yup
import { Form, InputGroup, Row, Col, Button } from "react-bootstrap";
import './Login.css';
import Menu from "../components/Menu"

//const { formik } = Formik;

const schema = Yup.object().shape({
  email: Yup.string().required(),
  pass: Yup.string().min(8,'Mínimo 8 caracteres')
  .required(),
  terms: Yup.bool().required().oneOf([true], 'Aceite os Termos'),
});

function Login() {
  return (
    <>
      <Menu />
    <div className='parede'>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
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
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group className='form' as={Col} md="8" controlId="validationFormik02">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={values.email}
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
            <Button class="buttom" type="submit">Logar</Button>
          </Form>
          </div>
        )}
      </Formik>
    </div>
    </>
  );
}


export default Login
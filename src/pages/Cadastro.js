import React from 'react';
import { Formik } from 'formik'; //npm install formik --save
import * as Yup from 'yup';//npm install -S yup
import { Form, InputGroup, Row, Col, Button } from "react-bootstrap";
import Menu from "../components/Menu"

//const { formik } = Formik;

const schema = Yup.object().shape({
  Name: Yup.string().required(),
  email: Yup.string().required(),
  date: Yup.string().required(),
  cpf: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  cep: Yup.string().required(),
  pass: Yup.string().required(),
  terms: Yup.bool().required().oneOf([true], 'Aceite os Termos'),
});

function Cadastro() {
  return (
    <>
      <Menu />

      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          Name: '',
          email: '',
          date: '',
          cpf: '',
          city: '',
          state: '',
          cep: '',
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
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nome Completo"
                  name="Name"
                  value={values.Name}
                  onChange={handleChange}
                  isValid={touched.Name && !errors.Name}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
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
              <Form.Group as={Col} md="2" controlId="validationFormikdata">
                <Form.Label>D.Nascimento</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="date"
                    placeholder="date"
                    aria-describedby="inputGroupPrepend"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    isInvalid={!!errors.date}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.date}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationFormikcpf">
                <Form.Label>CPF</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="CPF"
                    aria-describedby="inputGroupPrepend"
                    name="cpf"
                    value={values.cpf}
                    onChange={handleChange}
                    isInvalid={!!errors.cpf}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cpf}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik03">
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cidade"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik04">
                <Form.Label>Estado</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Estado"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik05">
                <Form.Label>Cep</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cep"
                  name="cep"
                  value={values.cep}
                  onChange={handleChange}
                  isInvalid={!!errors.cep}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.cep}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="2" controlId='validationFormikpass'>
                <Form.Label>pass</Form.Label>
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
            <Button type="submit">Criar Cadastro</Button>
          </Form>
        )}
      </Formik>

    </>
  );
}


export default Cadastro
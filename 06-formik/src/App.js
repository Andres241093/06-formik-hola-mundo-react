import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox'
import Select from './components/Select'
import Radio from './components/Radio'

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Requerido';
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto';
  }

  if (!values.lastname) {
    errors.lastname = 'Requerido';
  } else if (values.name.length < 5) {
    errors.lastname = 'El apellido es muy corto';
  }

  if(!values.radio){
    errors.radio = 'Requerido';
  }
  return errors;
}
function App() {
  return (
    <Formik
      initialValues={{
        name: '',
        lastname: '',
        email: '',
        checkbox: '',
        select: '',
        radio: ''
      }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name='name' label="Nombre" />
        <br />
        <TextInput name='lastname' label="Apellido" />
        <br />
        <TextInput name='email' label="Email" />
        <br />
        <Checkbox name='checkbox'>
          Aceptar términos y condiciones
        </Checkbox>
        <Select name='select' label="tipo de chancho">
          <option value=''>Seleccione chancho</option>
          <option value='felipe'>Felipe</option>
          <option value='chanchito-feliz'>Chancho feliz</option>
        </Select>
        <br />
        <Radio name='radio' value='chanchito' label='Chanchito'/>
        <Radio name='radio' value='chanchito2' label='Chanchito2'/>
        <ErrorMessage name='radio'/>
        <br />
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;

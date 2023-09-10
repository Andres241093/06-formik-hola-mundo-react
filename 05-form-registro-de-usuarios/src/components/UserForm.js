import Input from './Input'
import Button from './Button'
import useForm from '../hooks/useForm'

const UserForm = ({submit}) => {
    const [form, handleChange, reset] = useForm({
        name: '',
        lastname: '',
        email: ''
      });

      const handleSubmit = (e)=> {
        e.preventDefault();
        submit(form);
        reset();
      }

    return(
        <form onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          name='name'
          placeholder='Nombre'
          onChange={handleChange}
          value={form.name}
        />

        <Input
          label="Apellido"
          name='lastname'
          placeholder='Apellido'
          onChange={handleChange}
          value={form.lastname}
        />

        <Input
          label="Email"
          name='email'
          placeholder='Email'
          onChange={handleChange}
          value={form.email}
        />

        <Button>Enviar</Button>
      </form>
    )
}

export default UserForm
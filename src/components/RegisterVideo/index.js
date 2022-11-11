import React from 'react';
import { StyledRegisterVideo } from './styles';

// Custom Hook
function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues);
  return {
    values,
    handleChange: evento => {
      const value = evento.target.value;
      console.log(value);
      const name = evento.target.name;
      setValues({ ...values, [name]: value });
    },
    clearForm() {
      setValues({});
    }
  };
}

export default function RegisterVideo() {
  // O que precisamos para o form funcionar?
  // pegar os daods que precisam vir do state
  // titulo
  // url do video
  // precisamos ter o on submit no nosso form
  //limpar o formulario apos o sbmit
  const formCadastro = useForm({
    initialValues: {
      titulo: 'Gas Station Simulator - 8 dias sem dormir!',
      url: 'https://www.youtube.com/watch?v=R1d0DyRDG_Q'
    }
  });
  const [formVisivel, setFormVisivel] = React.useState(true);
  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={evento => {
            evento.preventDefault();
            setFormVisivel(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              x
            </button>
            <input
              placeholder="Título do vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL do vídeo"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <img
              src={`${formCadastro.values.url.replace(
                'https://www.youtube.com/watch?v=',
                'https://img.youtube.com/vi/'
              )}/hqdefault.jpg`}
            />

            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}

// [x] falta o botão para adicionar
// [x] modal
// -> [x] precisamos controlar o state
// -> formulario em si

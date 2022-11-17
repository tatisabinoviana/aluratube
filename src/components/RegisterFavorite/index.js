import React from 'react';
import { StyledRegisterFavorite } from './styles';
import { createClient } from '@supabase/supabase-js';

function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: evento => {
      const value = evento.target.value;

      const name = evento.target.name;
      setValues({ ...values, [name]: value });
    },
    clearForm() {
      setValues({});
    }
  };
}

const PROJECT_URL = 'https://okcrnuzmnmqmcpvmpgay.supabase.co';
const PUBLIC_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rY3JudXptbm1xbWNwdm1wZ2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzY5NTAsImV4cCI6MTk4Mzc1Mjk1MH0.T2piVGoEGuT4u1BEHeUuoeQEqmvDHIhE8UvIFy_agzk';
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export default function NewFavoriteButton() {
  const formCadastro = useForm({
    initialValues: {
      name: '',
      url: '',
      thumb: ''
    }
  });
  const [formVisivel, setFormVisivel] = React.useState(false);
  // React.useEffect(() => {
  //   setFormVisivel(formVisivel);
  // }, [formVisivel]);
  return (
    <StyledRegisterFavorite>
      <button className="add-favorite" onClick={() => setFormVisivel(true)}>
        novo
      </button>
      {formVisivel && (
        <form
          onSubmit={evento => {
            console.log(evento);
            evento.preventDefault();
            //Contrato entre o nosso front e o backend
            supabase
              .from('favorito')
              .insert({
                name: formCadastro.values.name,
                url: formCadastro.values.url,
                thumb: formCadastro.values.thumb
              })
              .then(oqueveio => {
                console.log(oqueveio);
              })
              .catch(err => {
                console.log(err);
              });
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
              placeholder="nome ou nickname"
              name="name"
              value={formCadastro.values.name}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL do canal"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="Thumbnail da imagem"
              name="thumb"
              value={formCadastro.values.thumb}
              onChange={formCadastro.handleChange}
            />
            {formCadastro.values.thumb && (
              <img src={formCadastro.values.thumb} />
            )}

            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterFavorite>
  );
}

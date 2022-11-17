import { createClient } from '@supabase/supabase-js';
import React from 'react';
import { StyledRegisterVideo } from './styles';

// get youtube thumbnail from video url
function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split('v=')[1]}/hqdefault.jpg`;
}

//get youtube video id
// function getVideoId(url) {
//   const videoId = url.split('v=')[1];
//   const ampersandPosition = videoId.indexOf('&');
//   if (ampersandPosition !== -1) {
//     return videoId.substring(0, ampersandPosition);
//   }
//   return videoId;
// }

// Custom Hook
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
export default function RegisterVideo() {
  // O que precisamos para o form funcionar?
  // pegar os daods que precisam vir do state
  // titulo
  // url do video
  // precisamos ter o on submit no nosso form
  //limpar o formulario apos o sbmit
  const formCadastro = useForm({
    initialValues: {
      titulo: '',
      url: '',
      playlist: ''
    }
  });
  const [formVisivel, setFormVisivel] = React.useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={evento => {
            evento.preventDefault();

            //Contrato entre o nosso front e o backend
            supabase
              .from('video')
              .insert({
                title: formCadastro.values.titulo,
                url: formCadastro.values.url,
                thumb: getThumbnail(formCadastro.values.url),
                playlist: formCadastro.values.playlist
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
            <input
              placeholder="Categoria do vídeo"
              name="playlist"
              value={formCadastro.values.playlist}
              onChange={formCadastro.handleChange}
            />
            {formCadastro.values.url && (
              <img src={getThumbnail(formCadastro.values.url)} />
            )}

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

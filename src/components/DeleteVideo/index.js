import React from 'react';

import { createClient } from '@supabase/supabase-js';

// function useForm(propsDoForm) {
//   const [values, setValues] = React.useState(propsDoForm.initialValues);
//   return {
//     values,
//     handleChange: evento => {
//       const value = evento.target.value;

//       const name = evento.target.name;
//       setValues({ ...values, [name]: value });
//     },
//     clearForm() {
//       setValues({});
//     }
//   };
// }

const PROJECT_URL = 'https://okcrnuzmnmqmcpvmpgay.supabase.co';
const PUBLIC_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rY3JudXptbm1xbWNwdm1wZ2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzY5NTAsImV4cCI6MTk4Mzc1Mjk1MH0.T2piVGoEGuT4u1BEHeUuoeQEqmvDHIhE8UvIFy_agzk';
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export default async function DeleteVideo(videoId) {
  // const formCadastro = useForm({
  //   initialValues: {
  //     name: 'DevSoutinho',
  //     url: 'https://www.youtube.com/c/DevSoutinho',
  //     thumb:
  //       'https://yt3.ggpht.com/m8Yrqf0Y81L4mZ1Cq7rGnJ4NDHe6729rxiFZvWyy9-xd_Z7Osmza7J8NWpN1axMHcCb1oKJNgA=s88-c-k-c0x00ffffff-no-rj'
  //   }
  // });
  // const [favoritos, setFavoritos] = React.useState();

  try {
    await supabase.from('video').delete().eq('id', videoId);
    window.location.reload();
    // setFavoritos(favorito.filter((favo) => favo.id != itemId));
  } catch (err) {
    console.log(err);
  }
}

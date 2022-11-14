import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = 'https://okcrnuzmnmqmcpvmpgay.supabase.co';
const PUBLIC_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rY3JudXptbm1xbWNwdm1wZ2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzY5NTAsImV4cCI6MTk4Mzc1Mjk1MH0.T2piVGoEGuT4u1BEHeUuoeQEqmvDHIhE8UvIFy_agzk';
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from('video').select('*');
    },
    getAllFavorites() {
      return supabase.from('favorito').select('*');
    }
  };
}

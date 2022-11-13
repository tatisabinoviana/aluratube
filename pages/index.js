import { createClient } from '@supabase/supabase-js';
import React from 'react';
import styled from 'styled-components';
import config from '../config.json';
import { StyledFavorite } from '../src/components/Favorite';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';
import { videoService } from '../src/service/videoService';

function HomePage() {
  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = React.useState('');
  const [playlists, setPlaylists] = React.useState({}); // config.playlists
  // const playlists = {
  //   jogos: []
  // };

  React.useEffect(() => {
    console.log('useEffect');
    service.getAllVideos().then(dados => {
      console.log(dados.data);
      //forma imutável
      const novasPlaylists = { ...playlists };
      dados.data.forEach(video => {
        if (!novasPlaylists[video.playlist]) {
          novasPlaylists[video.playlist] = [];
        }
        novasPlaylists[video.playlist].push(video);
      });
      setPlaylists(novasPlaylists);
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={playlists}>
          Conteúdo
        </Timeline>
        <Favorites favorites={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;

const SyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${({ bg }) => bg});
  height: 230px;
`;
function Header() {
  return (
    <SyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </SyledHeader>
  );
}
function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map(playlistName => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter(video => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map(video => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

function Favorites(props) {
  const favos = props.favorites;

  return (
    <StyledFavorite>
      <section>
        <h2>Favoritos</h2>
        <div>
          {favos.map(favo => {
            return (
              <a key={favo.url} href={favo.url}>
                <div>
                  <span>{favo.name}</span>
                </div>
                <img src={favo.thumb} />
              </a>
            );
          })}
        </div>
      </section>
    </StyledFavorite>
  );
}

import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';
import { StyledFavorite } from '../src/components/Favorite';

const StyledBanner = styled.div`
  height: 230px;
  overflow: hidden;
  width: 100%;
  img {
    width: 100%;
  }
`;

function HomePage() {
  return (
    <>
      <CSSReset />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <Menu />
        <StyledBanner>
          <img src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80" />
        </StyledBanner>
        <Header />
        <Timeline playlists={config.playlists}>Conteúdo</Timeline>
        <Favorites favorites={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;

const SyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
function Header() {
  return (
    <SyledHeader>
      {/* <img src="banner" /> */}
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
function Timeline(props) {
  // console.log('Dentro do componente', props.playlists);
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map(playlistName => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map(video => {
                return (
                  <a href={video.url}>
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
  const favoritesNames = Object.keys(props.favorites);
  console.log(favoritesNames);

  const favos = props.favorites;
  console.log(favos);
  return (
    <StyledFavorite>
      <section>
        <h2>Favoritos</h2>
        <div>
          {favos.map(favo => {
            return (
              <a href={favo.url}>
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

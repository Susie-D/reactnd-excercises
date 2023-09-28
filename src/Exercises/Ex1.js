import { movies, profiles, users } from '../data/index';

export const Ex1 = () => {
  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {profiles.map((profile) => {
          const userName = users[profile.userID].name;
          const favMovieName = movies[profile.favoriteMovieID].name;
          return (
            <li key={profile.id}>
              <p>{`${userName}'s favorite movie is "${favMovieName}."`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ex1;

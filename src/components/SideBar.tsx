
import { GenreProps } from '../models';
import { Button } from '../components/Button';

import '../styles/sidebar.scss';
interface SideBarProps  {
  genres: GenreProps[];
  handleSelectGenreProps: (genreId: number) => void;
  selectedGenreId: number;
}
export function SideBar({genres, handleSelectGenreProps, selectedGenreId}: SideBarProps) {

  return (

    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleSelectGenreProps(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
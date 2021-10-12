import { GenreProps } from '../models';

type HeaderProps = {
  selectedGenre: GenreProps;
};

export function Header({ selectedGenre }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre?.title}</span>
      </span>
    </header>
  );
}
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Tracklist } from "../components/Tracklist/Tracklist";

export const Category = () => {
  const categories = ['Классическая музыка', 'Электронная музыка', 'Рок музыка'];
  const params = useParams();
  const { isLoading, alltracks, tokens, favoriteTracks } = useOutletContext();
  return (
    <Tracklist
      heading={categories[params.category-1]}
      categories={[categories[params.category-1]]}
      items={alltracks}
      favoriteItems={favoriteTracks}
      isLoading={isLoading}
      tokens={tokens}
    />
  );
}
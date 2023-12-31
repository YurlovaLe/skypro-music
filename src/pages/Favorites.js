import { useOutletContext } from "react-router-dom";
import { Tracklist } from "../components/Tracklist/Tracklist";

export const Favorites = () => {
  const { favoriteTracks, isLoading, tokens } = useOutletContext();
  return (
    <Tracklist
      heading="Мои треки"
      items={favoriteTracks}
      favoriteItems={favoriteTracks}
      isLoading={isLoading}
      tokens={tokens}
    />
  );
}
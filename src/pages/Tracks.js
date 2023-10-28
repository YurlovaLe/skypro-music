import { useOutletContext } from "react-router-dom";
import { Tracklist } from "../components/Tracklist/Tracklist";

export const Tracks = () => {
  const { isLoading, alltracks, tokens, favoriteTracks } = useOutletContext();
  return (
    <Tracklist
      heading="Треки"
      items={alltracks}
      favoriteItems={favoriteTracks}
      isLoading={isLoading}
      tokens={tokens}
    />
  );
}
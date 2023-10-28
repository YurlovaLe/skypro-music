import { useContext } from "react";

import { useAddTrackToFavoriteMutation, useDeleteTrackFromFavoriteMutation } from "../services/catalog";
import { UserContext } from "../App";

export function useLikeClick() {
  const { user } = useContext(UserContext);

  const [addFavorite] = useAddTrackToFavoriteMutation();
  const [deleteFavorite] = useDeleteTrackFromFavoriteMutation();
  const handleLikeClick = (isFavorite, trackId) => {
    const callLike = isFavorite ? deleteFavorite : addFavorite;
    callLike({trackId, token: user.access});
  }

  return handleLikeClick;
}

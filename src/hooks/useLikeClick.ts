import { useAddTrackToFavoriteMutation, useDeleteTrackFromFavoriteMutation } from '../services/catalog';
import { useUserContext } from '../App.context';

export function useLikeClick() {
  const { user } = useUserContext();

  const [addFavorite] = useAddTrackToFavoriteMutation();
  const [deleteFavorite] = useDeleteTrackFromFavoriteMutation();
  const handleLikeClick = (isFavorite: boolean, trackId: number) => {
    const callLike = isFavorite ? deleteFavorite : addFavorite;
    callLike({ trackId, token: user.access });
  };

  return handleLikeClick;
}

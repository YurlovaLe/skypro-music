import { useAddTrackToFavoriteMutation, useDeleteTrackFromFavoriteMutation } from '../services/catalog.ts';
import { useUserContext } from '../App.context.tsx';

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

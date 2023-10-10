import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const FAVORITES_TAG = {type: 'favorites', id: 'LIST' };

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/catalog/",
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => "track/all/"
    }),
    getFavoriteTracks: builder.query({
      query: (token) => ({
        url: "track/favorite/all/",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      providesTags: () => [FAVORITES_TAG]
    }),
    addTrackToFavorite: builder.mutation({
      query: ({ trackId, token }) => ({
        url: `track/${trackId}/favorite/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      invalidatesTags: [FAVORITES_TAG]
    }),
    deleteTrackFromFavorite: builder.mutation({
      query: ({ trackId, token }) => ({
        url: `track/${trackId}/favorite/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      invalidatesTags: [FAVORITES_TAG]
    })
  }),
});

export const {
  useGetAllTracksQuery,
  useGetFavoriteTracksQuery,
  useAddTrackToFavoriteMutation,
  useDeleteTrackFromFavoriteMutation,
} = catalogApi;

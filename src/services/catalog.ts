import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GetAllTraksResponse } from '../App.types';

const FAVORITES_TAG = { type: 'favorites' as const, id: 'LIST' };

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://webdev-music-003b5b991590.herokuapp.com/catalog/',
  }),
  tagTypes: ['favorites'],
  endpoints: (builder) => ({
    getAllTracks: builder.query<GetAllTraksResponse, void>({
      query: () => 'track/all',
      transformResponse: ({ data }) => (data),
    }),
    getFavoriteTracks: builder.query<GetAllTraksResponse, string>({
      query: (token) => ({
        url: 'track/favorite/all/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: ({ data }) => (data),
      providesTags: () => [FAVORITES_TAG],
    }),
    addTrackToFavorite: builder.mutation({
      query: ({ trackId, token }) => ({
        url: `track/${trackId}/favorite/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [FAVORITES_TAG],
    }),
    deleteTrackFromFavorite: builder.mutation({
      query: ({ trackId, token }) => ({
        url: `track/${trackId}/favorite/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [FAVORITES_TAG],
    }),
  }),
});

export const {
  useGetAllTracksQuery,
  useGetFavoriteTracksQuery,
  useAddTrackToFavoriteMutation,
  useDeleteTrackFromFavoriteMutation,
} = catalogApi;

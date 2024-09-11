export type TrackType = {
  name: string,
  author: string,
  album: string,
  duration_in_seconds: number,
  id: number,
  genre: string,
  release_date: Date,
  track_file: string
}

export type TracksType = TrackType[];

export type GetAllTraksResponse = Array<Omit<TrackType, 'id' | 'genre'> & {_id: number, genre: string[]}>;

export type UserType = {
  username: string,
  access: string,
  refresh: string,
  id: number,
  email: string,
};

export type UserContextType = {
  user: UserType,
  login: (user: UserType) => void,
  logout: () => void,
  updateUser: ({ access }: {access: string}) => void,
};

export type OutletContextType = {
  isLoading: boolean,
  alltracks: TracksType,
  favoriteTracks: TracksType,
};

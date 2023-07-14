import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const swapiApi = createApi({
    reducerPath: 'swapiApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
    endpoints: (builder) => ({
        getCharacterByName: builder.query({
          query: (characterName) => `people/?search=${characterName}`,
        }),
        getFilm: builder.query({
          query: (filmUrl) => filmUrl.replace('http://', 'https://'),
        }),
        getStarship: builder.query({
          query: (starshipUrl) => starshipUrl.replace('http://', 'https://'),
        }),
    }),
});

export const { useGetCharacterByNameQuery, useGetFilmQuery, useGetStarshipQuery } = swapiApi;
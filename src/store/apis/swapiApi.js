import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const swapiApi = createApi({
    reducerPath: 'swapiApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
    endpoints: (builder) => ({
        getCharactersByName: builder.query({
          query: (characterName) => ({
            url: `people/?search=${characterName}`,
          })
        }),
        getStarShip: builder.query({
          query: (id) => ({
            url: `starships${id}`,
          })
        }),
        getFilm: builder.query({
          query: (id) => ({
            url: `films${id}`,
          })
        }),
        getSpecies: builder.query({
          query: (id) => ({
            url:`species${id}`
          })
        })
    }),
});

export const { 
  useLazyGetCharactersByNameQuery, 
  useGetStarShipQuery, 
  useGetFilmQuery,
  useGetSpeciesQuery 
} = swapiApi;
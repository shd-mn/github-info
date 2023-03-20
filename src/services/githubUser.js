// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
   reducerPath: 'githubApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
   endpoints: (builder) => ({
      getGithubUserByName: builder.query({
         query: (name) => `users/${name}`,
      }),
      getGithubUserByFollowers: builder.query({
         query: (name) => `users/${name}/followers`,
      }),
      getGithubUserByRepos: builder.query({
         query: (name) => `users/${name}/repos?page=1&per_page=100`,
      }),
   }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGithubUserByNameQuery, useGetGithubUserByFollowersQuery, useGetGithubUserByReposQuery } = githubApi
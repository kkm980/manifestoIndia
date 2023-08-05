import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
  id: number;
  name: string;
  email: string; // Changed to string for email
};

// Create a separate API instance with the first base URL
export const userApiWithCustomBaseURL = createApi({
  reducerPath: 'userApiWithCustomBaseURL', // Corrected reducerPath
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    // baseUrl: '/api/others'
    // baseUrl:"https://jsonplaceholder.typicode.com"
  }),
  endpoints: builder => ({
    imageFetch: builder.query<any, any>({
      query: () => 'images' // Corrected query to fetch images
    })
    // getUserById: builder.query<User, { id: string }>({
    //   query: ({ id }) => `users/${id}`,
    // }),
  })
});

// Create another API instance with a different base URL
export const userApi = createApi({
  reducerPath: 'userApi', // Corrected reducerPath
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    // baseUrl: '/api/users/login' // Replace this with your custom base URL
  }),
  endpoints: builder => ({
    getUsers: builder.query<User[], null>({
      query: () => ''
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`
    })
  })
});

// Export the hooks from both API instances
export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
export const {
  useImageFetchQuery: useImageFetchQuery
  // useGetUserByIdQuery: useGetUserByIdCustomURLQuery,
} = userApiWithCustomBaseURL;

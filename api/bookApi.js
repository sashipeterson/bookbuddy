// bookApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API using createApi
export const mainApi = createApi({
    // Unique string used in constructing Redux action types, state selectors, and React hook names
    reducerPath: "mainApi", 

    // Define a base query function that all endpoints will use as the base of their request
    baseQuery: fetchBaseQuery({ 
        baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/"
    }),

    endpoints: (builder) => ({ 
        register: builder.mutation({
            // Define the query for the mutation
            query: ({ email, password }) => ({
                url: 'users/register', // The URL for the registration endpoint
                method: 'POST', // Set the method to POST
                body: { 
                    email, 
                    password 
                }, // The registration data to be sent in the request body
            }),
        }),
        // ... other endpoints
    }),
});

// Export the hook generated by RTK Query for the register mutation
export const { useRegisterMutation } = mainApi;

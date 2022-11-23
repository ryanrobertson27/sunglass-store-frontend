import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sunglassesApi = createApi({
  reducerPath: 'sunglassesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/v1/',
  }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getSunglassBrands: builder.query({
      query: () => `brands`,
    }),
    getSunglassProductsByBrand: builder.query({
      query: (id) => `brands/${id}/products`,
    }),
    getCart: builder.query({
      query: () => `cart`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Cart', id })), { type: 'Cart', id: 'LIST' }]
          : [{ type: 'Cart', id: 'LIST' }],
    }),
    addProductToCart: builder.mutation({
      query: ({ id, payload }) => ({
        url: `cart/${id}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),
    clearCart: builder.mutation({
      query: () => ({
        url: 'cart/clear',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetSunglassBrandsQuery,
  useGetSunglassProductsByBrandQuery,
  useGetCartQuery,
  useAddProductToCartMutation,
  useClearCartMutation,
} = sunglassesApi;

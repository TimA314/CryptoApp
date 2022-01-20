import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://crypto-app-0.herokuapp.com/api/v1";

const createRequest = (url) => url;

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/crypto-app?count=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`crypto-app/details?coinId=${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(
          `/crypto-app/history?coinId=${coinId}&timePeriod=${timePeriod}`
        ),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

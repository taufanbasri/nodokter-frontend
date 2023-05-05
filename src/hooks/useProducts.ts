import { useInfiniteQuery } from "@tanstack/react-query"
import ms from "ms"
import Product from "../entities/Product"
import APIClient, { FetchResponse } from "../services/api-client"

const apiClient = new APIClient<Product>('/products')

const useProducts = () => useInfiniteQuery<FetchResponse<Product>, Error>({
  queryKey: ['products'],
  queryFn: ({ pageParam = 1 }) => apiClient.getAll({
    params: {
      page: pageParam
    }
  }),
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.data.length ? allPages.length + 1 : undefined
  },
  staleTime: ms('3h')
})

export default useProducts
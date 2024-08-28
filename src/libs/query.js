import {QueryClient} from '@tanstack/react-query'

const client = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5*60*1000,
            refetchOnMount: 'always',
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
            retry: 3,
            retryDelay: (attemptIndex) => Math.min(1000*2**attemptIndex, 3000)
        }
    }
})

export {client}
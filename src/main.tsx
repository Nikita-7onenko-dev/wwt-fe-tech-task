import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { QueryClientProvider } from '@tanstack/react-query'

import { filterQueryConfig } from '@/entities/filter'

import './main.css'
import { App } from './pages/Home'
import { queryClient } from './query'
import './shared/i18n'

queryClient.prefetchQuery(filterQueryConfig)

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</StrictMode>
)

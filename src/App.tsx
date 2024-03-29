import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MMKV } from 'react-native-mmkv';
import { ThemeProvider } from '@/theme';
import ApplicationNavigator from './navigators/Application';
import './translations';
import 'fast-text-encoding';

const queryClient = new QueryClient();
export const storage = new MMKV();

const App = () => {
	Object.assign(global, {
		TextEncoder,
		TextDecoder,
		BigInt,
	});
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider storage={storage}>
				<ApplicationNavigator />
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default App;

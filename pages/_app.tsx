import "@/styles/globals.css";
import "react-day-picker/dist/style.css";
import "@/styles/day-picker.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>НЕПЕШКОМ | ПРОКАТ АВТОМОБИЛЕЙ</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
			</Head>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	);
}

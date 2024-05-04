import { Montserrat } from "next/font/google";
import "@/styles/index.scss";
import { config } from "@/helpers/config";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const metadata = {
	title: {
		template: `%s | ${config.project.name}`,
		default: config.project.name,
	},
	description: config.project.description,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={montserrat.variable}>
			<body suppressHydrationWarning={true}>
				<Header />
				{children}
				<Footer/>
			</body>
		</html>
	);
}

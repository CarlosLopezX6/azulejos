import { Geist, Geist_Mono, Inter, Montserrat_Alternates } from "next/font/google";


// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const inter = Inter({ subsets: ["latin"] });

export const titleFont = Montserrat_Alternates({ 
    subsets: ["latin"],
    weight: ["500", "700"]
});

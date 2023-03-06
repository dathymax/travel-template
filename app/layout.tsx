import '../styles/globals.css';
import { Poppins } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Theme from '@/components/Theme';

const inter = Poppins({
    weight: ["300", "400", "500", "600", "700", "800"],
    style: ["normal"],
    subsets: ["latin"]
})

export const metadata = {
    title: 'Travel template',
    description: 'Travel template',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </head>
            <body className={inter.className}>
                <Theme />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}

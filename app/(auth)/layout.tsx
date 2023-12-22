import { FC, PropsWithChildren } from 'react';
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import '../globals.css';

export const metadata = {
    title: 'Threads',
    description: 'Threads app'
};

const interFont = Inter({ subsets: ['latin'] });

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={`${interFont.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}

export default RootLayout;
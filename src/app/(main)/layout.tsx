import '@/env';
import '../../assets/css/styles.css';

import { type ReactNode } from 'react';
import { type Metadata } from 'next';

// import AppContainer from '../../containers/AppContainer';
import { type AllDataType, StoreContainer } from '@/store/store';
import dynamic from 'next/dynamic';

const AppContainer = dynamic(() => import('../../containers/AppContainer'), {
   ssr: false,
});

export const metadata: Metadata = {
   title: 'علیرضا عابدی | توسعه دهنده فول استک',
   viewport: 'width=device-width, initial-scale=1',
   description:
      'به وبسایت شخصی علیرضا عابدی خوش آمدید. من یک توسعه دهنده فول استک هستم که علاقه ی زیادی به برنامه نویسی دارم و دارم سعی میکنم که روز به روز پیشرفت کنم.',
   authors: [
      { name: 'alireza abedi', url: 'https://github.com/AlirezaAbd-dev' },
   ],
   icons: '/favicon.ico',
   openGraph: {
      images: '/src/assets/avatar.jpg',
   },
};

export const revalidate = false;
export const runtime = 'nodejs';

const getAllData = async () => {
   const response = await fetch('http://localhost:3000/api/all', {
      next: { tags: ['data'], revalidate: 3600 },
   });
   const data = await response.json();
   return data as AllDataType;
};

export default async function RootLayout({
   children,
}: {
   children: ReactNode;
}) {
   const data = await getAllData();

   return (
      <html lang='fa'>
         <body dir='rtl'>
            <StoreContainer data={data}>
               <AppContainer>{children}</AppContainer>
            </StoreContainer>
         </body>
      </html>
   );
}

import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';

  
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script src='https:connect.facebook.net/en_US/sdk.js'
                strategy='lazyOnload'
                onLoad={()=>console.log('Script loaded correctly')}
            />
            <Image src='/images/profile.jpg'
                height={144}
                width={144}
                alt='Meshkat'
            />
            <h1>Second Post</h1>
            <h2>
                <Link href='/'>Back to home</Link>
            </h2>
        </Layout>
    ); 
}
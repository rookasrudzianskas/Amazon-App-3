import Head from "next/head";
import Header from "../components/Header";


export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Amazon App || Rookas Rudzianskas</title>
        <link href="https://iconape.com/wp-content/files/mk/33892/svg/amazon-icon-1.svg" rel="icon" type="image/icon" />
        </Head>

      {/* Header */}
      <Header/>


    </div>
  );
}


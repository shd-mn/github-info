import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="h-screen bg-white text-black dark:bg-[#000212] dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

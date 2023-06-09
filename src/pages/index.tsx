import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>CW Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col items-center py-10 w-full max-w-2xl mx-auto">
          <Image
            src="/assets/logo.png"
            width={200}
            height={200}
            alt="CodeWalnut Logo"
          />
          <h1 className="text-2xl font-bold text-center mt-3">
            We're excited to see what you can do! Please read the instructions
            in the README and get started.
          </h1>
        </div>
      </main>
    </>
  );
}

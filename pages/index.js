import { React } from 'react'
import Head from 'next/head'
import { Chart, Course, Nav, Rating, Story } from '../component'

export default function Home() {
  return (
    <>
      <Head>
        <title>Studext | Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
        {/* icon */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

        {/* font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <Nav />
      <div className="mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2">
          <Story />
          <Chart />
        </div>
        <div>
          <Rating />
        </div>
      </div>
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <Course />
      </div>
    </>
  )
}

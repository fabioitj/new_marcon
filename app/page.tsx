import Image from 'next/image'
import Navbar from './components/navbar'
import FirstPage from './components/first_page'
import SecondPage from './components/second_page'
import ThirdPage from './components/third_page'

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <FirstPage/>
      <SecondPage/>
      <hr/>
      <ThirdPage/>
    </main>
  )
}

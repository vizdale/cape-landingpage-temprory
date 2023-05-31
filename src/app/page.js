import { H1 } from '@/common/typography/Heading'
import Image from 'next/image'
import HeroSection from './components/heroSection/HeroSection'
import Navbar from '@/common/navbar/Navbar'
import PrimarySection from './components/primarySection/PrimarySection'
import SecondarySection from './components/secondarySection/SecondarySection'
import TertiarySection from './components/tertiarySection/TertiarySection'


export default function Home() {
  // console.log(Inter)

  return (
    <main className="">
      <Navbar/>
      <HeroSection/>
      <PrimarySection/>
      <SecondarySection/>
      <TertiarySection/>
    </main>
  )
}

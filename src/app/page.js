import { H1 } from '@/common/typography/Heading'
import Image from 'next/image'
import HeroSection from './components/heroSection/HeroSection'
import Navbar from '@/common/navbar/Navbar'
import PrimarySection from './components/primarySection/PrimarySection'
import SecondarySection from './components/secondarySection/SecondarySection'
import TertiarySection from './components/tertiarySection/TertiarySection'
import CtaSection from './components/ctaSection/CtaSection'
import Footer from './components/footer/Footer'
import Calendly from './components/calendly/Calendly'


export default function Home() {
  // console.log(Inter)

  return (
    <main className="">
      <HeroSection/>
      <PrimarySection/>
      <SecondarySection/>
      <TertiarySection/>
      <CtaSection/>
      <Footer/>
      <Calendly/>
    </main>
  )
}

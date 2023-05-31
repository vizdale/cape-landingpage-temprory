import { H1 } from '@/common/typography/Heading'
import { P2 } from '@/common/typography/Paragraph'
import React from 'react'

const CtaSection = () => {
  return (
    <section className='bg-red mb-10'>
        <div className='center-section flex flex-col gap-5'>
        <H1 classes='text-[24px] md:text-[48px] leading-[24px] md:leading-[48px] text-center uppercase'>
        Go on, test our CAPE-abilities! 
        </H1>
        <P2 classes='text-center'>Branding is our superpower, brands are our fuel.</P2>
        <a href = "form" className='bg-black rounded-lg px-16 py-2 w-fit block mx-auto'>
        <H1 classes='text-[24px] leading-[24px]  text-center uppercase py-2'>
        Go on, fill it!
        </H1>
        </a>
        </div>
    </section>
  )
}

export default CtaSection
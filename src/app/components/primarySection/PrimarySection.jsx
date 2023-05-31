import React from 'react'
import Testimonials from './Testimonials'
import Forms from './Forms'
import { p } from '@/common/typography/Paragraph'
import Content from './Content'

const PrimarySection = () => {
  return (
    <section className='bg-red py-32'>
        <div className='center-section flex lg:flex-row flex-col gap-5'>
            <div className='w-full md:w-8/12 mx-auto lg:m-0'>
              <Testimonials/>
              <div>
             <Content/>
              </div>
            </div>
            <aside className='bg-black rounded-xl p-5 w-full md:w-6/12 lg:w-4/12 mx-auto lg:m-0'>
              <Forms/>
            </aside>
        </div>
    </section>
  )
}

export default PrimarySection
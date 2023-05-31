import React from 'react'
const articles = [
    {
        num : 1,
        content : "Our creative team can help your brand stand out."
    },
    {
        num : 2,
        content : "Our growth and strategy team can help us identify the best ways to help you."
    },
    {
        num : 3,
        content : "Our video/production team can make your visions come to life."
    }
]
function Content() {
  return (
    <>
       <p className='my-10 text-[12px] md:text-[18px] ' >
                Get everything from branding and marketing to web and app development done under one roof! We provide the total package to help you stay on top of your digital game. We’re here to help, to the best of our CAPE-abilities.
                </p>
                <div>
                    {articles.map(article => (
                          <article className='flex items-center gap-3 my-5' key = {article.num}>
                          <div className='bg-black h-[24px] w-[24px] md:h-[50px] md:w-[50px] rounded-full flex justify-center items-center font-bold text-[12px] md:text-[20px]'>{article.num}</div>
                          <p className='text-[12px] md:text-[18px]  w-10/12'>{article.content}</p>
                        </article>
                    ))}
                </div>
    </>
  )
}

export default Content
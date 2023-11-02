import React, { useState } from 'react'

function Motivation() {
    const [quote, setQuote] = useState(`"If you want to be happy, 
                                set a goal that commands your thoughts, 
                                liberates your energy and inspires your hopes."`)
    const [author, setAuthor] = useState("— Andrew Carnegie.")

  return (
    <div className='mx-8 my-4 p-2 bg-white border-2 border-black'>
         <div className='text-2xl font-semibold'>{quote}</div>
         <div className='text-2xl italic'>{author}</div>
    </div>
  )
}

export default Motivation
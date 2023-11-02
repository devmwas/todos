import React from 'react'

function Header({tasks}) {
  return (
    <div className='text-4xl p-8 bg-sky-700 text-white'>
        Todos ({tasks.length})
    </div>
  )
}

export default Header
import React from 'react'

function Header({tasks}) {
  return (
    <div className='text-2xl p-6 bg-sky-700 text-white'>
        Todos ({tasks.length})
    </div>
  )
}

export default Header
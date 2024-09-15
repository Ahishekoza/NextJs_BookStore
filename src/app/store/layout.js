import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'



export const metadata ={
    title:'Bookstore - Lend or Buy Books',
    description:'An Online Bookstore to sell and buy books'
}

const BookStoreLayout  = ({children}) => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
        <Sidebar/>
        <div className='flex flex-wrap p-2 justify-center'>
            {children}
        </div>
    </div>
  )
}

export default BookStoreLayout 
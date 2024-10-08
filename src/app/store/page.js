import { getAllBooks } from '@/lib/fake-data'
import React from 'react'
import BookList from '../components/books/BookList'

const BookListPage = () => {
  
  const books  = getAllBooks()
 

  return (
    <div className='w-full'>
      <BookList books={books}/>
    </div>
  )
}

export default BookListPage
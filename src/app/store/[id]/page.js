import BookDetails from '@/app/components/books/BookDetails'
import { getBookById } from '@/lib/fake-data'
import React from 'react'

const BookDetailsPage = ({params:{id}}) => {
    const  book = getBookById(id)
  return (
    <BookDetails book={book}/>
  )
}

export default BookDetailsPage
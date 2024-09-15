import Link from "next/link"

// @TODO:= create a card for Book 
const BookCard = ({book}) => {
  return (
    <Link href={`/store/${book?.id}`}>
      <div>

      </div>
    </Link>
  )
}

export default BookCard
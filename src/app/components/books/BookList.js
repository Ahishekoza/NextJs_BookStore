import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center">
        {books.map((book) => {
          return <BookCard key={book?.id} book={book} />;
        })}
      </div>
    </>
  );
};

export default BookList;

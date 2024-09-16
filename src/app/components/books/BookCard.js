import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddToCart";

// @TODO:= create a card for Book
const BookCard = ({ book }) => {
  return (
    <div className="w-[300px] h-full bg-gray-100 rounded-md">
      <div className="p-2 flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <Link href={`/store/${book?.id}`}>
            <Image
              src={book.cover}
              alt={book.title}
              width={100}
              height={100}
              className="w-[300px] h-[230px]"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-start">
          <span>{book.title}</span>
          <p className="truncate text-slate-500">{book.description}</p>
        </div>
        <div>
          <div className="border border-neutral-300"></div>
          <div className="mt-2">
           <AddToCart book={book}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

"use client";
const BuyRent = ({ book }) => {
  return (
    <div className="flex  flex-col md:flex-row md:w-10/12 lg:w-1/2 gap-2 w-full justify-between items-center p-2 ">
      <div>
        <button className="buttonCommonStyle">
          Buy this book for {book.sellPrice} INR
        </button>
        <p className="text-sm text-gray-700 text-center">
          {book?.sold
            ? `${book?.sold} copies sold already!`
            : `Be the first one to buy this book!`}
        </p>
      </div>
      <div>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Rent this book for {book.rentPrice} INR
        </button>
        <p className="text-sm text-gray-700 text-center">
          {book.isRented
            ? `Rented by ${book?.renterIds?.length} customer already!`
            : `Be the first one to rent this book!`}
        </p>
      </div>
    </div>
  );
};

export default BuyRent;

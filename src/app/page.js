import Link from "next/link";
import backgroundImage from "../../public/home/book-bg.png";
import Image from "next/image";
import { IoSparkles } from "react-icons/io5";


export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <Image
        className="object-cover blur-sm"
        src={backgroundImage}
        alt="Background"
        fill
      />
      <div className="z-10 flex flex-col justify-center items-center bg-purple-100 p-2 rounded-md lg:w-2/5 h-1/4">
        <div className="flex mb-5 pb-5 text-5xl text-purple-700">
          <IoSparkles />
          <p >BookStore</p>
        </div>
        <div>
          <Link href="/store" className="bg-purple-700 text-white rounded-sm p-2">Take me to the Store</Link>
        </div>
      </div>
    </div>
  );
}

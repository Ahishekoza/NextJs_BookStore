import './globals.css'


export const metadata = {
  title: "BookStore",
  description: "A single stop for all readers and writers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className="p-0 m-0 bg-gray-200"
      >
        {children}
      </body>
    </html>
  );
}


import Nav from "@/components/Nav";
import "./globals.css";
import SessionProvider from "@/providers/SessionProvider";
import ChatSupport from "@/components/ChatSupport";

export const metadata = {
  title: "Burgerito",
  description: "Application de commande",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body     className=" p-2 px-14 flex flex-col gap-4">

     <SessionProvider>

      <Nav/>

        {children}

        <ChatSupport/>


     </SessionProvider>

        
        

      </body>
    </html>
  );
}

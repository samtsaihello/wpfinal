import { BiError } from "react-icons/bi";

import { Button } from "@/components/ui/button";

import type { Books } from "@/lib/types/db";

import Book from "./_components/Book"

function DocsPage() {

  const sampleInfo: Books = {
    id: "3jeiofn9eflqwqwjoif", 
    title: "Sample book",
    description: "Sample Description",
    language: "English",
    publicize: false,
    popularity: 0
  };

  return (
    <div className="h-screen w-screen bg-gray-800">
      <div className="flex w-screen">
        <p className="m-6 text-white font-bold text-3xl"> My books </p>
        <Button className="m-6 ml-auto bg-yellow-600 hover:bg-yellow-700 text-black">Create new books</Button>
      </div>
      <div className="flex flex-wrap pl-10">
        <Book info={sampleInfo}></Book>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <BiError className="text-yellow-500" size={80} />
          <p className="text-sm font-semibold text-slate-300">
            Still under development, please wait...
          </p>
        </div>
      </div>
    </div>
  );
}
export default DocsPage;

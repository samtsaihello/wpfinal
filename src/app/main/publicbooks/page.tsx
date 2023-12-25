import { Button } from "@/components/ui/button";

import type { Books } from "@/lib/types/db";

import Book from "./_components/Book"

function DocsPage() {

  const sampleInfo: Books = {
    id: "3jeiofn9eflqwqwjoif", 
    title: "Sample book",
    description: "Sample Description",
    language: "English",
    publicize: true,
    popularity: 0
  };

  return (
    <div className="w-screen">
      <div className="flex w-screen">
        <p className="m-6 text-white font-bold text-3xl"> Public books </p>
        <Button className="m-6 ml-auto bg-yellow-600 hover:bg-yellow-700 text-black">Create new books</Button>
      </div>
      <div className="w-screen flex flex-wrap justify-start">
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
        <Book info={sampleInfo}></Book>
      </div>
    </div>
  );
}
export default DocsPage;

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Words } from "@/lib/types/db";

function BookPage() {
  const bookName = "SAMPLE book name";
  const ___bookId = "sample_book_id";
  const words: Words[] = [
    {
      id: "232",
      content: "Hello",
      meaning: "你好",
      familarity: 0,
    },
    {
      id: "233",
      content: "Hello",
      meaning: "你好",
      familarity: 0,
    },
    {
      id: "234",
      content: "Hello",
      meaning: "你好",
      familarity: 0,
    },
    {
      id: "235",
      content: "Hello",
      meaning: "你好",
      familarity: 0,
    },
    {
      id: "236",
      content: "Hello",
      meaning: "你好",
      familarity: 0,
    },
  ];

  return (
    <div className="w-screen bg-gray-800 text-4xl text-white">
      <div className="flex w-screen">
        <p className="m-6 text-3xl font-bold text-white"> {bookName} </p>
        <Button className="m-6 ml-auto bg-yellow-600 text-black hover:bg-yellow-700">
          Create new word
        </Button>
      </div>
      <div className="m-6">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-slate-800">
              <TableHead>Word</TableHead>
              <TableHead>Meaning</TableHead>
              <TableHead>Familiarity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {words.map((word) => (
              <Link
                key={word.id}
                legacyBehavior={true}
                href={`/main/mybooks/${___bookId}/${word.id}`}
              >
                <TableRow key={word.id} className="border-slate-500">
                  <TableCell className="w-2/5">{word.content}</TableCell>
                  <TableCell className="w-2/5">{word.meaning}</TableCell>
                  <TableCell className="w-1/5">{word.familarity}</TableCell>
                </TableRow>
              </Link>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default BookPage;

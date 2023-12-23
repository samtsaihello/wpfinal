import { BiError } from "react-icons/bi";

import { Button } from "@/components/ui/button";

function DocsPage() {
  return (
    <div className="flex h-[90vh] h-screen w-full items-center justify-center bg-gray-800">
      <Button>Create new books</Button>
      <div className="flex flex-col items-center justify-center">
        <BiError className="text-yellow-500" size={80} />
        <p className="text-sm font-semibold text-slate-300">
          Still under development, please wait...
        </p>
      </div>
    </div>
  );
}
export default DocsPage;

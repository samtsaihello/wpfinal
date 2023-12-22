import { AiFillDelete, AiFillFileAdd, AiFillFileText } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Rubik_Burned } from "next/font/google";

import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { publicEnv } from "@/lib/env/public";

import { createDocument, deleteDocument, getDocuments } from "./actions";

const rubik = Rubik_Burned({ weight:"400", subsets:["latin"]});

async function Navbar() {
  const specialTextStyle = {
    fontFamily: 'YourDesiredFont, sans-serif',
  };

  const session = await auth();
  if (!session || !session?.user?.id) {
    redirect(publicEnv.NEXT_PUBLIC_BASE_URL);
  }
  const userId = session.user.id;
  const documents = await getDocuments(userId);
  return (
    <nav className="flex w-full h-auto bg-gray-700 text-slate-300 p-2">

      {/* align left */}
      <nav className="pl-3 sticky top-0 flex items-center justify-between text-4xl mr-8">
        <p className={rubik.className}>
          QUIZZZZZ
        </p>
      </nav>

      {/* align right */}
      <nav className="sticky top-0 flex items-center justify-between">
        <div className="flex w-full items-center justify-between px-3 py-1">

          <Link href={`/docs`} className="mr-4">
            <Button
              variant={"ghost"}
              type={"submit"}
              className="hover:bg-slate-600 hover:text-slate-300 text-lg"
            >
              My books
            </Button>
          </Link>

          <Link href={`/docs`} className="mr-20">
            <Button
              variant={"ghost"}
              type={"submit"}
              className="hover:bg-slate-600 hover:text-slate-300 text-lg"
            >
              Public books
            </Button>
          </Link>
        </div>
      </nav>

      <nav className="ml-auto sticky top-0 flex items-center justify-between">
        <div className="flex w-full items-center justify-between px-3 py-1">

          {/* user information */}
          <div className="flex items-center gap-2 mr-4 text-lg">
            <RxAvatar />
            <h1 className="text-lg font-semibold">
              {session?.user?.username ?? "User"}
            </h1>
          </div>

          {/* sign out button */}
          <Link href={`/auth/signout`}>
            <Button
              variant={"ghost"}
              type={"submit"}
              className="hover:bg-slate-600 hover:text-slate-300 text-lg"
            >
              Sign Out
            </Button>
          </Link>
        </div>

      </nav>
    </nav>
  );
}

export default Navbar;

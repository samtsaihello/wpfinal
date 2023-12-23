import type { Books } from "@/lib/types/db";

import { Badge } from "@/components/ui/badge"

function Book({info} : {info: Books}) {

  function getLength(str: string){ 
    return str.replace(/[^\x20-\xff]/g,"OO").length;
  };

  function cutString(str: string, limit: number){
    let current = 0;
    let ret = "";
    for (let i = 0; i < str.length; i++){
      const len = getLength(str[i]);
      if (current + len > limit){
        ret += "...";
        break;
      }
      ret += str[i];
      current += len;
    }
    return ret;
  };

  return (
    <div className="text-slate-100 m-3 border-2 rounded-lg border-slate-600">
      <div className="flex-col w-80 p-4">
        <div className="p-2 text-xl font-bold text-slate-200" style={{position: "relative"}}>
          <p>{cutString(info.title, 25)}</p>
        </div>
        <div className="text-slate-500 h-16 p-2">
          <p>{cutString(info.description, 65)}</p>
        </div>
        <div className="flex-col p-2">
          <Badge variant="outline" className="text-slate-100 mr-3 bg-blue-600 border-slate-800">
            {info.language}
          </Badge>
          <Badge variant="outline" className="text-slate-100 border-slate-800 bg-green-600">
            {"Popularity: " + info.popularity}
          </Badge>
        </div>
      </div>
    </div>
  );
}
export default Book;

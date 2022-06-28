import Link from "next/link";
import { NoteAdd } from "iconsax-react";

const NoDataContent = ({ userId }: { userId: string }) => {
  return (
    <Link
      href={{
        pathname: "/[userId]/create",
        query: { userId },
      }}
    >
      <div className="border border-slate-400 text-slate-500 rounded-md w-3/4 h-40 flex flex-col items-center justify-center gap-y-8">
        <p className="text-sm">プログラムを作成</p>
        <NoteAdd size={32} />
      </div>
    </Link>
  );
};

export default NoDataContent;

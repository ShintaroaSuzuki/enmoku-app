import useRequireAuth from "@/hooks/useRequireAuth";
import Loader from "@/components/Loader";
import { useUniqueUserByIdQuery } from "@/src/graphql/user/getUniqueUser.generated";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const UserPage = () => {
  const session = useRequireAuth();

  const router = useRouter();
  const { userId } = router.query;

  const { loading, error, data } = useUniqueUserByIdQuery({
    variables: {
      id: userId as string,
    },
  });

  if (!session || loading) return <Loader />;
  if (error) return <p>Error</p>;

  return (
    <div className="min-h-screen flex flex-col items-center gap-y-10 bg-slate-50 pt-20">
      <p className="text-lg font-bold">{`ようこそ、${data?.uniqueUser.name} さん`}</p>
      <div className="h-40 w-40 rounded-full overflow-hidden">
        <img src={data?.uniqueUser.avatar} alt="profile" />
      </div>
      <button
        className="rounded-md w-3/4 h-12 bg-red-800 text-slate-50"
        onClick={() => signOut()}
      >
        ログアウト
      </button>
    </div>
  );
};

export default UserPage;

import useRequireAuth from "@/hooks/useRequireAuth";
import Loader from "@/components/Loader";
import { useUniqueUserByIdQuery } from "@/src/graphql/user/getUniqueUser.generated";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import NoDataContent from "@/components/app/NoDataContent";

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
    <div className="min-h-screen flex flex-col items-center gap-y-10 bg-slate-50">
      <div className="w-full my-6">
        <button
          className="absolute right-6 text-slate-400"
          onClick={() => signOut()}
        >
          ログアウト
        </button>
      </div>
      <div className="h-24 w-24 rounded-full overflow-hidden">
        <img src={data?.uniqueUser.avatar} alt="profile" />
      </div>
      <p className="text-lg font-bold">{`ようこそ、${data?.uniqueUser.name} さん`}</p>
      <NoDataContent userId={userId as string} />
    </div>
  );
};

export default UserPage;

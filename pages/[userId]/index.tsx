import useRequireAuth from "@/hooks/useRequireAuth";
import Loader from "@/components/Loader";
import { useUniqueUserByIdQuery } from "@/src/graphql/user/getUniqueUser.generated";
import { useRouter } from "next/router";

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
    <div>
      <p>{`ようこそ、${data?.uniqueUser.name} さん`}</p>
    </div>
  );
};

export default UserPage;

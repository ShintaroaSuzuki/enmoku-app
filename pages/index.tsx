import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";
import LP from "@/components/lp";

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (typeof session === "undefined") return <Loader />;

  if (status === "authenticated") {
    router.push(`/${session.userId}`);
  } else {
    return <LP />;
  }
}

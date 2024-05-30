import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authoptions";
import { redirect } from "next/navigation";
import WelcomePage from "./(pages)/welcome/page";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("api/auth/signin?callbackUrl=/server");
  }
  return <>{session ? <WelcomePage /> : <h1>You are not protected</h1>}</>;
}

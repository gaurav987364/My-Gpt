import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GithubIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  return (
    <>
     {session && session.user ? (
      redirect('/chat')
     ) : (
      <Dialog open>
        <DialogContent className=" sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign in to your account.</DialogTitle>
            <DialogDescription>
              Sign in to access your account and start chatting.
            </DialogDescription>
          </DialogHeader>
          <form
            action={async () => {
              "use server"
              await signIn("github")
            }}
            className=" flex items-center justify-center py-4"
          >
              <Button variant="outline" className=" w-full max-w-sm">
                <GithubIcon className=" mr-2 size-4"/>Sign in
              </Button>
          </form>
        </DialogContent>
     </Dialog>
     )}
    </>
  );
};

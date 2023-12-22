"use client";

import { useEffect } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

function ErrorPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Failed",
      description:
        "Wrong username or wrong password. Or this username has been used.",
      variant: "destructive",
    });
    router.push("/");
  }, [session, router, toast]);

  return (
    <>
      <Toaster />
    </>
  );
}

export default ErrorPage;
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedPage({ children }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("login") === "true") {
      setAllowed(true);
    } else {
      router.replace("/login");
    }
  }, [router]);

  if (!allowed) return null;
  return children;
}

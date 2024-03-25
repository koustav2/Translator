
import connectDB from "@/config/db/mongodb";
import Image from "next/image";

export default async function Home() {
  await connectDB()
  return (
    <></>
  );
}

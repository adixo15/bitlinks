import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const shortUrl = params.url; // ✅ use directly, no await

  const client = await clientPromise;
  const db = client.db("bitlink");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl: shortUrl });

  if (doc?.url) {
    // Ensure protocol exists
    let finalUrl = doc.url;
    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = "https://" + finalUrl;
    }
    redirect(finalUrl); // ✅ redirect safely
  }

  return (
    <div className="flex h-screen items-center justify-center text-red-600 text-xl font-semibold px-4 text-center">
      Short URL not found!
    </div>
  );
}

import Image from "next/image";
import Layout from "./Components/Layout";
import Posts from "./Components/Posts/PostCard/Posts";

export default function Home() {
  return (
    <main >
      <Layout>
        <Posts />
      </Layout>
    </main>
  );
}

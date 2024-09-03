import Image from "next/image";
import Layout from "./Components/Layout";
import Posts from "./Components/Posts/PostCard/Posts";
import GhalleryHome from "./Components/GhalleryHome/GhalleryHome";

export default function Home() {
  return (
    <main >
      <Layout>
        <Posts />
        <GhalleryHome/>
      </Layout>
    </main>
  );
}

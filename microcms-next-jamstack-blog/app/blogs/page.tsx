import Link from "next/link";
import { client } from "../libs/client";

export default async function Blogs() {
  const blog = await getBlog();
  
  return (
    <div>
      <ul>
        {blog.map((blog: any) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
// TODO: not Foundの場合の処理を追加する
async function getBlog () {

  const data = await client.get({ endpoint: "blogs" });
  return data.contents;
};
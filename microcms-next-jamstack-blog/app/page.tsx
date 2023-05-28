'use client';
import Link from "next/link";
import { Blog, getList } from "./libs/client";
import { Button  } from '@chakra-ui/react';
import { use, useEffect, useState } from "react";
import { MicroCMSListResponse } from "microcms-js-sdk/dist/cjs/types";

// TODO: not Foundの場合の処理を追加する
export default async function Home() {

  const { contents } = await getList();

  if (!contents || contents.length === 0) {
  return <h1>No contents</h1>;
  } 

  return (
    <div>
      <Button colorScheme="teal" variant="outline" onClick={() => console.log({data2:contents})}>
        ボタン
      </Button>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/blogs/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
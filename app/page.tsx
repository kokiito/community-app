'use client';
import { getList } from "./libs/client";
import { Button  } from '@chakra-ui/react';

// TODO: not Foundの場合の処理を追加する
export default async function Home() {

  return (
    <div>
      <Button colorScheme="teal" variant="outline"> 
        ボタン
      </Button>
    </div>
  );
}
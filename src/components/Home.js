import React from 'react';
import CreatePostContainer from './CreatePostContainer';
import Posts from './Posts';

export default function Home() {
  return (
    <>
      <CreatePostContainer />
      <Posts/>
    </>
  );
}

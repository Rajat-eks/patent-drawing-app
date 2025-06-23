import ArticleContent from '@/components/organisms/Article/ArticleContent';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
   <ArticleContent/>
    </main>
  );
};

export default page
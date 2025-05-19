import React from 'react';
import Giscus from '@giscus/react';
import { useLocation } from 'react-router-dom';

interface GiscusCommentsProps {
  pageTitle?: string;
}

const GiscusComments: React.FC<GiscusCommentsProps> = ({ pageTitle }) => {
  const location = useLocation();
  const discussionTerm = pageTitle;

  return (
    <Giscus
      key={location.pathname}
      id="comments"
      repo="UmmItC/links"
      repoId="R_kgDOL7HS6w"
      category="General"
      categoryId="DIC_kwDOL7HS684CoWvS"
      mapping="specific"
      term={discussionTerm}
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="catppuccin_mocha"
      lang="en"
      loading="lazy"
    />
  );
};

export default GiscusComments; 
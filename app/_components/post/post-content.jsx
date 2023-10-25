'use client'

import { useEffect } from "react";

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/tokyo-night-dark.min.css';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';
import php from 'highlight.js/lib/languages/php';
import sql from 'highlight.js/lib/languages/sql';

// hljs register languages 
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', html);
hljs.registerLanguage('php', php);
hljs.registerLanguage('sql', sql);

export default function PostContent({ post }) {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <div
      className="mt-9 prose prose-ajwa prose-xl max-w-none prose-h2:text-3xl prose-h3:text-2xl prose-a:font-normal prose-blockquote:not-italic"
      id="content"
      dangerouslySetInnerHTML={{ __html: post.contentHTML }}
    />
  );
}

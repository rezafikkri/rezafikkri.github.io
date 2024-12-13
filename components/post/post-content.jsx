'use client'

import { useEffect } from "react";
import HljsToolbar from "@/lib/hljs-toolbar.mjs";

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/tokyo-night-dark.min.css';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';
import php from 'highlight.js/lib/languages/php';
import sql from 'highlight.js/lib/languages/sql';
import bash from 'highlight.js/lib/languages/bash';
import yaml from 'highlight.js/lib/languages/yaml';
import http from 'highlight.js/lib/languages/http';

// hljs register languages 
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', html);
hljs.registerLanguage('php', php);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('http', http);

hljs.configure({
  ignoreUnescapedHTML: true
});
hljs.addPlugin(new HljsToolbar());

export default function PostContent({ post }) {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <div
      className="mt-10 prose prose-ajwa prose-xl max-w-none prose-h2:text-3xl prose-h3:text-2xl prose-a:font-normal prose-pre:text-[0.9em] prose-pre:leading-normal prose-code:font-source-code-pro prose-pre:bg-[#1a1b26] prose-pre:relative prose-pre:pt-12 prose-code:break-words prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:border-0"
      id="content"
      dangerouslySetInnerHTML={{ __html: post.contentHTML }}
    />
  );
}

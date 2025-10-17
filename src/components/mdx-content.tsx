'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MdxContentProps {
  source: MDXRemoteSerializeResult;
}

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <MDXRemote {...source} />
    </div>
  );
}

// https://nextjs.org/docs/app/api-reference/file-conventions/route

import { generateArticle } from '@/serviecs/fake';

export async function GET() {
  const articles = Array.from({ length: 5 }, () => generateArticle());

  return new Response(JSON.stringify({ data: articles, errors: '' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

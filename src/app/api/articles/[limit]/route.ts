import { generateArticle } from '@/serviecs/fake';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ data: [generateArticle(), generateArticle()] });
}

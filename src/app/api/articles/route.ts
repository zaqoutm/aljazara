// https://nextjs.org/docs/app/api-reference/file-conventions/route
// https://fakerjs.dev/api/

import { Article } from "@/interfaces/Aricle";
import { fakerAR as faker } from "@faker-js/faker";

export async function GET() {
  const articles = { data: generateArticles(), meta: "" };

  return new Response(JSON.stringify(articles), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

function generateArticles() {
  let i = 1;

  // this is a loop
  const articles: Article[] = Array.from({ length: 10 }, () => ({
    // slug: faker.helpers.slugify(fakerEN.lorem.sentence()), // todo: slugify ar to en

    documentId: i++ + "",
    id: i++ + "",
    title: faker.lorem.sentence(),
    // content: faker.lorem.paragraph(),
    photo: { url: faker.image.avatar(), alternativeText: "", caption: "" },
    section: {
      id: "1",
      title: "Economics",
      titleAr: "الاقتصاد",
    },
    tags: ["tag1", "tag2_test", "tag3"],
  }));

  return articles;
}

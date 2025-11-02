// https://fakerjs.dev/api/

import { fakerAR as faker, fakerEN } from '@faker-js/faker';
import { AljazaraArticle } from './AljazaraArticle';

export function generateArticle(): AljazaraArticle {
  return {
    slug: faker.helpers.slugify(fakerEN.lorem.sentence()), // todo: slugify ar to en
    documentId: faker.number.int() + '',
    id: faker.number.int() + '',
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    photo: { url: faker.image.urlLoremFlickr(), alternativeText: '', caption: '' },

    section: {
      id: faker.number.int() + '',
      title: faker.lorem.word() + '',
      titleAr: faker.lorem.word() + '',
    },
    tags: faker.helpers.uniqueArray(faker.lorem.word, 3),
    createdAt: faker.date.anytime().toISOString() + '',

    isFeatured: faker.datatype.boolean(),
  };
}

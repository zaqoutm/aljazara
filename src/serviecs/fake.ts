// https://fakerjs.dev/api/

import { fakerAR as faker, fakerEN } from '@faker-js/faker';
import { AljazaraArticle } from './AljazaraArticle';

export function generateArticle(): AljazaraArticle {
  return {
    id: faker.number.int() + '',
    slug: faker.helpers.slugify(fakerEN.lorem.sentence()), // todo: slugify ar to en
    documentId: faker.number.int() + '',
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    photo: {
      filename_disk: faker.image.urlLoremFlickr(),
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
    },

    section: {
      id: faker.number.int() + '',
      title: faker.helpers.arrayElement(['business', 'technology', 'culture']) + '',
      titleAr: faker.helpers.arrayElement(['تكنولوجيا', 'اقتصاد', 'ثقافة']) + '',
    },
    tags: faker.helpers.uniqueArray(faker.lorem.word, 3),
    date_created: faker.date.anytime().toISOString() + '',

    is_featured: faker.datatype.boolean(),
  };
}

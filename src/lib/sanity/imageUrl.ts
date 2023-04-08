import ImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { client } from './client';

const builder = ImageUrlBuilder(client);

function getImageUrl(source: SanityImageSource) {
  return builder.image(source).url() || '';
}

export default getImageUrl;

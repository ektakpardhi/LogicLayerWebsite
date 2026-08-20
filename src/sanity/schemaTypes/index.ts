import { type SchemaTypeDefinition } from 'sanity';

import service from './service';
import caseStudy from './caseStudy';
import industry from './industry';
import testimonial from './testimonial';
import blog from './blog';
import faq from './faq';
import siteSettings from './siteSettings';

export const schemaTypes: SchemaTypeDefinition[] = [
  service,
  caseStudy,
  industry,
  testimonial,
  blog,
  faq,
  siteSettings,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};

export default schemaTypes;

import { type SchemaTypeDefinition } from 'sanity';

import service from './schemaTypes/service';
import caseStudy from './schemaTypes/caseStudy';
import industry from './schemaTypes/industry';
import testimonial from './schemaTypes/testimonial';
import blog from './schemaTypes/blog';
import faq from './schemaTypes/faq';
import siteSettings from './schemaTypes/siteSettings';

export const schemaTypes: SchemaTypeDefinition[] = [
  service,
  caseStudy,
  industry,
  testimonial,
  blog,
  faq,
  siteSettings,
];

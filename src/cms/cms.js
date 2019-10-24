import React from 'react';
import CMSApp from 'netlify-cms-app';
import CMS from 'netlify-cms';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import HistoryPagePreview from './preview-templates/HistoryPagePreview';
import JavascriptCustomWidget from './control-templates/JavascriptCustomWidget';

CMSApp.registerMediaLibrary(uploadcare);
CMSApp.registerMediaLibrary(cloudinary);

CMSApp.registerPreviewTemplate('index', IndexPagePreview);
CMSApp.registerPreviewTemplate('about', AboutPagePreview);
CMSApp.registerPreviewTemplate('products', ProductPagePreview);
CMSApp.registerPreviewTemplate('blog', BlogPostPreview);
CMSApp.registerPreviewTemplate('history', HistoryPagePreview);
CMS.registerWidget('javascriptCustomWidget', JavascriptCustomWidget, ({ value }) => {
  const noTagValue = value.substring(value.indexOf('<script>') + 8, value.indexOf('</script>'));
  return <script>{noTagValue}</script>;
});

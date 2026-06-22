import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  lang?: string;
}

const SITE_URL = 'https://www.auralivingcare.com';
const DEFAULT_IMAGE = '/images/default_card_image.png';

export const SEOHead = ({ title, description, path = '', lang = 'en' }: SEOHeadProps) => {
  const url = `${SITE_URL}${path}`;
  const alternateUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* hreflang for bilingual content */}
      <link rel="alternate" hrefLang="en" href={alternateUrl} />
      <link rel="alternate" hrefLang="zh-Hans" href={alternateUrl} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${SITE_URL}${DEFAULT_IMAGE}`} />
      <meta property="og:locale" content={lang === 'zh' ? 'zh_CN' : 'en_US'} />
      <meta property="og:locale:alternate" content={lang === 'zh' ? 'en_US' : 'zh_CN'} />
      <meta property="og:site_name" content="Aura Living" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${DEFAULT_IMAGE}`} />
    </Helmet>
  );
};

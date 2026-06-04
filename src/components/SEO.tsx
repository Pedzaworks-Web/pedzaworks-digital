import { Helmet } from "react-helmet-async";

type RobotsDirective = "index, follow" | "noindex, nofollow";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  keywords?: string[];
  author?: string;
  locale?: string;
  twitterSite?: string;
  twitterCreator?: string;
  robots?: RobotsDirective;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const BRAND_NAME = "Pedzaworks Digital Solutions";
const DEFAULT_URL = "https://www.pedzaworks.com";
const DEFAULT_IMAGE = "https://www.pedzaworks.com/og-image.jpg";
const DEFAULT_IMAGE_ALT = "Pedzaworks Digital Solutions";
const DEFAULT_LOCALE = "en_US";

const buildTitle = (title: string) => {
  const normalized = title.trim();
  if (!normalized) return BRAND_NAME;

  const lowerTitle = normalized.toLowerCase();
  const lowerBrand = BRAND_NAME.toLowerCase();

  if (lowerTitle === lowerBrand || lowerTitle.includes(lowerBrand)) {
    return normalized;
  }

  return `${normalized} | ${BRAND_NAME}`;
};

export const SEO = ({
  title,
  description,
  url = DEFAULT_URL,
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  imageWidth = 1200,
  imageHeight = 630,
  keywords,
  author = BRAND_NAME,
  locale = DEFAULT_LOCALE,
  twitterSite,
  twitterCreator,
  robots = "index, follow",
  schema,
}: SEOProps) => {
  const fullTitle = buildTitle(title);
  const normalizedKeywords =
    keywords?.map((keyword) => keyword.trim()).filter(Boolean) ?? [];

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {normalizedKeywords.length > 0 && (
        <meta name="keywords" content={normalizedKeywords.join(", ")} />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={BRAND_NAME} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && (
        <meta name="twitter:creator" content={twitterCreator} />
      )}

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;

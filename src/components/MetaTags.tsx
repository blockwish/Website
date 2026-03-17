import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function MetaTags({
  title = 'Blockwise | Multi-vertical decentralized ecosystem under the BlockEdges Network',
  description = 'Blockwise (BLW) - Build Smarter. Stake Deeper. Own the Edge. The Smarter Blockchain Network with 120,000 BLW hard cap and 1% burns on every transaction.',
  image = 'https://blockwise.network/assets/images/blw_logo.png',
  url = 'https://blockwise.network',
}: MetaTagsProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

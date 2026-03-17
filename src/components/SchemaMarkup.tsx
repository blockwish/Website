import { Helmet } from 'react-helmet-async';

export default function SchemaMarkup() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Blockwise',
    url: 'https://blockwise.network',
    logo: 'https://blockwise.network/assets/images/blw_logo.png',
    description: 'Multi-vertical decentralized ecosystem under the BlockEdges Network',
    sameAs: [
      'https://facebook.com/blockwise',
      'https://twitter.com/blockwise',
      'https://linkedin.com/company/blockwise',
      'https://instagram.com/blockwise',
    ],
    contact: {
      '@type': 'ContactPoint',
      email: 'info@blockwise.network',
      contactType: 'Customer Support',
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Cryptocurrency',
    name: 'BlockWise Token',
    identifier: 'BLW',
    description: 'BEP20 utility token powering a complete decentralized ecosystem on BNB Smart Chain',
    url: 'https://blockwise.network',
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
    </Helmet>
  );
}

import {
  Wallet,
  Search,
  PieChart,
  CircleDollarSign,
  TrendingUp,
  Shield,
  Building2,
  UserRound,
  Star,
  Home as HomeIcon,
  ShieldCheck,
  Globe2,
  Award,
  Layers,
  Store,
  ScanSearch,
  Coins,
  FileCode2,
  LayoutGrid,
} from 'lucide-react';

/** Hero — left column (matches luxury home reference) */
export const heroCopy = {
  badge: 'Next-gen real estate investment',
  titleLine1: 'Invest in Real Estate From',
  titleAccent: '$10',
  subtitle:
    'Billion Towers makes real estate investment accessible, transparent and global. Own a fraction of premium properties, earn passive income, and grow your wealth with blockchain security.',
  primaryCta: 'Start Investing',
  secondaryCta: 'Watch Demo',
};

/** Trust row under hero CTAs — title + subline + gold icon */
export const heroTrustBadges = [
  { icon: Shield, title: 'Secure & Transparent', sub: 'On-Chain Security' },
  { icon: Building2, title: 'Real World Assets', sub: 'Backed by Real Estate' },
  { icon: Award, title: 'Trusted by Investors', sub: 'Worldwide' },
];

/** Unified stats + trust block — gold eyebrow above the metrics row */
export const statsTrustEyebrow = 'Backed by trust. Built for the future.';

/** Shown as a subtle caption at the bottom of the unified block */
export const statsIntro =
  'Illustrative momentum metrics for the product vision; live dashboards will replace static figures at launch.';

/**
 * Momentum row (leading graphics composed in `HomeStatsTrustSection` when `leading` is set).
 */
export const stats = [
  { icon: UserRound, value: '10,000+', label: 'Active Investors' },
  { leading: 'dollar-up', value: '$50M+', label: 'Total Value Locked' },
  { icon: Building2, value: '500+', label: 'Properties Listed' },
  { leading: 'user-shield', value: '8.5%', label: 'Average Returns' },
];

/** How it works — horizontal flow (icons styled gold in HomeSteps) */
export const steps = [
  {
    icon: Wallet,
    title: 'Connect your wallet',
    description: 'Link your wallet securely to access listings and distributions.',
  },
  {
    icon: Search,
    title: 'Browse properties',
    description: 'Explore curated assets, yields, and terms in one place.',
  },
  {
    icon: PieChart,
    title: 'Choose your allocation',
    description: 'Buy fractional exposure that matches your budget and goals.',
  },
  {
    icon: CircleDollarSign,
    title: 'Earn monthly returns',
    description: 'Royalties from rents and performance flow to your wallet.',
  },
  {
    icon: TrendingUp,
    title: 'Trade or compound',
    description: 'Hold for passive income or list on the marketplace when you choose.',
  },
];

/** Advantages row — icon left, copy right (home reference) */
export const features = [
  {
    icon: Shield,
    title: 'High Liquidity',
    description: 'Easy entry, easy exit with our secondary marketplace.',
  },
  {
    icon: ScanSearch,
    title: 'No Hidden Fees',
    description: 'What you see is what you pay. 100% transparent.',
  },
  {
    icon: Coins,
    title: 'Tokenized Ownership',
    description: 'Secure blockchain ownership recorded on-chain.',
  },
  {
    icon: FileCode2,
    title: 'Smart Contract',
    description: 'Automated income distribution and secure transactions.',
  },
  {
    icon: LayoutGrid,
    title: 'Diversify Easily',
    description: 'Invest in multiple properties across locations.',
  },
];

export const mechanicsItems = [
  {
    title: 'A building is selected',
    description: 'We divide it by $10 to have a supply NFTs on it.',
    icon: Building2,
  },
  {
    title: 'NFTs are created',
    description: 'You can now buy NFTs against the property in question.',
    icon: Layers,
  },
  {
    title: 'Monthly returns',
    description: 'Each month, you will receive the rents collected on your wallet.',
    icon: Wallet,
  },
  {
    title: 'Sell anytime',
    description:
      'When you decide, you can put your NFT up for sale, otherwise take advantage of the passive income.',
    icon: Store,
  },
];

/** Feature cards under the stats row (same unified section) */
export const trustPoints = [
  {
    icon: Building2,
    title: 'Real World Backing',
    body: 'Every asset is backed by real, income-generating properties.',
  },
  {
    icon: HomeIcon,
    title: 'Fractional Ownership',
    body: 'Own a fraction of premium real estate starting from just $10.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent & Secure',
    body: 'All transactions are recorded on-chain for full transparency and security.',
  },
  {
    icon: Star,
    title: 'Passive Income',
    body: 'Earn rental income automatically, directly to your wallet.',
  },
  {
    icon: Globe2,
    title: 'Global Access',
    body: 'Invest in properties worldwide with no geographical barriers.',
  },
];

export const featuresSection = {
  title: 'The Advantages, Without the Disadvantages',
  subtitle: 'We eliminate the barriers so you can focus on building wealth.',
};

export const stepsSection = {
  title: 'How',
  titleAccent: 'Billion Towers',
  titleSuffix: ' Works?',
  subtitle: 'Investing in real estate has never been easier.',
};

export const mechanicsSection = {
  title: 'How',
  titleAccent: 'Billion Towers',
  titleSuffix: ' Works?',
  subtitle:
    'On-chain NFTs map to the property supply split into $10 units—your wallet receives rent distributions on the cadence you configure.',
};

export const propertiesSection = {
  title: 'Among our properties already financed',
};

export const faqSection = {
  title: 'Your Most Frequently Asked Questions',
};

export const closingCta = {
  title: 'Ready to build your real estate portfolio?',
  subtitle: 'Join thousands of investors already building wealth with Billion Towers.',
  primaryLabel: 'Browse Marketplace',
  secondaryLabel: 'Connect Wallet',
};

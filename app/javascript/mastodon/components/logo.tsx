import logo from '@/images/logo.svg';

export const WordmarkLogo: React.FC = () => (
  <svg viewBox='0 0 429 81' className='logo logo--wordmark' role='img'>
    <title>Mastodon</title>
    <use xlinkHref='#logo-symbol-wordmark' />
  </svg>
);

export const SymbolLogo: React.FC = () => (
  <img src={logo} alt='Mastodon' className='logo logo--icon' />
);

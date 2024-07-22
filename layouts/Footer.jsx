import Link from 'next/link';
import Image from 'next/image';
import useMobile from '~/hooks/useMobile';

const SocialIcon = () => {
  const socialLinks = [
    {
      icon: '/assets/icons/facebook.png',
      path: 'https://www.facebook.com/',
      alt: 'facebook',
    },
    {
      icon: '/assets/icons/instagram.png',
      path: 'https://www.instagram.com/',
      alt: 'facebook',
    },
    {
      icon: '/assets/icons/twitch.png',
      path: 'https://www.twitch.tv/login',
      alt: 'facebook',
    },
    {
      icon: '/assets/icons/Twitter.png',
      path: 'https://x.com/?lang=en',
      alt: 'facebook',
    },
    {
      icon: '/assets/icons/youtube.png',
      path: 'https://www.youtube.com/',
      alt: 'facebook',
    },
  ];

  const isMobile = useMobile();
  return (
    <div className="flex gap-[25px] md:gap-[50px]">
      {socialLinks.map((link) => (
        <Link key={link.path} href={link.path}>
          {/* <span className="icon icon-social">{link.icon}</span> */}
          <Image
            width={isMobile ? 25 : 50}
            height={isMobile ? 25 : 50}
            alt={link.alt}
            src={link.icon}
          />
        </Link>
      ))}
    </div>
  );
};

const Footer = () => {
  const footerLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/cookie-preferences', label: 'Cookie Preferences' },
    { href: '/corporate-information', label: 'Corporate Information' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/cookie-preferences', label: 'Cookie Preferences' },
    { href: '/corporate-information', label: 'Corporate Information' },
  ];
  return (
    <div className="bg-black text-white">
      <div className="px-8 pb-12 pt-16 md:px-16 lg:px-24 xl:px-48">
        <SocialIcon />
        <div className="mb-[61px] mt-[37px] grid grid-cols-2 gap-4 gap-x-12 md:mb-[135px] md:mt-[80px] md:grid-cols-4">
          {footerLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <span className="whitespace-nowrap text-xs font-semibold md:text-xl xl:text-2xl">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
        <span className="whitespace-nowrap text-xs font-semibold md:text-xl xl:text-2xl">
          <span>©</span> Alkye Test
        </span>
      </div>
    </div>
  );
};

export default Footer;

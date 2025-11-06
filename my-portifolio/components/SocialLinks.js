import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks({ size = 'w-6 h-6', colorClass = 'text-gray-400' }) {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/iwerson-guilherme-851703204',
      icon: Linkedin,
      hoverColor: 'hover:text-blue-400',
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/owleyes62',
      icon: Github,
      hoverColor: 'hover:text-white',
      label: 'GitHub',
    },
    {
      href: 'mailto:guilhermepdo2012@gmail.com',
      icon: Mail,
      hoverColor: 'hover:text-pink-400',
      label: 'Email',
    },
  ];

  return (
    <div className="flex space-x-6">
      {socialLinks.map((social, idx) => (
        <a
          key={idx}
          href={social.href}
          target={social.icon !== Mail ? '_blank' : undefined}
          rel={social.icon !== Mail ? 'noopener noreferrer' : undefined}
          className={`${colorClass} ${social.hoverColor} transition`}
          aria-label={social.label}
        >
          <social.icon className={size} />
        </a>
      ))}
    </div>
  );
}

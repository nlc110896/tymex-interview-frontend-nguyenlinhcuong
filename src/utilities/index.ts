import { authorStatuses, gradients } from '@/common';

export const debounce = (cb: any, delay: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb.apply(this, args), delay);
  };
};

export const getGradient = (type: string) => {
  return gradients[type] ?? '';
};

export const getAuthorStatusImage = (status: string) => {
  return authorStatuses[status] ?? '';
};

export const formatPrice = (price: number) => {
  return price.toLocaleString('de-DE');
};

export const getCardImage = (imageId: number) => {
  const cardImages = [
    '/cardImages/neon-guy.png',
    '/cardImages/the-dj.png',
    '/cardImages/basketball-girl.png',
    '/cardImages/assassin.png',
    '/cardImages/mafia-england.png',
    '/cardImages/neon-guy.png',
    '/cardImages/the-dj.png',
    '/cardImages/basketball-girl.png',
    '/cardImages/assassin.png',
    '/cardImages/mafia-england.png',
    '/cardImages/neon-guy.png',
    '/cardImages/the-dj.png',
    '/cardImages/basketball-girl.png',
    '/cardImages/assassin.png',
    '/cardImages/mafia-england.png',
    '/cardImages/neon-guy.png',
    '/cardImages/the-dj.png',
    '/cardImages/basketball-girl.png',
    '/cardImages/assassin.png',
    '/cardImages/mafia-england.png',
    '/cardImages/neon-guy.png',
    '/cardImages/the-dj.png',
    '/cardImages/basketball-girl.png',
    '/cardImages/assassin.png',
    '/cardImages/mafia-england.png',
  ];

  return cardImages[imageId];
};

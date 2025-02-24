import idleStatus from '@/assets/icon/idle-status.svg';
import offlineStautus from '@/assets/icon/offline-status.svg';
import onlineStatus from '@/assets/icon/online-status.svg';
import busyStatus from '@/assets/icon/busy-status.svg';

export const DEFAULT_LIMIT = 30;
export const DEFAULT_UNIT = 'ETH';

export const gradients: { [key: string]: string } = {
  Common: 'linear-gradient(90.13deg, #49DD81 0%, #22B4C6 100%)',
  Epic: 'linear-gradient(90.13deg, #DD5AFE 0%, #6366F1 100%)',
  Rare: 'linear-gradient(90deg, #43A6F6 0%, #5868F3 100%)',
  Legendary: 'linear-gradient(90.13deg, #FE955A 0%, #F1DA63 100%)',
  Mythic: 'linear-gradient(90.13deg, #FE5A5A 0%, #F163D2 100%)',
  ['Upper Body']: 'linear-gradient(90.13deg, #6A0DAD 0%, #FF8C00 100%)',
  ['Lower Body']: 'linear-gradient(90.13deg, #009688 0%, #03A9F4 100%)',
  Hat: 'linear-gradient(90.13deg, #FFC107 0%, #673AB7 100%)',
  Shoes: 'linear-gradient(90.13deg, #3F51B5 0%, #4CAF50 100%)',
  Accessory: 'linear-gradient(90.13deg, #FF5722 0%, #795548 100%)',
};

export const authorStatuses: { [key: string]: string } = {
  idle: idleStatus,
  offline: offlineStautus,
  busy: onlineStatus,
  online: busyStatus,
};

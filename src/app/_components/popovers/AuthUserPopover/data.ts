import { ASSET_AVATARS } from '@app/_utilities/constants/paths';
import { getAssetPath } from '@app/_utilities/helpers';

type AuthUserProps = {
  email: string;
  name: string;
  profile_pic: string;
  handle: string;
  job_title: string;
};
export const authUser: AuthUserProps = {
  email: 'harmaynicroft@example.com',
  name: 'Harmayni Croft',
  profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, `60x60`),
  handle: 'harmaynicroft@example.com',
  job_title: 'Creative Head',
};

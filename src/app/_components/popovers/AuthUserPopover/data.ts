import { getAssetPath } from "@app/utilities/appHelpers";
import { ASSET_AVATARS } from "@app/utilities/constants/paths";

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

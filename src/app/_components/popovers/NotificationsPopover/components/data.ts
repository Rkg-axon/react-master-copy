import { getCustomDateTime } from '@jumbo/utilities/formatHelpers';

export type NotificationsDataProps = {
  id: number;
  user: {
    id: number;
    name: string;
    profile_pic: string;
  };
  type: 'POSTING' | 'SHARED_POST' | 'INVITATION' | 'BIRTHDAY';
  metaData?: {
    post?:
       {
          type?: string;
          title: string;
          owner: {
            id: number;
            name: string;
            profile_pic: string;
          };
        }
    user?: {
      id: number;
      name: string;
      profile_pic: string;
    };
    group?: { id: number; name: string };
  };
  date: string;
};
export const notificationsData: NotificationsDataProps[] = [
  {
    id: 101,
    user: {
      id: 501,
      name: 'Stella Johnson',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
    type: 'POSTING',
    metaData: {
      post: {
        type: 'album',
        title: 'This is Beginning',
        owner: {
          id: 545,
          name: 'Martin Guptil',
          profile_pic: 'https://via.placeholder.com/150x150',
        },
      },
    },
    date: getCustomDateTime(-27, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
  },
  {
    id: 102,
    user: {
      id: 502,
      name: 'John Doe',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
    type: 'SHARED_POST',
    metaData: {
      post: {
        title: 'This is Beginning',
        owner: {
          id: 545,
          name: 'Martin Guptil',
          profile_pic: 'https://via.placeholder.com/150x150',
        },
      },
    },
    date: getCustomDateTime(-50, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
  },
  {
    id: 103,
    user: {
      id: 503,
      name: 'Garry Sobars',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
    type: 'INVITATION',
    metaData: {
      user: {
        id: 2525,
        name: 'North Taylor',
        profile_pic: 'https://via.placeholder.com/150x150',
      },
      group: { id: 12, name: 'Global Health' },
    },
    date: getCustomDateTime(-90, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
  },
  {
    id: 104,
    user: {
      id: 504,
      name: 'Sara John',
      profile_pic: 'https://via.placeholder.com/150x150',
    },
    type: 'BIRTHDAY',
    date: getCustomDateTime(-150, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
  },
];

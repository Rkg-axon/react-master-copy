export interface Feed {
  type: 'PROJECT_INVITATION' | 'PHOTOS_UPLOADED' | 'SHARED_POST';
  id: number;
  user: {
    id: number;
    name: string;
    profile_pic: string;
  };
  metaData: any;
  timeRange: string;
  createdAt: string;
}

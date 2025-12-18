export interface Video {
  id: string;
  username: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  likes: number;
  comments: number;
  shares: number;
  userAvatar: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  followers: number;
  following: number;
  likes: number;
}

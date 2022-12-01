export interface Post {
  id: string;
  title: string;
  author: string;
  message: string;
}

export type PostApi = Omit<Post, 'id'>

export interface PostMutation {
  title: string;
  author: string;
  message: string;
}

export interface PostsList {
  [id: string]: Post
}
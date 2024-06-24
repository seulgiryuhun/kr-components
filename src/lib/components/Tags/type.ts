import { TagProps } from '../Tag/type';

export type TagsDirection = 'row' | 'column';
export interface TagsProps {
  tags: TagProps[];
  direction?: TagsDirection;
}

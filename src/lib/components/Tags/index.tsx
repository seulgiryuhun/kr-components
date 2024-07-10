import { Tag } from '../Tag';
import { TagWrapper } from './styled';
import { TagsProps } from './type';

export const Tags = ({ tags, direction = 'row' }: TagsProps) => {
  return (
    <TagWrapper direction={direction}>
      {tags.map((tag, idx) => (
        <li key={`${tag.children}_${idx}`}>
          <Tag {...tag}>{tag.children}</Tag>
        </li>
      ))}
    </TagWrapper>
  );
};

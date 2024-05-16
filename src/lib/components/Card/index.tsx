import { StyledCard, Image, Title, Description, CardFooter } from './styled';
import { CardProps } from './type';

export const Card = ({ imageSrc, title, description, category, date, link }: CardProps) => {
  return (
    <StyledCard href={link}>
      <Image src={imageSrc} alt={`${title}_image`} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CardFooter>{`${category} | ${date}`}</CardFooter>
    </StyledCard>
  );
};

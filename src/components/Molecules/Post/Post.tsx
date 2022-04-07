import React from 'react';
import { FC } from 'react';

import PostContent from './PostContent';
import { ItemWrapper, StyledLink } from './styles';

export interface PostProps {
  id: string | null;
  excerpt: string | null;
  publicationDate: string;
  title: string;
  slug: string | null;
  category: {
    __typename: string;
    id: string;
    title: string | null;
    slug: string;
  };
  image: string;
  updateDate?: string;
}

const Post: FC<PostProps> = ({
  publicationDate,
  title,
  slug,
  category,
  image,
}): JSX.Element => (
  <ItemWrapper className="col-12 col-md-6 col-lg-4">
    <StyledLink href={`/${category.slug}/${slug}`} passHref>
      <a href={`/${category.slug}/${slug}`}>
        <div className="row h-100">
          <PostContent
            image={image}
            title={title}
            publicationDate={publicationDate}
          />
        </div>
      </a>
    </StyledLink>
  </ItemWrapper>
);

export default Post;

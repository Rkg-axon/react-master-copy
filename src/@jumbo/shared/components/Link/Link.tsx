import { LinkProps, Link as MUILink } from '@mui/material';
import { Url } from 'next/dist/shared/lib/router/router';
import NextLink from 'next/link';

type JumboLinkProps = LinkProps & {
  href: Url;
};

function Link(props: JumboLinkProps) {
  return (
    <MUILink component={NextLink} {...props}>
      {props.children}
    </MUILink>
  );
}

export { Link };

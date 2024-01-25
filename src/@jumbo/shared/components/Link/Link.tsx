import { config } from '@jumbo/jumbo.config';

const LinkComponent = config.LinkComponent;

function Link(props: any) {
  return <LinkComponent {...props} />;
}

export { Link };

'use client';
import { useJumboConfig } from '@jumbo/components/JumboConfigProvider/hooks';

function Link(props: any) {
  const { LinkComponent } = useJumboConfig();

  return <LinkComponent {...props} />;
}

export { Link };

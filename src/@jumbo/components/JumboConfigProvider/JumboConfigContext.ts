'use client';
import { JumboConfigContextType } from '@jumbo/types';
import Link from 'next/link';
import React from 'react';

const defaultContextValue: JumboConfigContextType = {
  LinkComponent: Link,
  translator: (value: string) => value,
};

const JumboConfigContext = React.createContext(defaultContextValue);

export { JumboConfigContext };

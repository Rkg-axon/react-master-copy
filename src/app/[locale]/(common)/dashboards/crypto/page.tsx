import React, { ReactNode } from 'react';

function Test({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function Foo() {
  return <p>Foo</p>;
}

function Gone() {
  return <p>Gone</p>;
}
function Bar({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default function Crypto() {
  return (
    <Test>
      <Foo />
      <Bar>
        <Foo />
      </Bar>
    </Test>
  );
}

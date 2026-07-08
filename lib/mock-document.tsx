import React from 'react';

export function Html({ children, ...props }: any) {
  return <html {...props}>{children}</html>;
}

export function Head({ children, ...props }: any) {
  return <head {...props}>{children}</head>;
}

export function Main() {
  return <div id="__next" />;
}

export function NextScript() {
  return null;
}

export default class Document extends React.Component {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

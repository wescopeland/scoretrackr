import React from 'react';

const hasChildren = (node: any) =>
  node && (node.children || (node.props && node.props.children));

const getChildren = (node: any) =>
  node && node.children ? node.children : node.props && node.props.children;

const renderNodes = (reactNodes: any) => {
  if (typeof reactNodes === 'string') {
    return reactNodes;
  }

  return Object.keys(reactNodes).map((key, i) => {
    const child = reactNodes[key];
    const isElement = React.isValidElement(child);

    if (typeof child === 'string') {
      return child;
    }
    if (hasChildren(child)) {
      const inner = renderNodes(getChildren(child)) as any;
      return React.cloneElement(child, { ...child.props, key: i }, inner);
    }
    if (typeof child === 'object' && !isElement) {
      return Object.keys(child).reduce(
        (str, childKey) => `${str}${child[childKey]}`,
        ''
      );
    }

    return child;
  });
};

const useMock = {
  t: (k: string) => k,
  i18n: {},
  ready: true
};

const mockWithTranslation = () => (InputComponent: any) => (props: any) => {
  return (
    <InputComponent
      t={useMock.t}
      i18n={useMock.i18n}
      tReady={true}
      {...props}
    />
  );
};

const mockUseTranslation = () => useMock;

const mockModule = jest.genMockFromModule('react-i18next') as any;
mockModule.withTranslation = mockWithTranslation;
mockModule.useTranslation = mockUseTranslation;
mockModule.I18nextProvider = (props: any) => <div>{props.children}</div>;
// tslint:disable-next-line: ban-comma-operator
(mockModule.Trans = ({ children }: any) => renderNodes(children)),
  (module.exports = mockModule);

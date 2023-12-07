interface Props {
  children: React.ReactNode;
  elementType?: 'li' | 'div';
}

const Panel = ({ children, elementType = 'div' }: Props) => {
  const Element = elementType;

  return (
    <Element className="border border-orange-400 border-dashed p-4 mb-2">
      {children}
    </Element>
  )
};

export default Panel;

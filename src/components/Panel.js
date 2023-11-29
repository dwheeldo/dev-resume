const Panel = ({ children, elementType }) => {
  const Element = elementType || 'div';

  return (
    <Element className="border border-orange-400 border-dashed p-4 mb-2">
      {children}
    </Element>
  )
};

export default Panel;

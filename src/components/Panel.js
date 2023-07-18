const Panel = ({ children, elementType }) => {
  const Element = elementType || 'div';

  return (
    <Element className="border border-white p-4 mb-2">
      {children}
    </Element>
  )
};

export default Panel;

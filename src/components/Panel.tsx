interface Props {
  children: React.ReactNode;
}

const Panel = ({ children }: Props) => {
  return (
    <div className="panel border border-orange-400 border-dashed p-4 mb-4">
      {children}
    </div>
  );
};

export default Panel;

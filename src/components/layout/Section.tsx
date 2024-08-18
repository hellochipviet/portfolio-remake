const Section = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
}) => {
  return (
    <section className={className} {...rest}>
      {children}
    </section>
  );
};

const ChildSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`container mx-auto border-l border-r border-gray-200 py-24 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export { Section, ChildSection };

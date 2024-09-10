const ContentLayout = ({ index, children }) => {
  return (
    <section key={index} className="pt-[90px]">
      {children}
    </section>
  );
};

export default ContentLayout;

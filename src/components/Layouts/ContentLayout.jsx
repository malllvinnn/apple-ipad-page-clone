const ContentLayout = ({ index, children, bg, pt }) => {
  return (
    <section key={index} className={`${bg} ${pt}  mt-[90px]`}>
      {children}
    </section>
  );
};

export default ContentLayout;

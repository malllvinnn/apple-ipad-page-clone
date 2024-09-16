const ContentLayout = ({
  index,
  children,
  bg,
  pt,
  pb,
  py,
  mt = "mt-[90px]",
}) => {
  return (
    <section key={index} className={`${bg} ${pt} ${py} ${pb} ${mt}`}>
      {children}
    </section>
  );
};

export default ContentLayout;

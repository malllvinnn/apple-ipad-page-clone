const TitleContent = ({ children, tsz }) => {
  return (
    <h1 className={`${tsz} font-bold flex items-center`} data-aos="fade-up">
      {children}
    </h1>
  );
};

export default TitleContent;

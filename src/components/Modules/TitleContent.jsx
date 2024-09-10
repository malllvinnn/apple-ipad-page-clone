const TitleContent = ({ children, tsz }) => {
  return <h1 className={`${tsz} font-bold flex items-center`}>{children}</h1>;
};

export default TitleContent;

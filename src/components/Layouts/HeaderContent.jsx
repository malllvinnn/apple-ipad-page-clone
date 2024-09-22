const HeaderContent = ({ children }) => {
  return (
    <div
      className="flex justify-between max-w-[1260px] h-[84px] mx-auto mb-20"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {children}
    </div>
  );
};

export default HeaderContent;

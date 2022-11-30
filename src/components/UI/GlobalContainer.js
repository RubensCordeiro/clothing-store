const GlobalContainer = ({ children }) => {
  return (
    <div className="max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mx-auto px-8">
      {children}
    </div>
  );
};

export default GlobalContainer;

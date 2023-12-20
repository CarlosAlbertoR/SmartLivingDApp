const Header= () => {
    return (
        <header
        className={`top-0 z-50 flex w-full items-center fixed ${
          scrolledFromTop
            ? 'bg-white dark:bg-dark bg-opacity-80 dark:bg-opacity-80 shadow-sticky backdrop-blur-sm'
            : 'bg-transparent dark:bg-transparent'
        }`}
      >
        {/* Resto del código del encabezado */}
      </header>
    );
};

export default Header;
  
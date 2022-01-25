const useConfig = () => {
  const config = {
    headers: {
      Authoriation: localStorage.getItem("token"),
    },
  };

  return config;
};

export default useConfig;

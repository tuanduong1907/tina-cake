const useSkeleton = (state) => {
  const animate = {
    opacity: state ? 1 : 0,
  };
  const transition =
    ({ height: { delay: 0, duration: 0.4 } },
    { opacity: { delay: 0.5, duration: 0.4 } });
  return { animate, transition}
};

export default useSkeleton;
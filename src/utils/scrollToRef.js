const scrollToRef = (ref, offset = 0) =>
  window.scrollTo({
    top: ref.current.offsetTop + offset,
    behavior: "smooth",
  });

export default scrollToRef;

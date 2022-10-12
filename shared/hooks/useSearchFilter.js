export default function useSearchFilter(data) {
  const dataFilter = (textSearch) => {
    const dataSearch = data?.filter((item) =>
      item.title.toLowerCase().includes(textSearch.toLowerCase())
    );
    if (textSearch) {
      return dataSearch;
    } else {
      return null;
    }
  };
  return {
    dataFilter,
  };
}

export const sortData = (data: any, text: string) => {
  return [...data]
    ?.sort((a, b) => {
      return b[text] - a[text];
    })
    .slice(0, 8)
    .map((item) => ({
      label: item.name,
      value: item[text],
    }));
};

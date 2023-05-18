export const fetcher = async (url: string, options: any) => {
  try {
    const foptions = options ?? {};
    const _options = {
      ...foptions,
      headers: {
        ...(foptions.headers || {}),
      },
    };

    const http = await fetch(url, _options);
    const data = await http.json();
    return data;
  } catch (error) {
    console.error(error)
    return null
  }
}
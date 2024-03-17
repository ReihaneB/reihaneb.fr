export function getStrapiURL(path = '') {
  return `${process.env.API_URL || 'http://localhost:1337'}${path}`;
}

export function getStrapiMedia(url: string) {
  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }

  return `${getStrapiURL()}${url}`;
}

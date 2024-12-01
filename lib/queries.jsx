export const GET_PAINTING_DATA = `
*[_type == "art" && slug.current == $slug][0]{
  title,
  slug,
  description,
  "image": thumbnail.asset->url,
  "originalFilename": thumbnail.asset->originalFilename,
  artist,
  date,
  dimensions,
  sold
}`;

export const GET_LATEST_PAINTINGS = `
*[_type == "art"] | order(_createdAt desc)[0...4]{
    title,
    slug,
    thumbnail{
        asset->{
            _id,
            url
        },
        alt
    }
}`;

export const GET_LATEST_PROJECTS = `
*[_type == "post"] | order(_createdAt desc)[0...4]{
    title,
    slug,
    thumbnail{
        asset->{
            _id,
            url
        },
        alt
    }
 }`;
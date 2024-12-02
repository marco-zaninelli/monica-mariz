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

export const GET_PROJECTS_DATA = `
*[_type == "post"] | order(_createdAt desc){
    title,
    slug,
    categories[]->{
        title
    },
    thumbnail{
        asset->{
            url,
            originalFilename
        }
    }
}`;

export const GET_PROJECT_PAGE_DATA_BY_SLUG = `
*[slug.current == $slug]{
    title,
    _id,
    slug,
    categories[]->{
        _id,
        title
    },
    description,
    location,
    headerImage {
        asset->{
            _id,
            url
        }
    },
    textContent,
    imageContent[]{
        asset->{
            _id,
            url,
            originalFilename
        }
    }
}`
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['cdn.sanity.io'], // Allow Sanity's image domain
    },
};

export default nextConfig;

// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async() => {
    return [
        // {
        //     source: '/redirection',
        //     destination: '/about',
        //     permanent: false
        // },
        {
            source: "/redirection/:id",
            destination: '/',
            permanent: false
        }
    ]
  }
};

export default nextConfig;

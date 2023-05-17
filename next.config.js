/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["i07.xlombard.ru"],
	},
    eslint: {
      ignoreDuringBuilds: true,
    },
	typescript: {
		ignoreBuildErrors: true,
	  },
};

module.exports = nextConfig;

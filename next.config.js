/** @type {import('next').NextConfig} */
const nextConfig = {}

const hostnames= [
  'w0.peakpx.com',
  'mmo.aiircdn.com',
'cdn-az.allevents.in',
'www.georgeamphitheatre.com',]

module.exports = {
  images: {
    remotePatterns: hostnames.map(hostname => ({
        protocol: 'https',
        hostname
    }))
  }
  }

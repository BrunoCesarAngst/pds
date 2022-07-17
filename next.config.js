
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase, { defaultConfig }) => {

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true
  }

  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
  console.log({PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, phase})

  const env = {
    PROJECT_NAME: (() =>{
      if (isDev) return 'mysys_dev'
      return 'sem fase'
    })(),
    NEXT_PUBLIC_API_URL: (() =>{
      if (isDev) return 'http://localhost:3000'
      return 'sem fase'
    })(),
  }

  // next.config.js object
  return {
    env,
    nextConfig,
    output: 'standalone'
  }
}

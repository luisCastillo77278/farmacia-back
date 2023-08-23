export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: 'dev' | 'prod' | 'test'
      PORT: string,
      TYPE_DB: string,
      USERNAME: string,
      PASSW: string,
      HOST: string,
      DATABASE: string,
      URI_DEV: string,
      URI_PROD: string
    }
  }
}
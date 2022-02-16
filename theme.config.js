// theme.config.js
export default {
  footer: <p>MIT 2022 © ely kahn.</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && <meta name="description" content={meta.description} />}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: 'Read More →',
  titleSuffix: null,
  postFooter: null,
  cusdis: {
    appId: 'your_app_id',
    host: 'your_host(optional)',
    lang: 'en'
  },
  darkMode: true,
  navs: [
    {
      url: 'https://github.com/elykahn/nextra-elyio',
      name: 'ely.io'
    }
  ]
}

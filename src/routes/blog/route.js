module.exports = {
  all: () => [{ slug: 'hello-world' }, { slug: 'foo-bar' }],
  permalink: ({ request }) => `/blog/${request.slug}`,
};

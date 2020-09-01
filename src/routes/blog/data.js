module.exports = async ({ request, data }) => {
  return { data: { ...data, title: request.slug } };
};

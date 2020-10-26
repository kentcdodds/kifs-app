module.exports = async function ({ location, params, context: { octokit } }) {
  return Promise.resolve({
    today: Date.now(),
  });
};

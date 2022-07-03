module.exports = function (eleventyConfig) {

  eleventyConfig.addGlobalData("permalink", () => {
    return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });

  eleventyConfig.addPassthroughCopy("src/**/*.js");

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    templateFormats: ['html'],
    htmlTemplateEngine: 'html',
    markdownTemplateEngine: 'html',
  };
};

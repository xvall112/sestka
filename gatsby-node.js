const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  //create page for Workshop
  const rdHouseTemplate = path.resolve('./src/template/RdHouse/House.js');
  const res = await graphql(`
    query rdHouse {
      allContentfulRdHouse {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  res.data.allContentfulRdHouse.edges.forEach(edge => {
    createPage({
      component: rdHouseTemplate,
      path: `/dum/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};

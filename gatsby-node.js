const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  //create page for Workshop
  const rdHouseTemplate = path.resolve('./src/templates/RdHouse/house.js');
  const res = await graphql(`
    query rdHouse {
      allContentfulRdHouse {
        nodes {
          slug
        }
      }
    }
  `);
  res.data.allContentfulRdHouse.nodes.forEach(node => {
    createPage({
      component: rdHouseTemplate,
      path: `/dum/${node.slug}`,
      context: {
        slug: node.slug,
      },
    });
  });
};

exports.onPreInit = () => {
  if (process.argv[2] === 'build') {
    fs.rmdirSync(path.join(__dirname, 'dist'), { recursive: true });
    fs.renameSync(
      path.join(__dirname, 'public'),
      path.join(__dirname, 'public_dev'),
    );
  }
};

exports.onPostBuild = () => {
  fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, 'dist'));
  fs.renameSync(
    path.join(__dirname, 'public_dev'),
    path.join(__dirname, 'public'),
  );
  fse.copySync(
    path.join(__dirname, 'public/assets'),
    path.join(__dirname, 'dist/assets'),
  );
};

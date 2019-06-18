/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

var fs = require("fs");

exports.createPages = async ({ actions: { createPage } }) => {
    // `getPokemonData` is a function that fetches our data
    const companies = JSON.parse(fs.readFileSync('./companies.json', { encoding: 'utf-8' }));

    console.log("Companies", companies);
    // Create a page that lists all Pokémon.
    // createPage({
    //   path: `/comp2`,
    //   component: require.resolve("./src/pages/companies.js"),
    //   context: { companies },  })

      createPage({
        path: `/`,
        component: require.resolve("./src/pages/companies.js"),
        context: { companies },  })
  
    // Create a page for each Pokémon.
    // allPokemon.forEach(pokemon => {
    //   createPage({
    //     path: `/pokemon/${pokemon.name}/`,      component: require.resolve("./src/templates/pokemon.js"),
    //     context: { pokemon },    })
    // })
  }
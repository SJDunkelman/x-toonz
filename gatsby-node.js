exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions
    createTypes(`
        type allSpacesLeaderboardCsv implements Node @dontInfer {
            total_appearances: Int
        }
    `)
}
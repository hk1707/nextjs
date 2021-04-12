import {gql} from "@apollo/client";

const MENU_QUERY =gql`query{
    menus {
        nodes {
        id
        locations
        name
        slug
        count
        menuItems {
            edges {
            node {
                id
                title
                label
                path
                parentId
                childItems {
                edges {
                    node {
                    id
                    label
                    title
                    path
                    }
                }
                }
            }
            }
        }
        }
    }
}`;
export default MENU_QUERY;
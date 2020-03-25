import { gql } from '@apollo/client'

export const GETUSERLIST = gql`
    query {
        users {
            username
        }
    }
`

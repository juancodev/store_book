import { gql } from "graphql-request"


export const createUserMutation = gql`
mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
        customer {
            firstName
            lastName
            email
            phone
            password
        }
        customerUserErrors {
            field
            message
            code
        }
    }
}
`
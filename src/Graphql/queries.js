import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
query Query {

  episodes {
  
    results{
      id
      name
      air_date
      episode
      characters{
        name
        status
        species
        gender
        image
      }
  
    }
  }
}
 `

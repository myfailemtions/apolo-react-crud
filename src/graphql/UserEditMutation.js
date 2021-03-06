
import gql from 'graphql-tag'

export default gql`
	mutation userUpdateMutation($id: ID!, $name: String! $job: String! $age: Int!) {
    updateUser(name: $name, job: $job, age: $age, id: $id) {
      id
			name
      age
      job
    }
	}
`

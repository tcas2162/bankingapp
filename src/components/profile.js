import { Container } from 'react-bootstrap'
import { useContext } from 'react'
import { UserContext} from './usercontext'
import { useParams } from 'react-router'

const Profile = () => {
    const users = useContext(UserContext)[0].users
    const { username } = useParams()

    return (
        <Container className="centered">
            {!users[username]
                ? <div>User {username} does not exist.</div>
                : <div className="card border-primary text-center">
                    <div className="card-header border-primary">
                        <h5 className="card-title">Operations of {username}</h5>
                    </div>
                      <div className="card-body">
                          {users[username].history.length === 0
                              ? <p className="card-text">No user activity yet</p>
                              : <table className="table" verticalalign='middle'>
                                  <thead>
                                      <tr>
                                          <th scope="col">Operation</th>
                                          <th scope="col">Sum $</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {users[username].history.map((item, index) => (
                                         <tr key={index}>
                                             {Object.keys(item)[0] === 'deposit'
                                                 ? <td>Deposit</td>
                                                 : <td>Withdraw</td>
                                             }
                                             <td>{Object.values(item)}</td>
                                         </tr>
                                      ))}
                                  </tbody>
                                  <tfoot>
                                      <tr>
                                          <th>Balance</th>
                                          <th>{users[username].balance}</th>
                                      </tr>
                                  </tfoot>
                              </table>
                          }
                      </div>
                </div>
            }
        </Container>
    )
}
export default Profile
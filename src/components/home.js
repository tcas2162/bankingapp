import { Container } from 'react-bootstrap'

const home = () => <Container className="centered">
    <div className="card border-primary text-center">
      <div className="card-header border-primary">
        <h5 className="card-title">Welcome To Bank Of Timerica</h5>
      </div>
      <div className="card-body">
        <p className="card-text">Trust Tim with all of your money. What could possibly go wrong?!</p>
        <img src="bank.png" className="img-fluid" alt="Bank Of Timerica" />
      </div>
    </div>
</Container>
export default home
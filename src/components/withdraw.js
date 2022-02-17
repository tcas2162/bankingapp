import { Button, Container } from 'react-bootstrap'
import { Field, Form, Formik} from 'formik'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './usercontext'
import * as Yup from 'yup'

function NewComponent({ formik }) {
  return <Form>
  <label className="field" htmlFor="withdraw">Withdrawal Amount</label>
  <Field
      id="withdraw"
      name="withdraw"
      type="number"
      min="1"
      autoComplete="current-withdraw"
      onChange={formik.handleChange}
      value={formik.values.withdraw} />
      {formik.errors.withdraw
          ? <div className="error-validation">{formik.errors.withdraw}</div>
          : null}
      <div className="btn-wrapper">
        {!formik.values.withdraw
            ? <Button variant="button-dark" type="submit" disabled>Withdraw</Button>
            : <Button variant="button-dark" type="submit">Withdraw</Button>}
      </div>
  </Form>;
}

const Withdraw = () => {
const [ctx, setCtx] = useContext(UserContext)
const { users, currentUser } = ctx

const withdraw = sum => {
    setCtx({
      ...ctx,
      users: {
        ...ctx.users,
        [currentUser]: {
          ...ctx.users[currentUser],
          balance: ctx.users[currentUser].balance -=sum,
          history: ctx.users[currentUser].history.concat([ { 'withdraw': sum }])
        }
      },
      currentUser
    })
  }

const validationSchema = Yup.object({
  withdraw: Yup.number()
  .max(Object.keys(users).length === 0
      ? 0
      : users[currentUser].balance, 'Overdraft. You may not withdraw funds beyond your account balance.')
})

return (
  <Container className="centered">
    <div className="card text-center border-primary">
      <div className="card-header border-primary">
        <h5 className="card-title">Withdraw</h5>
      </div>
      {Object.keys(users).length === 0
          ? <div className="new-user">
                <Link to="createaccount">Create an account</Link> to withdraw money.
            </div>
          : <div className="card-body">
              <div className="funds">
                Balance: ${users[currentUser].balance}
              </div>
              <Formik
                  initialValues={{
                      withdraw: ''
                  }}
                  validationSchema={validationSchema}
                  validateOnChange={false}
                  validateOnBlur={false}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    withdraw(parseFloat(values.withdraw))
                    setSubmitting(false)
                    resetForm()
                    setTimeout(() => { alert('Withdrawal successful!') }, 200)
                  }}>
                  {formik => <NewComponent formik={formik} />}
                </Formik>
              </div>}
            </div>
        </Container>
      )
    }
export default Withdraw
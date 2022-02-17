import { UserContext } from './usercontext'
import { useContext } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

const Deposit = () => {

    const [ctx, setCtx] = useContext(UserContext)

    const { users, currentUser } = ctx

    const addDeposit = sum => {
        setCtx({
            ...ctx,
            users: {
                ...ctx.users,
                [currentUser]: {
                    ...ctx.users[currentUser],
                    balance: ctx.users[currentUser].balance += sum,
                    history: ctx.users[currentUser].history.concat([{ 'deposit': sum }])
                }
            },
            currentUser
        })
    }

    return (
        <Container className="centered">
            <div className="card text-center border-primary">
                <div className="card-header border-primary">
                    <h5 className="card-title">Deposit</h5>
                </div>
                {Object.keys(users).length === 0
                    ? <div className="new-user">
                        <Link to="/createaccount">Create an account</Link> to deposit money.
                    </div>
                    : <div className="card-body">
                        <div className="funds">
                            Balance ${users[currentUser].balance}
                        </div>

                        <Formik
                            initialValues={{
                                deposit: ''
                            }}
                            validateOnChange={false}
                            validateOnBlur={false}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                addDeposit(parseFloat(values.deposit))
                                setSubmitting(false)
                                resetForm()
                                setTimeout(() => { alert('Your deposit has been processed successfully!') }, 250)
                            }}>
                            {formik => (
                                <Form>
                                    <label className="field" htmlFor="deposit">Deposit Amount</label>
                                    <Field
                                        id="deposit"
                                        name="deposit"
                                        type="number"
                                        min="1"
                                        onChange={formik.handleChange}
                                        value={formik.values.deposit}
                                        autoComplete="current-deposit" />
                                    <div className="btn-wrapper">
                                        {!formik.values.deposit
                                            ? <Button variant="button-dark" type="submit" disabled>Deposit</Button>
                                            : <Button variant="button-dark" type="submit">Deposit</Button>}
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>}
            </div>
        </Container >
    )
}

export default Deposit
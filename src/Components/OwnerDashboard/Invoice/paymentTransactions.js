import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllPaymentHistory } from '../../Actions/Invoice'
import { Table } from 'react-bootstrap'

export default function PaymentTransactions() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAllPaymentHistory())
    }, [dispatch])

    const paymentHistory = useSelector((state) => state.invoice.paymentHistory)

    const formatDateTime = (dateTimeStr) => {
        const dateTime = new Date(dateTimeStr)
        const date = dateTime.toLocaleDateString()
        const time = dateTime.toLocaleTimeString()
        return { date, time }
    }

    return (
        <div style={{ paddingTop: '70px' }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>TransactionId</th>
                        <th>GoldPrice</th>
                        <th>GoldHarvested</th>
                        <th>Payment Type</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentHistory.map((ele) => (
                        <tr key={ele._id}>
                            <td>{formatDateTime(ele.paymentDate).date}</td>
                            <td>{formatDateTime(ele.paymentDate).time}</td>
                            <td>{ele.transactionId}</td>
                            <td>{ele.goldPrice}</td>
                            <td>{ele.goldHarvested}</td>
                            <td>{ele.paymentType}</td>
                            <td>{ele.amount}</td>
                            <td style = {{color:'green', fontFamily:'Bold'}}>{ele.paymentStatus}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

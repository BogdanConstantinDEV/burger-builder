import React, { useState, useEffect } from 'react'
import axios from '../../axios-orders'
import Order from '../../components/Orders/Order'
import Spinner from '../../components/UI/Spinner/Spinner'

const Orders = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('/orders.json')
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(err => {
                alert(err.message)
                setLoading(false)
            })
    }, [])

    const orders = []
    if (data) {
        const ordersArr = Object.values(data)
        ordersArr.forEach(el => {
            const ingArr = Object.entries(el.ingredients)
            const ingStr = ingArr.map(el => { return el.join(': ') }).join(' | ')
            orders.push(<Order ingredients={ingStr} price={el.price} contactData={el.contactData} key={Math.random()} />)
        })

    }

    let content = <Spinner />
    if (!loading) content = orders

    return <div style={{ width: '80%', margin: '100px auto 0 auto' }}>
        {content}
    </div>

}

export default Orders

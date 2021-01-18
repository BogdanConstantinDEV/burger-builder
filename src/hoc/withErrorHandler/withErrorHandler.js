import React, { useState, useEffect } from 'react'
import Aux from '../Auxiliary/Auxiliary'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return (props) => {
        const [error, setError] = useState(null)

        useEffect(() => {
            const resInterceptor = axios.interceptors.response.use(res => res, err => {
                setError(err)
            })
            const reqInterceptor = axios.interceptors.request.use(req => {
                setError(null)
                return req
            })

            return () => {
                axios.interceptors.response.eject(resInterceptor)
                axios.interceptors.request.eject(reqInterceptor)
            }
        }, [])

        return <Aux>
            <Modal
                show={error}
                closeBack={() => setError(false)}>
                {error ? error.message : null}
            </Modal>
            <WrappedComponent {...props} />
        </Aux>
    }
}

export default withErrorHandler

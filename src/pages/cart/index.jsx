import { Container, Content } from './styles'

import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { ItemsCarts } from '../../components/itemsCarts'
import { Payment } from '../../components/payment'
import { Button } from '../../components/Button'


export function Cart() {
    function replacement() {
        document.getElementById('itemsCarts').classList.add('disabled')
        document.getElementById('payment').classList.remove('disabled')
        document.getElementById('payment').classList.add('active')
    }

    return (
        <Container>
            <Header />

            <Content>
                <div id='itemsCarts'>
                    <ItemsCarts />

                    <Button
                        className='advance'
                        title='Avancar'
                        onClick={replacement}
                    />
                </div>

                <div id='payment' className='disabled'>
                    <Payment />
                </div>

            </Content>
            <Footer />
        </Container>
    )
}
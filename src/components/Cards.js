import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
// import bg from 'public/images/img-1.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Story of Akash and Rini</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem 
                        src='/images/img-1.jpg'
                        text="Beginning of the beautiful journey"
                        label='first'
                        path='/story'
                        />
                        <CardItem 
                        src='images/img-2.jpg'
                        text="Beginning of the beautiful journey"
                        label='second'
                        path='/story'
                        />
                    </ul>
                    <ul className='cards_items'>
                        <CardItem 
                        src='images/img-3.jpg'
                        text="Beginning of the beautiful journey"
                        label='third'
                        path='/story'
                        />
                        <CardItem 
                        src='images/img-4.jpg'
                        text="Beginning of the beautiful journey"
                        label='fourth'
                        path='/story'
                        />
                        <CardItem 
                        src='images/img-5.jpg'
                        text="Beginning of the beautiful journey"
                        label='fifth'
                        path='/story'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

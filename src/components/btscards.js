import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
// import bg from 'public/images/img-1.jpg'

function BCards() {
    return (
        <div className='cards'>
            <h1>BehindTheScenes</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem 
                        src='/images/road.jpg'
                        text="the one where we go on a long road trip on a bike"
                        label='E01'
                        path='/story'
                        />
                        <CardItem 
                        src='/images/movie.jpg'
                        text="the one with the movie binge session"
                        label='E02'
                        path='/story'
                        />
                        <CardItem 
                        src='images/cook.jpg'
                        text="the one where akash cooks for rini"
                        label='E03'
                        path='/story'
                        />
                    </ul>
                    <ul className='cards_items'>
                        <CardItem 
                        src='images/beer.jpg'
                        text="the one with the chilling with beer on a weekend special"
                        label='special'
                        path='/story'
                        />
                        <CardItem 
                        src='images/sight.jpeg'
                        text="the one with the early morning sight seeing"
                        label='E05'
                        path='/story'
                        />
                        <CardItem 
                        src='images/ddance.jpg'
                        text="the one with the crazy drunk dancing"
                        label='E06'
                        path='/story'
                        />
                    </ul>
                    <ul className='cards_items'>
                        <CardItem 
                        src='images/spree.jpg'
                        text="the one where we go on a food spree"
                        label='E07'
                        path='/story'
                        />
                        <CardItem 
                        src='images/dance.jpg'
                        text="the one with the dance class"
                        label='E08'
                        path='/story'
                        />
                        <CardItem 
                        src='images/date.jpg'
                        text="the one with the first date"
                        label='E09'
                        path='/story'
                        />
                    </ul>
                    <ul className='cards_items'>
                        <CardItem 
                        src='images/beach.jpg'
                        text="the one where we go for a beach walk at night"
                        label='special'
                        path='/story'
                        />
                        <CardItem 
                        src='images/vacay.jpg'
                        text="the one when we go on a vacay"
                        label='E11'
                        path='/story'
                        />
                        <CardItem 
                        src='images/study.jpg'
                        text="the one where we study together"
                        label='E12'
                        path='/story'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BCards

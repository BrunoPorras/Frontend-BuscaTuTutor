//  React
import { useState } from 'react'

//  Bootstrap
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import styles from '../../styles/Demo.module.css'
import sombrero from '../../assets/Demo/sombrero.png'
import verificar from '../../assets/Demo/verificar.png'
import src1 from '../../assets/Demo/carrousel1.png'
import src2 from '../../assets/Demo/carrousel2.png'

const items = [
    {
        src: src1,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: src2,
        altText: 'Slide 2',
        caption: 'Slide 2'
    }
]

const Cards = () => { 
    return(
        <div className={styles.cards}>
            <div className={styles.card}>
                <img src={sombrero} alt="Sombrero" />
                <p>¿Cómo elegir tu profesor ideal?</p>
            </div>
            <div className={styles.card}>
                <img src={verificar} alt="Sombrero" />
                <p>¿Cómo verificamos a nuestros profesores?</p>
            </div>
        </div>
    )
}
const Carrousel = () => {

    const [activeIndex, setactiveIndex] = useState(0)
    const [animating, setanimating] = useState(false)

    const next = () => {
        if (animating) return
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
        setactiveIndex(nextIndex)
    }

    const previous = () => {
        if (animating) return
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
        setactiveIndex(nextIndex)
    }

    const goToIndex = (newIndex) => {
        if (animating) return
        setactiveIndex(newIndex)
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setanimating(true)}
                onExited={() => setanimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} width="250px" height="250px" style={{"borderRadius": "20px"}}/>
                <CarouselCaption captionText=''/>
            </CarouselItem>
        )
    })

    return(
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    )
    
}
export { Cards, Carrousel }
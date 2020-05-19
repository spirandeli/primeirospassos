import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Imagem1 from '../../imagens/1.jpeg'
import Imagem2 from '../../imagens/2.jpg'
import Imagem3 from '../../imagens/3.png'
const DemoCarousel = () => (
            <Carousel>
                <div>
                    <img scr={Imagem1} alt="Imagem1"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img scr={Imagem2} alt="Imagem2"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img scr={Imagem3} alt="Imagem3"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );


export default DemoCarousel;





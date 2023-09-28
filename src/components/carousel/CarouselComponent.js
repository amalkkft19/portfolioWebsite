import React , {  useEffect, useState }  from 'react';
import './carousel.scss';
import BackArrow from './BackArrow';
import RightArrow from './RightArrow';


const CarouselComponent = ({renderWidgetImage}) => {

      /**
     * State to disable and hide left arrow button
     */
      const [isLeftBtnActive, DisableLeftBtn] = useState(true);
      /**
       * State to disable and hide right arrow button
       */
      const [isRightBtnActive, DisableRightBtn] = useState(false);
      /**
       * State to disable and hide both scroll button
       */
      const [isHideScrollBtn, hideScrollBtn] = useState(false);
      /**
       * @returns scrollwidth clientwidth scrollleft of carousel container
       */
      const scrollAndClientWidth = ()=>{
  
          const slider = document.querySelector('[data-slider]'); 
          /**
           *  clientWidth :- The visual portion of the box content, not including borders or scroll bars , but includes padding 
           *  ScrollWidth :- The size of all of the box's content, including the parts that are currently hidden outside the scrolling area.
           *  scrollLeft :- The scrollLeft property sets or returns the number of pixels an element's content is scrolled horizontally
           */  
          const { scrollWidth, clientWidth, scrollLeft } = slider;
  
          return { scrollWidth, clientWidth, scrollLeft }
      }
  
      /**
       * function to disable and hide scroll btn according to the scroll begins or end
       */
      const activateButtons = () =>{
          
          const { scrollWidth, clientWidth, scrollLeft } = scrollAndClientWidth();
      
          const scrollableWidth = scrollWidth - clientWidth ;
              if(scrollableWidth === scrollLeft){ 
                  DisableRightBtn(true)
              }else{
                  DisableRightBtn(false);
              };
              if(scrollLeft === 0){ 
                  DisableLeftBtn(true)
              }else{
                  DisableLeftBtn(false);
              };
         
         }
      useEffect(() => {
          const { scrollWidth, clientWidth } = scrollAndClientWidth();
  
          if(clientWidth >= scrollWidth) hideScrollBtn(true);
          if(clientWidth < scrollWidth) hideScrollBtn(false);
  
          setTimeout(() => {
              activateButtons();
             }, 400);
      }, [activateButtons])
    //   (upsellProducts || []).length
  
      useEffect(() => {
          const touchPadSlide = document.querySelector('[data-slider]');
          let timer = null;
          touchPadSlide.addEventListener('scroll', () => {
              if(timer !== null) {
                  clearTimeout(timer);        
              }
              timer = setTimeout(() => {
                  console.log('activating buttons');
                  activateButtons();
              }, 500);
          }, false);
      }, [activateButtons])
     /**
     * function to scroll the carousel by button click
     * @param {prev , next} direction 
     */
     function slide(direction) {
        
        const slider = document.querySelector('[data-slider]');

        const { scrollLeft } = slider;

        const sliderContainer = document.querySelector('[data-slide]');
        /**
         * variable to store the no: of pixel we want to scroll
         */
        let move;
       
        const cardWidth = sliderContainer.getBoundingClientRect().width;
        switch (direction) {
            case 'prev':
                move = scrollLeft - cardWidth;
                break;
            case 'next':
            default:
                move = scrollLeft + cardWidth;
                break;
        }
        /**
         * scrolling the slider
         */
        slider.scroll({
            left: move,
            behavior: 'smooth',
        });

        setTimeout(() => {
         activateButtons();
        }, 300);
        
    }

    return (
        <div className="portfolio--carousel__container portfolio--slider portfolio--slider--fullscreen">
            <nav className={`portfolio--slider__nav ${isHideScrollBtn && 'portfolio--hide__scroll-btn'}`} >
                <button  type="button" disabled={isLeftBtnActive} data-prev onClick={() => slide('prev')}>
                    <BackArrow/>
                </button>
                <button  type="button" disabled={isRightBtnActive} data-next onClick={() => slide('next')}>
                    <RightArrow/>
                </button>
            </nav>
            <div className="portfolio--slider__slides" data-slider>{renderWidgetImage()}</div>
        </div>
        )
};

export default CarouselComponent;

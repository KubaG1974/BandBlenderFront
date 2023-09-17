import ImageBox from '../ImageBox/ImageBox';

const Gallery = () => {
    return (
        <div>
          
              {boxes.map((box, index) => <ImageBox title={box.title} imageurl={box.imageurl} key={index} />)}
              {/* <ul> */}
            {/* {images.map((image, index) => <li key={index}><img src={image}  /></li>)} */}
        {/* </ul> */}
        </div>
        
    )
}
import styles from './ImageBox.module.css'

const ImageBox = ({title, imageurl}) => {
    return(
        <div>
             <img className={styles.image} src={imageurl} />
 
        </div>
       
    )
}

export default ImageBox;
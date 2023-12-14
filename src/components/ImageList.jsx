import React from 'react'

const ImageList = (props) => {
    const images = props.images.map((image) => {
        console.log(props.images)
        return <img key={image.id} src={image.webformatURL} alt="freddyururur" />
    }
    )

  return (
    <div>
        {images}
    </div>
  )
}

export default ImageList

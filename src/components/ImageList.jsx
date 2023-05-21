import  ImageShow  from "./ImageShow";
import './ImageList.css'

export function ImageList({images}) {

	const renderedImages = images.map((image , index) => {
		return <ImageShow image={image} key={index} />
	});

	return (
		<div className="image-list">{renderedImages}</div>
	)
}

export default ImageList;
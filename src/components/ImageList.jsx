import  ImageShow  from "./ImageShow";

export function ImageList({images}) {

	const renderedImages = images.map((image , index) => {
		return <ImageShow image={image} key={index} />
	});

	return (
		<div>{renderedImages}</div>
	)
}

export default ImageList;
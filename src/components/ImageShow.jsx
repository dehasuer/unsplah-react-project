export const ImageShow = ({image}) => {
	return (
		<div>
			<img src={image.urls.small} alt={image.alt_descriotion} />
		</div>
	)
}

export default ImageShow;
const CarouselItem = ({
  srcImg,
  altText,
  titleText,
  desText,
}: {
  srcImg: string;
  altText: string;
  titleText: string;
  desText: string;
}) => {
  return (
    <>
      <div className="carousel-item">
        <img src={srcImg} className="d-block w-100" alt={altText} />
        <div className="carousel-caption d-none d-md-block">
          <h5>{titleText}</h5>
          <p>{desText}</p>
        </div>
      </div>
    </>
  );
};
export default CarouselItem;

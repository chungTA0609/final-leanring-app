import SectionItem from "./SectionItem";
import TitleSection from "./TitleSection";
import TestImage from "../assets/images/products/product-1.png";
const Section = () => {
  const listItem = [
    { imgSrc: TestImage, name: "Blue color T-shirt", price: "41", id: "1" },
    { imgSrc: TestImage, name: "Blue color T-shirt", price: "41", id: "2" },
    { imgSrc: TestImage, name: "Blue color T-shirt", price: "41", id: "3" },
    { imgSrc: TestImage, name: "Blue color T-shirt", price: "41", id: "4" },
  ];
  return (
    <>
      <TitleSection titleSection="Display 1" />
      <div className="row">
        {listItem.map((item) => (
          <SectionItem
            id={item.id}
            imgSrc={item.imgSrc}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};
export default Section;

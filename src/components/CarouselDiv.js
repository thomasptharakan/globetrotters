import { useEffect, useState } from "react";

function CarouselDiv({ imageArray }) {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    let prodArray = [];
    for (let i in imageArray) {
      let prod = {
        imageSrc: imageArray[i],
      };
      prodArray.push(prod);
    }
    setProducts(prodArray);
  }, [imageArray]);

  return (
    <>
      <div className="card w-full mt-2 ">
        <div className="card-body items-center text-center">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt="Country Image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselDiv;

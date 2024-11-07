const Product = ({ product }) => {
    const {
      product_id,
      product_title,
      product_image,
      category,
      price,
      description,
      Specification,
      availability,
      rating,
    } = product;
  
    return (
      <div className="card bg-base-100 w-70 shadow-xl flex flex-col">
        <figure>
          <img
            className="rounded-lg object-cover h-48 w-full"
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="card-body flex-grow flex flex-col justify-between">
          <div>
            <h2 className="card-title text-lg font-bold">{product_title}</h2>
            <p>{price}</p>
          </div>
          <div>
            <button className="btn text-[#9538E2] rounded-2xl border-[#9538E2]">View Details</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Product;
  
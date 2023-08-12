interface Props {
  maxPrice: number;
  setMaxPrice: (price: number) => void;
  setSort: (sort: string) => void;
}

const FilterProduct: React.FC<Props> = ({ maxPrice, setMaxPrice, setSort }) => {
  return (
    <section className="flex-1 sticky h-full top-12 flex flex-col gap-7">
      <div>
        <h3 className="text-xl font-normal mb-5">Product Categories</h3>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input type="checkbox" name="" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" name="" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" name="" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-normal mb-5">Filter by price</h3>
        <div>
          <span>0</span>
          <input
            type="range"
            name=""
            id=""
            min={0}
            max={1000}
            onChange={(e) => {
              setMaxPrice(Number(e.target.value));
            }}
          />
          <span>{maxPrice}</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-normal mb-5">Sort by</h3>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e) => {
                setSort(e.target.value);
              }}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={(e) => {
                setSort(e.target.value);
              }}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterProduct;

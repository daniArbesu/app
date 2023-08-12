import fetchAPI from '@/utils/fetchAPI';

interface Props {
  category: string;
}

const FilterProductCategory: React.FC<Props> = async ({ category }) => {
  const apiExtension = `/subcategories?[filters][categories]=${category}`;

  const subcategories = await fetchAPI(apiExtension);

  return (
    <section>
      <h3 className="text-xl font-normal mb-5">Product Categories</h3>
      <div className="flex flex-col gap-2">
        {subcategories?.map((subcategory) => (
          <div className="flex gap-2" key={subcategory.id}>
            <input type="checkbox" id={subcategory.id.toString()} value={subcategory.id} />
            <label htmlFor="1">{subcategory.attributes.title}</label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilterProductCategory;

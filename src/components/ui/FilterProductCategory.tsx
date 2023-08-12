import fetchAPI from '@/utils/fetchAPI';

interface Props {
  category: string;
  subcategories: string[] | [];
  setSubcategories: (subcategory: string[] | []) => void;
}

const FilterProductCategory: React.FC<Props> = async ({
  category,
  setSubcategories,
  subcategories
}) => {
  const apiExtension = `/subcategories?[filters][categories]=${category}`;

  const categorySubcategories = await fetchAPI(apiExtension);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSubcategories(
      isChecked ? [...subcategories, value] : subcategories.filter((item) => item !== value)
    );
  };

  return (
    <section>
      <h3 className="text-xl font-normal mb-5">Product Categories</h3>
      <div className="flex flex-col gap-2">
        {categorySubcategories?.map((subcategory) => (
          <div className="flex gap-2" key={subcategory.id}>
            <input
              type="checkbox"
              id={subcategory.id.toString()}
              value={subcategory.id}
              onChange={handleChange}
            />
            <label htmlFor="1">{subcategory.attributes.title}</label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilterProductCategory;

import Filtering from "./filter/Filtering";
import Sorting from "./sort/Sorting";

const Filter_Sort_Parent = ({ store }) => {
  return (
    <>
      <div className="main-filter-content w-[300px] h-auto ">
        <div className="sorting">
          <Sorting store={store} />
        </div>
        <div className="filtering">
          <Filtering store={store} />
        </div>
      </div>
    </>
  );
};

export default Filter_Sort_Parent;

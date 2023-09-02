import React, { useEffect, useState } from "react";
import { ProductCard } from "@/app/components/shared/card";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { data } from "autoprefixer";

const SearchLayout = (props: any) => {
  const { productData = [] } = props;
  const router = useRouter();
  //search state from redux
  const search = useSelector((state: any) => state.search.data);
  useEffect(() => {
    if (search.length <= 0) {
      router.push("/");
    }
  }, []);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    let data: any[] = [];
    search.length > 0 &&
      productData.length > 0 &&
      productData.filter((row: any) => {
        // console.log(row.title.toLowerCase());
        if (row.title.toLowerCase().includes(search.toLowerCase())) {
          data.push(row);
        }
      });
    setFilterData(data);
  }, [search, productData]);
  console.log(filterData, "data");

  return (
    <div className="lg:pl-32 lg:pr-32">
      <div className="pt-6">
        {search.length > 0 && (
          <p className="text-lg">
            {filterData.length > 0 && filterData.length} Items found for &quot;
            {search.toLowerCase()}
            &quot;
          </p>
        )}

        <div className="mt-6 flex gap-10 md:gap-10 lg:gap-20  flex-wrap justify-center lg:justify-normal md:pl-6 lg:pl-0 pb-6">
          {filterData?.length > 0 ? (
            filterData?.map((each: any, i: number) => (
              <div key={i}>
                <ProductCard
                  id={each.id}
                  image={each.image}
                  title={each.title}
                  price={each.price}
                />
              </div>
            ))
          ) : (
            <p className="text-center w-full text-gray-400">
              <strong className="text-xl text-pale-orange">
                Search No Result
              </strong>
              <br /> We are sorry. We cannot find any matches for your search
              term.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchLayout;

{
  /*  */
}

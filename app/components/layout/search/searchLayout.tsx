import React, { useEffect, useState } from "react";
import { ProductCard } from "@/app/components/shared/card";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
const SearchLayout = (props: any) => {
  const { productData = [] } = props;
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const [filterData, setFilterData] = useState<(string | number)[]>([]);
  console.log(search, "q");
  useEffect(() => {
    let data: (string | number)[] = [];
    search &&
      productData.length > 0 &&
      productData.filter((row: any) => {
        if (row.title.toLowerCase().includes(search.toLocaleLowerCase())) {
          data.push(row);
        }
      });

    setFilterData(data);
  }, [search, productData]);

  return (
    <div className="lg:pl-32 lg:pr-32 pb-20 pl-4 pr-4">
      <div className="pt-6">
        {search && (
          <p className="text-lg">
            <b className="text-pale-orange">
              {filterData.length > 0 && filterData.length}
            </b>{" "}
            Items found for &quot;
            <b className="text-pale-orange">{search && search.toLowerCase()}</b>
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

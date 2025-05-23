import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PostSkeleton({ card }) {
  return (
    <>
      {Array(card)
        .fill(0)
        .map((_, index) => (
          <div
            className="xl:w-[1000px] w-[90%] border-black-100 border-2 h-[196] flex flex-col justify-between  gap-[50px] rounded-[30px] p-[30px] "
            key={index}
          >
            <div className="flex justify-between items-start">
              <div className="flex md:flex-col flex-row md:gap-0 gap-3">
                <Skeleton width={300} height={20} />
              </div>
              <div>
                <Skeleton width={100} height={20} />
              </div>
            </div>
            <div className=" flex justify-between  items-center pt-[20px]">
              <div className="flex flex-row  items-center justify-center gap-5">
                <Skeleton circle width={70} height={70} />
                <div className="flex flex-col gap-[1px]">
                  <Skeleton width={100} height={20} />
                  <Skeleton width={100} height={20} />
                </div>
              </div>
              <div className="flex xl:flex-row flex-col gap-5">
                <Skeleton width={200} height={20} />
                <Skeleton width={100} height={20} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default PostSkeleton;

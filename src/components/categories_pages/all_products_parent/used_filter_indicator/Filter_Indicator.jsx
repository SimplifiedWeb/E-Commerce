import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const Filter_Indicator = () => {
  return (
    <>
      <div className="main p-[13px] flex items-center gap-2 flex-wrap">
        <div className="badge w-[fit-content] px-5 py-2 bg-[#e9ecef] rounded-2xl flex items-center justify-center gap-3">
          <span>Samsung</span>
          <button>
            <CloseOutlinedIcon style={{ fontSize: "19px" }} />
          </button>
        </div>
        <div className="badge w-[fit-content] px-5 py-2 bg-[#e9ecef] rounded-2xl flex items-center justify-center gap-3">
          <span>Samsung</span>
          <button>
            <CloseOutlinedIcon style={{ fontSize: "19px" }} />
          </button>
        </div>
        <div className="badge w-[fit-content] px-5 py-2 bg-[#e9ecef] rounded-2xl flex items-center justify-center gap-3">
          <span>Samsung</span>
          <button>
            <CloseOutlinedIcon style={{ fontSize: "19px" }} />
          </button>
        </div>
        <button className="text-red-600 hover:underline">
          Clear all filter
        </button>
      </div>
    </>
  );
};

export default Filter_Indicator;

import Contact_Form from "../contact-form/Contact_Form";
import Contact_Info from "../contact-information/Contact_Info";

const Contact_Parent = () => {
  return (
    <>
      <div className="contact min-h-[80vh]  px-28 relative ">
        <div className="route flex gap-2 absolute top-[4%] left-[6%]">
          <span className="text-[#868686]">Home</span>
          <span className="text-[#868686]">/</span>
          <span>Contact</span>
        </div>
        <div className="flex     absolute top-[12%] left-[15%] ">
          <div className="left flex-3 ">
            <Contact_Info />
          </div>
          <div className="right flex-1">
            <Contact_Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_Parent;

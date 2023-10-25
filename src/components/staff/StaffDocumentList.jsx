import { useState } from "react";
import StaffDocumentListCard from "./StaffDocumentListCard";
import Select from "react-select";
import "../../assets/css/dropdown.css";
import { useGetStaffProfileListQuery } from "../../slices/profileApiSlice";

const StaffDocumentList = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const childProfileListReponse = useGetStaffProfileListQuery();

  const optionList = childProfileListReponse.isSuccess ? childProfileListReponse.data.staffProfiles.map((profile) => ({value: profile.UserId, label: profile.UserName})) : []
  console.log(optionList)

  function handleSelect(data) {
    setSelectedOption(data);
  }

  return (
    <div>
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select Employee"
          value={selectedOption}
          onChange={handleSelect}
        />
      </div>

      {selectedOption ? (
        <div className="document-header">Child ID : {selectedOption.value}</div>
      ) : (
        <div></div>
      )}
      {selectedOption ? (
        <StaffDocumentListCard staffId={selectedOption.value} />
      ) : (
        <div className="document-header">
          You did not select a child. Please select one
        </div>
      )}
    </div>
  );
};

export default StaffDocumentList;

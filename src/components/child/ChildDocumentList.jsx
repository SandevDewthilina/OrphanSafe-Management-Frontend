import { useState } from "react";
import ChildDocumentListCard from "./ChildDocumentListCard";
import Select from "react-select";
import { useGetChildProfileNameListQuery } from "../../slices/profileApiSlice";

const ChildDocumentList = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const childProfileListReponse = useGetChildProfileNameListQuery();

  const optionList = childProfileListReponse.isSuccess ? childProfileListReponse.data.childProfileNameList.map((profile) => ({value: profile.Id, label: profile.FullName})) : []
  console.log(optionList)

  function handleSelect(data) {
    setSelectedOption(data);
  }

  return (
    <div>
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select the child"
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
        <ChildDocumentListCard childId={selectedOption.value} />
      ) : (
        <div className="document-header">
          You did not select a child. Please select one
        </div>
      )}
    </div>
  );
};

export default ChildDocumentList;

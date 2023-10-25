import ParentDocumentListCard from "../../components/external-party/parentDocumentListCard";
import Select from "react-select";
import { useGetParentProfileListQuery } from "../../slices/profileApiSlice";
import { useState } from "react";

const ParentDocumentList = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const childProfileListReponse = useGetParentProfileListQuery();

  const optionList = childProfileListReponse.isSuccess
    ? childProfileListReponse.data.parentsProfiles.map((profile) => ({
        value: profile.UserId,
        label: profile.name,
      }))
    : [];
  console.log(optionList);

  function handleSelect(data) {
    setSelectedOption(data);
  }
  return (
    <div>
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select the Parent"
          value={selectedOption}
          onChange={handleSelect}
        />
      </div>

      {selectedOption ? (
        <div className="document-header">
          User ID : {selectedOption.value}
        </div>
      ) : (
        <div></div>
      )}
      {selectedOption ? (
        <ParentDocumentListCard parentId={selectedOption.value} />
      ) : (
        <div className="document-header">
          You didn't select a Parent. Please select one
        </div>
      )}
    </div>
  );
};

export default ParentDocumentList;

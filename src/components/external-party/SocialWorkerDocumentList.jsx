import { useState } from "react";
import SocialWorkerDocumentListCard from "../../components/external-party/SocialWorkerDocumentListCard";
import Select from "react-select";
import { useGetSocialWorkerProfileListQuery } from "../../slices/profileApiSlice";

const SocialWorkerDocumentList = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const childProfileListReponse = useGetSocialWorkerProfileListQuery();

  const optionList = childProfileListReponse.isSuccess
    ? childProfileListReponse.data.socialWorkerProfiles.map((profile) => ({
        value: profile.workerId,
        label: profile.Name,
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
          placeholder="Select the Social Worker"
          value={selectedOption}
          onChange={handleSelect}
        />
      </div>

      {selectedOption ? (
        <div className="document-header">
          Social Worker ID : {selectedOption.value}
        </div>
      ) : (
        <div></div>
      )}
      {selectedOption ? (
        <SocialWorkerDocumentListCard socialworkerId={selectedOption.value} />
      ) : (
        <div className="document-header">
          You didn't select a social worker. Please select one
        </div>
      )}
    </div>
  );
};

export default SocialWorkerDocumentList;

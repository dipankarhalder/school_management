import { NotAuth } from "../../../Shared/NotAuth";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";

export const AdmissionPage = () => {
  return (
    <AppMainLayoutCover>
      <AppTableDataInformation>
        <NotAuth />
      </AppTableDataInformation>
    </AppMainLayoutCover>
  );
};

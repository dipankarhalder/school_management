import { NotAuth } from "../../../Shared/NotAuth";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";

export const HumanResourcesPage = () => {
  return (
    <AppMainLayoutCover>
      <AppTableDataInformation>
        <NotAuth />
      </AppTableDataInformation>
    </AppMainLayoutCover>
  );
};

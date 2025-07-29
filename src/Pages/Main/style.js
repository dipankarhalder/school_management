import styled from "styled-components";

export const AppMainLayoutCover = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

export const AppTableDataInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 0;

  .under_construction {
    display: flex;
    height: 200px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.sidebar};
    border: 1px solid ${({ theme }) => theme.colors.tableborder};

    & > h3 {
      font-size: 19px;
      font-weight: 700;
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.black};
    }

    & > p {
      text-align: center;
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 2px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const ApplicationCoverContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const AppMainPageHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const AppContentDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.tableborder};
`;

export const AppDashboardCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 24px 0;

  .app_dashobard_heading {
    width: 100%;
    margin-bottom: 20px;

    h1 {
      font-size: 21px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.black};

      & > span {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.btnbg};
      }
    }

    & > p {
      font-size: 15px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.bodytext};
    }
  }

  .app_init_dashboard {
    width: 100%;
    display: flex;

    & > ul {
      width: 100%;
      display: flex;
      gap: 16px;

      & > li {
        width: 19%;

        .app_child_inside {
          position: relative;
          background: ${({ theme }) => theme.colors.sidebar};
          border: 1px solid ${({ theme }) => theme.colors.exborder};
          box-shadow: ${({ theme }) => theme.colors.boxshadow};
          border-radius: 6px;
          padding: 10px 16px;
          overflow: hidden;

          & > span {
            position: absolute;
            top: 50%;
            right: -40px;
            width: 100px;
            height: 100px;
            opacity: 0.36;
            color: white;
            transform: translateY(-50%);

            & > svg {
              width: 100px;
              height: 100px;
            }
          }

          & > p {
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .app_icontext {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;

            & > h6 {
              font-size: 19px;
              font-weight: 700;
              line-height: 20px;
            }

            & > span {
              font-size: 12px;
              font-weight: 600;
              line-height: 20px;
              color: ${({ theme }) => theme.colors.dgray};
            }
          }

          &.app_collection {
            background: #e3c9f9;
            border: 1px solid #7c38b6;

            .app_icontext h6 {
              color: #7c38b6;
            }
          }

          &.app_expense {
            background: #f6e2c9;
            border: 1px solid #9f6214;

            .app_icontext h6 {
              color: #9f6214;
            }
          }

          &.app_teacher {
            background: #ffe7e7;
            border: 1px solid #bb0a0a;

            .app_icontext h6 {
              color: #bb0a0a;
            }
          }

          &.app_non_teacher {
            background: #b5f2ff;
            border: 1px solid #0a7890;

            .app_icontext h6 {
              color: #0a7890;
            }
          }

          &.app_student {
            background: #def8c9;
            border: 1px solid #42870a;

            .app_icontext h6 {
              color: #42870a;
            }
          }
        }
      }
    }
  }

  .app_overview_graph {
    display: flex;
    width: 100%;
    margin-top: 30px;
    gap: 16px;

    .app_revenue_overview {
      width: 50%;
      display: flex;
      border-radius: 6px;
      padding: 12px 13px;
      flex-direction: column;
      border: 1px solid ${({ theme }) => theme.colors.tableborder};

      .app_rev_heading {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;

        h3 {
          font-size: 14px;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.black};
        }

        select {
          height: 26px;
          padding: 0 7px 0 6px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 12px;
          border: 1px solid ${({ theme }) => theme.colors.tableborder};
        }
      }
    }
  }
`;

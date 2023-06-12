import styled from 'styled-components'

export const WrapTable = styled.table`
  width: 100%;

  .arrow {
    margin-left: 0.688rem;
  }

  .title{
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  .link{
    font-size: 1rem;
    line-height: 1.5rem;
    color: #5BB4E5;
  }

  .subtitle{
    font-size: 0.75rem;
    line-height: 1.312rem;
    color: #4D5E80;
  }

  thead{
    vertical-align: bottom;
  }

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
    td {
      font-size: 0.875rem;
      line-height: 21px;
    }
    .td-subtitle{
      font-size: 0.75rem;
      line-height: 1.312rem;
    }
  }

  th {
    color: #000;
    font-weight: bold;
    border-bottom: 2px solid #EFEFF8;
    padding-bottom: 2.5rem;
    padding-top: 1rem;
    text-align: left;
    padding-right: 5rem;

    .th-container {
      display: flex; 
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }

  td {
    padding: 1rem 0.75rem 1rem 0;
    border-bottom: 0.125rem solid #EFEFF8;
  }

`;
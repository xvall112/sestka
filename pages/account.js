/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import { NoSsr } from '@material-ui/core';
import Account from 'views/Account';
import Main from 'layouts/Main';

const AccountPage = () => {
  return (
    <div className="container">
      <Main>
        <NoSsr>
          <Account />
        </NoSsr>
      </Main>
    </div>
  )
};

export default AccountPage;

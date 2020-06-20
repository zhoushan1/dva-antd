import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.less';
import LayoutFc from '../components/layout';

function IndexPage() {
  return (
    <LayoutFc/>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

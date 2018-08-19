import React from 'react';
import { connect } from 'dva';
import { Button }  from 'antd';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Button>没错，这里就是dva首页，只有这么一个按钮</Button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

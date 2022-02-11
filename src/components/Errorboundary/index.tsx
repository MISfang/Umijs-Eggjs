import { FC, useState } from 'react';

const index: FC = (props) => {
  const [flag, setFlag] = useState(false);
  return <>{flag ? <h1></h1> : props.children}</>;
};

export default index;

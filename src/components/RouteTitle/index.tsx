import { FC, useEffect } from 'react';

import Helmet from 'react-helmet';
import { useHistory } from 'react-router-dom';

const RouteTitle: FC = () => {
  const history = useHistory();

  useEffect(() => {
    history.listen((location) => {
      console.log({ location });
      console.log(`You changed the page to: ${location}`, location);
    });
  }, [history]);

  const title = '';
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default RouteTitle;

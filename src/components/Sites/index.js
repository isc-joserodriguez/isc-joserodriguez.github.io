import React from 'react';

import classes from './index.module.css';

const Sites = ({ sites }) => (
  <>
    {sites.map(site => (
      <a className={`${classes.Site} h2`} key={site.id} href={site.url} target='_blank' rel='noreferrer'>{<site.icon />}</a>
    ))}
  </>
)

export default Sites;
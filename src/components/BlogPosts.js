import React from 'react';


export default () => (
  <aside className="blog aside section">
    <div className="section-inner">
      <h2 className="heading">Latest Blog Posts</h2>
      <p>You can use Sascha Depold <a href="https://github.com/sdepold/jquery-rss" target="_blank" rel="noopener noreferrer">jQuery RSS plugin</a> to pull in your blog post feeds.</p>
      <div id="rss-feeds" className="content" />
    </div>
  </aside>
);


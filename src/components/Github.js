import React from 'react';

import LoadingSpinner from './LoadingSpinner';

export default () => (
  <div>
    <section className="github section">
      <div className="section-inner">
        <h2 className="heading">My GitHub</h2>
        <div id="ghfeed" className="ghfeed">
          <LoadingSpinner
            loading
            loadingMessage="GitHub activity is loading..."
            loadingMessageStyle={{ textAlign: 'center', marginTop: '1em' }}
            fadeIn
            id="github-activity-spinner"
          />
        </div>
      </div>
    </section>
  </div>
);

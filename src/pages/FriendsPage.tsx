import React from 'react';
import Friends from '../components/Friends';
import PageAnalytics from '../components/PageAnalytics';

const FriendsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mt-24 mb-4">
          <h1 className="text-4xl font-bold mb-3">Friends</h1>
          <PageAnalytics />
        </div>
      </div>
      <Friends />
    </div>
  );
};

export default FriendsPage; 
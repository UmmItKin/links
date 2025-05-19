import React from 'react';
import Friends from '../components/Friends';
import PageAnalytics from '../components/PageAnalytics';
import GiscusComments from '../components/Giscus';

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
      
      {/* Giscus comments */}
      <div className="container mx-auto px-4 mt-16">
        <div className="border-t border-gray-700/30 pt-8">
          <h2 className="text-2xl font-bold mb-6">Comments</h2>
          <GiscusComments pageTitle="Friends Page :)" />
        </div>
      </div>
    </div>
  );
};

export default FriendsPage; 
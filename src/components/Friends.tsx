import { FaGithub } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

interface Friend {
  image: string;
  name: string;
  url: string;
  github: string;
}

const friendsList: Friend[] = [
  {
    image: "https://avatars.githubusercontent.com/u/101975746?v=4",
    name: "Lemon",
    url: "https://blog.alvin-tw.me/",
    github: "https://github.com/LemonTeatw1"
  },
  {
    image: "https://avatars.githubusercontent.com/u/9584270?v=4",
    name: "holla",
    url: "https://hollacs.github.io/",
    github: "https://github.com/hollacs"
  },
  {
    image: "https://avatars.githubusercontent.com/u/107759974?v=4",
    name: "ChiLin.H",
    url: "https://neko70.net/",
    github: "https://github.com/qilin102223"
  },
  {
    image: "https://avatars.githubusercontent.com/u/135571477?v=4",
    name: "Frank",
    url: "http://frankk.uk/",
    github: "https://github.com/Frank-Kam"
  },
  {
    image: "https://avatars.githubusercontent.com/u/115418645?v=4",
    name: "Elliot",
    url: "https://elliot-tw.me/",
    github: "https://github.com/Elliot-32"
  },
  {
    image: "https://avatars.githubusercontent.com/u/132590659?v=4",
    name: "Yochan",
    url: "https://yochan06.github.io/",
    github: "https://github.com/yochan06"
  },
  {
    image: "https://avatars.githubusercontent.com/u/161041270?v=4",
    name: "Kohiro",
    url: "https://github.com/kohiro961021",
    github: "https://github.com/kohiro961021"
  },
  {
    image: "https://avatars.githubusercontent.com/u/150093538?v=4",
    name: "Robin",
    url: "https://robin-tw.me/",
    github: "https://github.com/cxk228922"
  },
];

function FriendCard({ friend }: { friend: Friend }) {
  return (
    <div className="friend-card bg-background/80 backdrop-blur-[10px] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-background/90">
      <div className="p-8 flex flex-col items-center">
        <img 
          src={friend.image} 
          alt={`${friend.name}'s avatar`} 
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-primary/30 hover:border-primary transition-all duration-300"
        />
        <h3 className="mt-6 text-2xl font-bold text-center">{friend.name}</h3>
        <div className="mt-4 flex gap-4">
          {friend.github && (
            <a 
              href={friend.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full text-white px-1 hover:text-primary transition-transform duration-200 transform hover:scale-105"
              aria-label={`${friend.name}'s GitHub`}
            >
              <FaGithub className="w-6 h-6" />
            </a>
          )}
          <a 
            href={friend.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full text-white px-1 hover:text-primary transition-transform duration-200 transform hover:scale-105"
            aria-label={`${friend.name}'s Website`}
          >
            <FiGlobe className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Friends() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {friendsList.map((friend, index) => (
          <FriendCard key={index} friend={friend} />
        ))}
      </div>
    </div>
  );
}

export default Friends; 
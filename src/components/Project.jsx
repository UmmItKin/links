import React, { useState, useEffect } from 'react';
import languageColors from '../languageColors.json';

function Project() {
  const [repos, setRepos] = useState([]);
  const repositoryUsername = "UmmIt";

  useEffect(() => {
    fetch(`https://codeberg.org/api/v1/users/${repositoryUsername}/repos`)
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [repositoryUsername]);

  if (repos.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center my-8">My Projects - Fetching via Codeberg API</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {repos.map(repo => (
            <div key={repo.id} className="card bg-base-500 shadow-xl">
              <figure>
                <img src="/project/cover_golang.png" alt="golang" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{repo.full_name}</h2>
                <p>{repo.description}</p>
                <div className="card-actions justify-start">
                  <div className="badge-info badge" style={{ backgroundColor: languageColors[repo.language] }}>
                    {repo.language}
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button
                    className="btn badge-info badge"
                    style={{backgroundColor: languageColors[repo.language]}}
                    onClick={() =>
                      document.getElementById(`my_modal_${repo.id}`).showModal()
                    }
                  >
                    Learn more
                  </button>
                  <dialog id={`my_modal_${repo.id}`} className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Repository:</h3>
                      <p className="">
                        <a
                          className="link link-info"
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {repo.html_url}
                        </a>
                      </p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;


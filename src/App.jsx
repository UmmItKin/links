import React from "react";
import "./App.css";

const _gitlab_url = "https://gitlab.com/UmmIt";
const _github_url = "https://github.com/UmmItC";
const _mail_address = "hi@ummit.dev";

function App() {
  return (
    <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <label className="swap swap-flip text-9xl pb-5">
            <input type="checkbox" />
            <div className="swap-on">
              <img width="150" height="150" src="/archlinux.svg" />
            </div>
            <div className="swap-off">
              <img width="150" height="150" src="/gentoo.svg" />
            </div>
          </label>

          <h1 className="text-5xl font-bold">UmmIt :D</h1>

          <p className="py-6">
            Further information about me can be found on this site. It includes
            details of my skills, contacts and other relevant information.
          </p>

          <div class="flex flex-wrap justify-center">

            <div class="px-1">
              <a class="btn btn-ghost btn-circle fill-stroke text-gray-500 hover:text-blue-500" href={_gitlab_url} target="_blank">
                <svg
                  class="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
                </svg>
              </a>
            </div>
            <div class="px-1">
              <a class="btn btn-ghost btn-circle fill-stroke text-gray-500 hover:text-blue-500" href={_github_url} target="_blank">
                <svg
                  class="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                  </path>
                </svg>
              </a>
            </div>

            <div class="px-1">
              <a class="btn btn-ghost btn-circle fill-stroke text-gray-500 hover:text-blue-500" href={"mailto:" + _mail_address}>
                <svg
                  class="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

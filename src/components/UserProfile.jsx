import React from "react";
import Company from "./Company";
import Website from "./Website";
import Twitter from "./Twitter";
import Location from "./Location";

const UserProfile = ({ data, date, theme }) => {
  return (
    <div className={!theme ? "userProfile" : "userProfile-dark"}>
      <img
        className="logo"
        src="https://avatars.githubusercontent.com/u/75989864?v=4"
      ></img>
      <div className="title-date">
        <p className={!theme ? "title" : "title-dark"}>
          {data.name ? data.name : "Not Available"}
        </p>
        <p className={!theme ? "date" : "date-dark"}>
          joined {!date ? "16 july 2020" : date}
        </p>
      </div>
      <p className="username">@{data.login ? data.login : "Not Available"}</p>
      <p className={!theme ? "bio" : "bio-dark"}>
        {data.bio ? data.bio : "This profile has no bio"}.
      </p>
      <div className={!theme ? "repoinfo" : "repoinfo-dark"}>
        <div className="repo">
          <label htmlFor="repo">repos</label>
          <p name="repo">{!data.public_repos ? 0 : data.public_repos}</p>
        </div>
        <div className="followers">
          <label htmlFor="followers">followers</label>
          <p name="followers">{!data.followers ? 0 : data.followers}</p>
        </div>
        <div className="following">
          <label htmlFor="following">following</label>
          <p name="following">{!data.following ? 0 : data.following}</p>
        </div>
      </div>
      <div className={!theme ? "socialinfo" : "socialinfo-dark"}>
        <div className="location-twitter">
          <div className="location">
            <Location theme={theme} />
            <p>{data.location == null ? "Not Available" : data.location}</p>
          </div>
          <div className="twitter">
            <Twitter theme={theme} />
            <p>
              {data.twitter_username == null
                ? "Not Available"
                : data.twitter_username}
            </p>
          </div>
        </div>
        <div className="company-blog">
          <div className="blog">
            <Website theme={theme} />
            <p>
              {data.blog == null || data.blog == ""
                ? "Not Available"
                : data.blog}
            </p>
          </div>
          <div className="company">
            <Company theme={theme} />
            <p>{data.company == null ? "Not Available" : data.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

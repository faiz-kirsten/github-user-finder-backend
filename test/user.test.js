import { expect } from "chai";
import request from "request";

// Dummy data
const username = "emetdas";
const expectedUserData = {
    login: "emetdas",
    id: 72676990,
    node_id: "MDQ6VXNlcjcyNjc2OTkw",
    avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/emetdas",
    html_url: "https://github.com/emetdas",
    followers_url: "https://api.github.com/users/emetdas/followers",
    following_url:
        "https://api.github.com/users/emetdas/following{/other_user}",
    gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
    starred_url: "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/emetdas/subscriptions",
    organizations_url: "https://api.github.com/users/emetdas/orgs",
    repos_url: "https://api.github.com/users/emetdas/repos",
    events_url: "https://api.github.com/users/emetdas/events{/privacy}",
    received_events_url: "https://api.github.com/users/emetdas/received_events",
    type: "User",
    site_admin: false,
    name: "Emet Das",
    company: "codsfli",
    blog: "https://codsfli.com/",
    location: "Chittagong , Bangladesh",
    email: null,
    hireable: true,
    bio: "I'm a professional full-stack developer with 4+ years of experience in web design, and web development.",
    twitter_username: "DasEmet",
    public_repos: 86,
    public_gists: 0,
    followers: 78,
    following: 0,
    created_at: "2020-10-11T01:20:35Z",
    updated_at: "2023-11-10T12:55:25Z",
};
const expectedUserRepos = [
    {
        id: 303028775,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDMwMjg3NzU=",
        name: "-css-flipping-card",
        full_name: "emetdas/-css-flipping-card",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/-css-flipping-card",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/-css-flipping-card",
        forks_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/collaborators{/collaborator}",
        teams_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/teams",
        hooks_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/branches{/branch}",
        tags_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/deployments",
        created_at: "2020-10-11T02:40:59Z",
        updated_at: "2020-10-11T02:42:41Z",
        pushed_at: "2020-10-11T02:42:18Z",
        git_url: "git://github.com/emetdas/-css-flipping-card.git",
        ssh_url: "git@github.com:emetdas/-css-flipping-card.git",
        clone_url: "https://github.com/emetdas/-css-flipping-card.git",
        svn_url: "https://github.com/emetdas/-css-flipping-card",
        homepage: null,
        size: 1,
        stargazers_count: 1,
        watchers_count: 1,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 307124917,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDcxMjQ5MTc=",
        name: "25oct",
        full_name: "emetdas/25oct",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/25oct",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/25oct",
        forks_url: "https://api.github.com/repos/emetdas/25oct/forks",
        keys_url: "https://api.github.com/repos/emetdas/25oct/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/25oct/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/25oct/teams",
        hooks_url: "https://api.github.com/repos/emetdas/25oct/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/25oct/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/25oct/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/25oct/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/25oct/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/25oct/tags",
        blobs_url: "https://api.github.com/repos/emetdas/25oct/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/25oct/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/25oct/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/emetdas/25oct/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/25oct/statuses/{sha}",
        languages_url: "https://api.github.com/repos/emetdas/25oct/languages",
        stargazers_url: "https://api.github.com/repos/emetdas/25oct/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/25oct/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/25oct/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/25oct/subscription",
        commits_url: "https://api.github.com/repos/emetdas/25oct/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/25oct/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/25oct/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/25oct/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/25oct/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/25oct/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/25oct/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/25oct/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/emetdas/25oct/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/25oct/issues{/number}",
        pulls_url: "https://api.github.com/repos/emetdas/25oct/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/25oct/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/25oct/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/emetdas/25oct/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/25oct/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/25oct/deployments",
        created_at: "2020-10-25T15:06:46Z",
        updated_at: "2020-10-27T01:59:59Z",
        pushed_at: "2020-10-25T15:38:18Z",
        git_url: "git://github.com/emetdas/25oct.git",
        ssh_url: "git@github.com:emetdas/25oct.git",
        clone_url: "https://github.com/emetdas/25oct.git",
        svn_url: "https://github.com/emetdas/25oct",
        homepage: null,
        size: 4434,
        stargazers_count: 2,
        watchers_count: 2,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 2,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 435507101,
        node_id: "R_kgDOGfVPnQ",
        name: "3D-flip-box",
        full_name: "emetdas/3D-flip-box",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/3D-flip-box",
        description: "3D Box Hover Effect",
        fork: false,
        url: "https://api.github.com/repos/emetdas/3D-flip-box",
        forks_url: "https://api.github.com/repos/emetdas/3D-flip-box/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/3D-flip-box/teams",
        hooks_url: "https://api.github.com/repos/emetdas/3D-flip-box/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/3D-flip-box/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/3D-flip-box/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/3D-flip-box/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/3D-flip-box/deployments",
        created_at: "2021-12-06T13:27:31Z",
        updated_at: "2021-12-06T13:36:45Z",
        pushed_at: "2021-12-06T13:36:42Z",
        git_url: "git://github.com/emetdas/3D-flip-box.git",
        ssh_url: "git@github.com:emetdas/3D-flip-box.git",
        clone_url: "https://github.com/emetdas/3D-flip-box.git",
        svn_url: "https://github.com/emetdas/3D-flip-box",
        homepage: "",
        size: 420,
        stargazers_count: 0,
        watchers_count: 0,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["css", "css-animations", "css-transitions"],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 434815640,
        node_id: "R_kgDOGerCmA",
        name: "Accordion",
        full_name: "emetdas/Accordion",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/Accordion",
        description: "Responsive Accordion HTML & CSS only",
        fork: false,
        url: "https://api.github.com/repos/emetdas/Accordion",
        forks_url: "https://api.github.com/repos/emetdas/Accordion/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/Accordion/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/Accordion/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/Accordion/teams",
        hooks_url: "https://api.github.com/repos/emetdas/Accordion/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/Accordion/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/Accordion/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/Accordion/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/Accordion/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/Accordion/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/Accordion/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/Accordion/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/Accordion/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/Accordion/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/Accordion/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/Accordion/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/Accordion/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/Accordion/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/Accordion/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/Accordion/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/Accordion/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/Accordion/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/Accordion/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/Accordion/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/Accordion/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/Accordion/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/Accordion/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/Accordion/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/Accordion/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/Accordion/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/Accordion/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/Accordion/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/Accordion/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/Accordion/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/Accordion/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/Accordion/deployments",
        created_at: "2021-12-04T05:29:53Z",
        updated_at: "2021-12-04T06:33:29Z",
        pushed_at: "2021-12-04T06:33:26Z",
        git_url: "git://github.com/emetdas/Accordion.git",
        ssh_url: "git@github.com:emetdas/Accordion.git",
        clone_url: "https://github.com/emetdas/Accordion.git",
        svn_url: "https://github.com/emetdas/Accordion",
        homepage: "",
        size: 2,
        stargazers_count: 0,
        watchers_count: 0,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["css", "html"],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 303408144,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDM0MDgxNDQ=",
        name: "active-nav-css",
        full_name: "emetdas/active-nav-css",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/active-nav-css",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/active-nav-css",
        forks_url: "https://api.github.com/repos/emetdas/active-nav-css/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/active-nav-css/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/active-nav-css/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/active-nav-css/teams",
        hooks_url: "https://api.github.com/repos/emetdas/active-nav-css/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/active-nav-css/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/active-nav-css/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/active-nav-css/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/active-nav-css/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/active-nav-css/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/active-nav-css/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/active-nav-css/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/active-nav-css/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/active-nav-css/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/active-nav-css/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/active-nav-css/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/active-nav-css/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/active-nav-css/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/active-nav-css/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/active-nav-css/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/active-nav-css/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/active-nav-css/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/active-nav-css/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/active-nav-css/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/active-nav-css/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/active-nav-css/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/active-nav-css/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/active-nav-css/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/active-nav-css/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/active-nav-css/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/active-nav-css/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/active-nav-css/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/active-nav-css/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/active-nav-css/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/active-nav-css/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/active-nav-css/deployments",
        created_at: "2020-10-12T13:54:38Z",
        updated_at: "2020-10-27T02:00:12Z",
        pushed_at: "2020-10-12T14:19:16Z",
        git_url: "git://github.com/emetdas/active-nav-css.git",
        ssh_url: "git@github.com:emetdas/active-nav-css.git",
        clone_url: "https://github.com/emetdas/active-nav-css.git",
        svn_url: "https://github.com/emetdas/active-nav-css",
        homepage: null,
        size: 89248,
        stargazers_count: 2,
        watchers_count: 2,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 2,
        default_branch: "main",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 405299269,
        node_id: "MDEwOlJlcG9zaXRvcnk0MDUyOTkyNjk=",
        name: "appo-web",
        full_name: "emetdas/appo-web",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/appo-web",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/appo-web",
        forks_url: "https://api.github.com/repos/emetdas/appo-web/forks",
        keys_url: "https://api.github.com/repos/emetdas/appo-web/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/appo-web/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/appo-web/teams",
        hooks_url: "https://api.github.com/repos/emetdas/appo-web/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/appo-web/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/appo-web/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/appo-web/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/appo-web/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/appo-web/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/appo-web/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/appo-web/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/appo-web/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/appo-web/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/appo-web/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/appo-web/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/appo-web/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/appo-web/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/appo-web/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/appo-web/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/appo-web/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/appo-web/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/appo-web/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/appo-web/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/appo-web/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/appo-web/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/appo-web/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/appo-web/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/appo-web/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/appo-web/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/appo-web/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/appo-web/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/appo-web/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/appo-web/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/appo-web/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/appo-web/deployments",
        created_at: "2021-09-11T06:09:52Z",
        updated_at: "2021-12-07T16:54:35Z",
        pushed_at: "2021-12-07T16:54:31Z",
        git_url: "git://github.com/emetdas/appo-web.git",
        ssh_url: "git@github.com:emetdas/appo-web.git",
        clone_url: "https://github.com/emetdas/appo-web.git",
        svn_url: "https://github.com/emetdas/appo-web",
        homepage: "",
        size: 6440,
        stargazers_count: 1,
        watchers_count: 1,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["javascript"],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 332787013,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzI3ODcwMTM=",
        name: "b2bleadstaff",
        full_name: "emetdas/b2bleadstaff",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/b2bleadstaff",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/b2bleadstaff",
        forks_url: "https://api.github.com/repos/emetdas/b2bleadstaff/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/b2bleadstaff/teams",
        hooks_url: "https://api.github.com/repos/emetdas/b2bleadstaff/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/b2bleadstaff/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/b2bleadstaff/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/b2bleadstaff/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff/deployments",
        created_at: "2021-01-25T15:11:58Z",
        updated_at: "2021-07-01T13:54:41Z",
        pushed_at: "2021-01-30T06:19:35Z",
        git_url: "git://github.com/emetdas/b2bleadstaff.git",
        ssh_url: "git@github.com:emetdas/b2bleadstaff.git",
        clone_url: "https://github.com/emetdas/b2bleadstaff.git",
        svn_url: "https://github.com/emetdas/b2bleadstaff",
        homepage: null,
        size: 9,
        stargazers_count: 1,
        watchers_count: 1,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 303418348,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDM0MTgzNDg=",
        name: "b2bleadstaff.com",
        full_name: "emetdas/b2bleadstaff.com",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/b2bleadstaff.com",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/b2bleadstaff.com",
        forks_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/collaborators{/collaborator}",
        teams_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/teams",
        hooks_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/b2bleadstaff.com/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/b2bleadstaff.com/deployments",
        created_at: "2020-10-12T14:31:09Z",
        updated_at: "2020-10-27T02:00:09Z",
        pushed_at: "2020-10-12T14:34:39Z",
        git_url: "git://github.com/emetdas/b2bleadstaff.com.git",
        ssh_url: "git@github.com:emetdas/b2bleadstaff.com.git",
        clone_url: "https://github.com/emetdas/b2bleadstaff.com.git",
        svn_url: "https://github.com/emetdas/b2bleadstaff.com",
        homepage: null,
        size: 1531,
        stargazers_count: 2,
        watchers_count: 2,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 2,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 303019901,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDMwMTk5MDE=",
        name: "bookmark",
        full_name: "emetdas/bookmark",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/bookmark",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/bookmark",
        forks_url: "https://api.github.com/repos/emetdas/bookmark/forks",
        keys_url: "https://api.github.com/repos/emetdas/bookmark/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/bookmark/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/bookmark/teams",
        hooks_url: "https://api.github.com/repos/emetdas/bookmark/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/bookmark/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/bookmark/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/bookmark/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/bookmark/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/bookmark/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/bookmark/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/bookmark/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/bookmark/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/bookmark/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/bookmark/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/bookmark/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/bookmark/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/bookmark/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/bookmark/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/bookmark/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/bookmark/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/bookmark/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/bookmark/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/bookmark/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/bookmark/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/bookmark/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/bookmark/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/bookmark/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/bookmark/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/bookmark/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/bookmark/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/bookmark/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/bookmark/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/bookmark/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/bookmark/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/bookmark/deployments",
        created_at: "2020-10-11T01:26:15Z",
        updated_at: "2020-10-11T02:02:58Z",
        pushed_at: "2020-10-11T01:41:26Z",
        git_url: "git://github.com/emetdas/bookmark.git",
        ssh_url: "git@github.com:emetdas/bookmark.git",
        clone_url: "https://github.com/emetdas/bookmark.git",
        svn_url: "https://github.com/emetdas/bookmark",
        homepage: null,
        size: 726,
        stargazers_count: 2,
        watchers_count: 2,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 2,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 308345740,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDgzNDU3NDA=",
        name: "btn-wave",
        full_name: "emetdas/btn-wave",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/btn-wave",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/btn-wave",
        forks_url: "https://api.github.com/repos/emetdas/btn-wave/forks",
        keys_url: "https://api.github.com/repos/emetdas/btn-wave/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/btn-wave/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/btn-wave/teams",
        hooks_url: "https://api.github.com/repos/emetdas/btn-wave/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/btn-wave/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/btn-wave/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/btn-wave/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/btn-wave/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/btn-wave/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/btn-wave/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/btn-wave/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/btn-wave/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/btn-wave/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/btn-wave/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/btn-wave/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/btn-wave/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/btn-wave/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/btn-wave/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/btn-wave/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/btn-wave/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/btn-wave/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/btn-wave/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/btn-wave/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/btn-wave/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/btn-wave/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/btn-wave/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/btn-wave/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/btn-wave/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/btn-wave/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/btn-wave/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/btn-wave/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/btn-wave/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/btn-wave/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/btn-wave/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/btn-wave/deployments",
        created_at: "2020-10-29T14:00:37Z",
        updated_at: "2020-11-06T15:59:31Z",
        pushed_at: "2020-10-29T14:01:25Z",
        git_url: "git://github.com/emetdas/btn-wave.git",
        ssh_url: "git@github.com:emetdas/btn-wave.git",
        clone_url: "https://github.com/emetdas/btn-wave.git",
        svn_url: "https://github.com/emetdas/btn-wave",
        homepage: null,
        size: 1,
        stargazers_count: 2,
        watchers_count: 2,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 2,
        default_branch: "main",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 303030088,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDMwMzAwODg=",
        name: "button-hover-effect",
        full_name: "emetdas/button-hover-effect",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/button-hover-effect",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/button-hover-effect",
        forks_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/collaborators{/collaborator}",
        teams_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/teams",
        hooks_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/branches{/branch}",
        tags_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/button-hover-effect/deployments",
        created_at: "2020-10-11T02:51:52Z",
        updated_at: "2020-10-11T02:53:48Z",
        pushed_at: "2020-10-11T02:52:35Z",
        git_url: "git://github.com/emetdas/button-hover-effect.git",
        ssh_url: "git@github.com:emetdas/button-hover-effect.git",
        clone_url: "https://github.com/emetdas/button-hover-effect.git",
        svn_url: "https://github.com/emetdas/button-hover-effect",
        homepage: null,
        size: 274,
        stargazers_count: 2,
        watchers_count: 2,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 2,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 344206595,
        node_id: "MDEwOlJlcG9zaXRvcnkzNDQyMDY1OTU=",
        name: "chat-application-php--",
        full_name: "emetdas/chat-application-php--",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/chat-application-php--",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/chat-application-php--",
        forks_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/collaborators{/collaborator}",
        teams_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/teams",
        hooks_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/branches{/branch}",
        tags_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/chat-application-php--/deployments",
        created_at: "2021-03-03T17:23:19Z",
        updated_at: "2021-05-05T03:53:56Z",
        pushed_at: "2021-10-16T10:56:25Z",
        git_url: "git://github.com/emetdas/chat-application-php--.git",
        ssh_url: "git@github.com:emetdas/chat-application-php--.git",
        clone_url: "https://github.com/emetdas/chat-application-php--.git",
        svn_url: "https://github.com/emetdas/chat-application-php--",
        homepage: null,
        size: 2186,
        stargazers_count: 1,
        watchers_count: 1,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 1,
        watchers: 1,
        default_branch: "fontend",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 369746665,
        node_id: "MDEwOlJlcG9zaXRvcnkzNjk3NDY2NjU=",
        name: "Code-Blog",
        full_name: "emetdas/Code-Blog",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/Code-Blog",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/Code-Blog",
        forks_url: "https://api.github.com/repos/emetdas/Code-Blog/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/Code-Blog/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/Code-Blog/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/Code-Blog/teams",
        hooks_url: "https://api.github.com/repos/emetdas/Code-Blog/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/Code-Blog/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/Code-Blog/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/Code-Blog/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/Code-Blog/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/Code-Blog/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/Code-Blog/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/Code-Blog/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/Code-Blog/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/Code-Blog/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/Code-Blog/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/Code-Blog/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/Code-Blog/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/Code-Blog/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/Code-Blog/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/Code-Blog/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/Code-Blog/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/Code-Blog/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/Code-Blog/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/Code-Blog/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/Code-Blog/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/Code-Blog/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/Code-Blog/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/Code-Blog/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/Code-Blog/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/Code-Blog/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/Code-Blog/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/Code-Blog/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/Code-Blog/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/Code-Blog/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/Code-Blog/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/Code-Blog/deployments",
        created_at: "2021-05-22T07:38:48Z",
        updated_at: "2023-08-16T09:22:37Z",
        pushed_at: "2022-05-06T13:12:26Z",
        git_url: "git://github.com/emetdas/Code-Blog.git",
        ssh_url: "git@github.com:emetdas/Code-Blog.git",
        clone_url: "https://github.com/emetdas/Code-Blog.git",
        svn_url: "https://github.com/emetdas/Code-Blog",
        homepage: "",
        size: 6915,
        stargazers_count: 2,
        watchers_count: 2,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["coding-setup", "emetdas"],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 2,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 383989428,
        node_id: "MDEwOlJlcG9zaXRvcnkzODM5ODk0Mjg=",
        name: "cods",
        full_name: "emetdas/cods",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/cods",
        description:
            "This is cods framework.cods help to build a modern website. ",
        fork: false,
        url: "https://api.github.com/repos/emetdas/cods",
        forks_url: "https://api.github.com/repos/emetdas/cods/forks",
        keys_url: "https://api.github.com/repos/emetdas/cods/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/cods/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/cods/teams",
        hooks_url: "https://api.github.com/repos/emetdas/cods/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/cods/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/cods/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/cods/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/cods/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/cods/tags",
        blobs_url: "https://api.github.com/repos/emetdas/cods/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/cods/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/cods/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/emetdas/cods/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/cods/statuses/{sha}",
        languages_url: "https://api.github.com/repos/emetdas/cods/languages",
        stargazers_url: "https://api.github.com/repos/emetdas/cods/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/cods/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/cods/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/cods/subscription",
        commits_url: "https://api.github.com/repos/emetdas/cods/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/cods/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/cods/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/cods/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/cods/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/cods/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/cods/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/cods/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/emetdas/cods/downloads",
        issues_url: "https://api.github.com/repos/emetdas/cods/issues{/number}",
        pulls_url: "https://api.github.com/repos/emetdas/cods/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/cods/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/cods/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/emetdas/cods/labels{/name}",
        releases_url: "https://api.github.com/repos/emetdas/cods/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/cods/deployments",
        created_at: "2021-07-08T03:26:00Z",
        updated_at: "2021-11-02T12:13:23Z",
        pushed_at: "2022-04-01T14:54:46Z",
        git_url: "git://github.com/emetdas/cods.git",
        ssh_url: "git@github.com:emetdas/cods.git",
        clone_url: "https://github.com/emetdas/cods.git",
        svn_url: "https://github.com/emetdas/cods",
        homepage: "",
        size: 181,
        stargazers_count: 1,
        watchers_count: 1,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
            "cods",
            "cods-framework",
            "css-framework",
            "javascript-framework",
            "sass-framework",
        ],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 500105531,
        node_id: "R_kgDOHc8BOw",
        name: "cods-e-commrece",
        full_name: "emetdas/cods-e-commrece",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/cods-e-commrece",
        description: "e-commrece website design master project for advanced",
        fork: false,
        url: "https://api.github.com/repos/emetdas/cods-e-commrece",
        forks_url: "https://api.github.com/repos/emetdas/cods-e-commrece/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/cods-e-commrece/teams",
        hooks_url: "https://api.github.com/repos/emetdas/cods-e-commrece/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/cods-e-commrece/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/cods-e-commrece/deployments",
        created_at: "2022-06-05T13:28:52Z",
        updated_at: "2023-09-29T07:24:39Z",
        pushed_at: "2022-06-06T14:58:16Z",
        git_url: "git://github.com/emetdas/cods-e-commrece.git",
        ssh_url: "git@github.com:emetdas/cods-e-commrece.git",
        clone_url: "https://github.com/emetdas/cods-e-commrece.git",
        svn_url: "https://github.com/emetdas/cods-e-commrece",
        homepage: "https://ecommerce-cods.netlify.app/",
        size: 4859,
        stargazers_count: 4,
        watchers_count: 4,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
            "css",
            "ecommerce",
            "ecommerce-website",
            "html-css-javascript",
            "html5",
            "javascript",
            "sass",
        ],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 4,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 386027002,
        node_id: "MDEwOlJlcG9zaXRvcnkzODYwMjcwMDI=",
        name: "cods-theme",
        full_name: "emetdas/cods-theme",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/cods-theme",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/cods-theme",
        forks_url: "https://api.github.com/repos/emetdas/cods-theme/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/cods-theme/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/cods-theme/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/cods-theme/teams",
        hooks_url: "https://api.github.com/repos/emetdas/cods-theme/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/cods-theme/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/cods-theme/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/cods-theme/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/cods-theme/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/cods-theme/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/cods-theme/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/cods-theme/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/cods-theme/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/cods-theme/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/cods-theme/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/cods-theme/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/cods-theme/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/cods-theme/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/cods-theme/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/cods-theme/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/cods-theme/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/cods-theme/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/cods-theme/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/cods-theme/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/cods-theme/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/cods-theme/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/cods-theme/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/cods-theme/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/cods-theme/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/cods-theme/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/cods-theme/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/cods-theme/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/cods-theme/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/cods-theme/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/cods-theme/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/cods-theme/deployments",
        created_at: "2021-07-14T17:44:57Z",
        updated_at: "2021-09-30T23:28:59Z",
        pushed_at: "2021-07-15T14:42:07Z",
        git_url: "git://github.com/emetdas/cods-theme.git",
        ssh_url: "git@github.com:emetdas/cods-theme.git",
        clone_url: "https://github.com/emetdas/cods-theme.git",
        svn_url: "https://github.com/emetdas/cods-theme",
        homepage: null,
        size: 189,
        stargazers_count: 1,
        watchers_count: 1,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 307560160,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDc1NjAxNjA=",
        name: "coronavirus-help",
        full_name: "emetdas/coronavirus-help",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/coronavirus-help",
        description: null,
        fork: true,
        url: "https://api.github.com/repos/emetdas/coronavirus-help",
        forks_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/collaborators{/collaborator}",
        teams_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/teams",
        hooks_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/coronavirus-help/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/coronavirus-help/deployments",
        created_at: "2020-10-27T02:10:43Z",
        updated_at: "2020-10-27T02:10:45Z",
        pushed_at: "2020-03-15T02:27:55Z",
        git_url: "git://github.com/emetdas/coronavirus-help.git",
        ssh_url: "git@github.com:emetdas/coronavirus-help.git",
        clone_url: "https://github.com/emetdas/coronavirus-help.git",
        svn_url: "https://github.com/emetdas/coronavirus-help",
        homepage: null,
        size: 439,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 323360786,
        node_id: "MDEwOlJlcG9zaXRvcnkzMjMzNjA3ODY=",
        name: "crud_php",
        full_name: "emetdas/crud_php",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/crud_php",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/crud_php",
        forks_url: "https://api.github.com/repos/emetdas/crud_php/forks",
        keys_url: "https://api.github.com/repos/emetdas/crud_php/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/crud_php/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/crud_php/teams",
        hooks_url: "https://api.github.com/repos/emetdas/crud_php/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/crud_php/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/crud_php/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/crud_php/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/crud_php/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/crud_php/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/crud_php/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/crud_php/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/crud_php/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/crud_php/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/crud_php/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/crud_php/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/crud_php/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/crud_php/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/crud_php/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/crud_php/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/crud_php/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/crud_php/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/crud_php/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/crud_php/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/crud_php/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/crud_php/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/crud_php/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/crud_php/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/crud_php/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/crud_php/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/crud_php/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/crud_php/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/crud_php/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/crud_php/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/crud_php/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/crud_php/deployments",
        created_at: "2020-12-21T14:33:22Z",
        updated_at: "2021-01-19T07:41:14Z",
        pushed_at: "2020-12-23T14:15:35Z",
        git_url: "git://github.com/emetdas/crud_php.git",
        ssh_url: "git@github.com:emetdas/crud_php.git",
        clone_url: "https://github.com/emetdas/crud_php.git",
        svn_url: "https://github.com/emetdas/crud_php",
        homepage: null,
        size: 6,
        stargazers_count: 2,
        watchers_count: 2,
        language: "PHP",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 2,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 303028319,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDMwMjgzMTk=",
        name: "css-accordion",
        full_name: "emetdas/css-accordion",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/css-accordion",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/css-accordion",
        forks_url: "https://api.github.com/repos/emetdas/css-accordion/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/css-accordion/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/css-accordion/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/css-accordion/teams",
        hooks_url: "https://api.github.com/repos/emetdas/css-accordion/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/css-accordion/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/css-accordion/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/css-accordion/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/css-accordion/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/css-accordion/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/css-accordion/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/css-accordion/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/css-accordion/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/css-accordion/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/css-accordion/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/css-accordion/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/css-accordion/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/css-accordion/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/css-accordion/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/css-accordion/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/css-accordion/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/css-accordion/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/css-accordion/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/css-accordion/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/css-accordion/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/css-accordion/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/css-accordion/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/css-accordion/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/css-accordion/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/css-accordion/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/css-accordion/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/css-accordion/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/css-accordion/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/css-accordion/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/css-accordion/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/css-accordion/deployments",
        created_at: "2020-10-11T02:37:38Z",
        updated_at: "2020-10-11T02:53:46Z",
        pushed_at: "2020-10-11T02:38:33Z",
        git_url: "git://github.com/emetdas/css-accordion.git",
        ssh_url: "git@github.com:emetdas/css-accordion.git",
        clone_url: "https://github.com/emetdas/css-accordion.git",
        svn_url: "https://github.com/emetdas/css-accordion",
        homepage: null,
        size: 1,
        stargazers_count: 2,
        watchers_count: 2,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 2,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 303028494,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDMwMjg0OTQ=",
        name: "css-box-border-hover",
        full_name: "emetdas/css-box-border-hover",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/css-box-border-hover",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/css-box-border-hover",
        forks_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/collaborators{/collaborator}",
        teams_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/teams",
        hooks_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/branches{/branch}",
        tags_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/css-box-border-hover/deployments",
        created_at: "2020-10-11T02:39:04Z",
        updated_at: "2020-10-11T02:40:42Z",
        pushed_at: "2020-10-11T02:39:46Z",
        git_url: "git://github.com/emetdas/css-box-border-hover.git",
        ssh_url: "git@github.com:emetdas/css-box-border-hover.git",
        clone_url: "https://github.com/emetdas/css-box-border-hover.git",
        svn_url: "https://github.com/emetdas/css-box-border-hover",
        homepage: null,
        size: 2,
        stargazers_count: 1,
        watchers_count: 1,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 303029408,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDMwMjk0MDg=",
        name: "css-responsive-nav",
        full_name: "emetdas/css-responsive-nav",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/css-responsive-nav",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/css-responsive-nav",
        forks_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/collaborators{/collaborator}",
        teams_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/teams",
        hooks_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/branches{/branch}",
        tags_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/css-responsive-nav/deployments",
        created_at: "2020-10-11T02:46:02Z",
        updated_at: "2020-10-11T02:53:18Z",
        pushed_at: "2020-10-11T02:46:41Z",
        git_url: "git://github.com/emetdas/css-responsive-nav.git",
        ssh_url: "git@github.com:emetdas/css-responsive-nav.git",
        clone_url: "https://github.com/emetdas/css-responsive-nav.git",
        svn_url: "https://github.com/emetdas/css-responsive-nav",
        homepage: null,
        size: 2,
        stargazers_count: 1,
        watchers_count: 1,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 303029008,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDMwMjkwMDg=",
        name: "css-skill-project",
        full_name: "emetdas/css-skill-project",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/css-skill-project",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/css-skill-project",
        forks_url:
            "https://api.github.com/repos/emetdas/css-skill-project/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/css-skill-project/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/css-skill-project/collaborators{/collaborator}",
        teams_url:
            "https://api.github.com/repos/emetdas/css-skill-project/teams",
        hooks_url:
            "https://api.github.com/repos/emetdas/css-skill-project/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/css-skill-project/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/css-skill-project/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/css-skill-project/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/css-skill-project/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/css-skill-project/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/css-skill-project/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/css-skill-project/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/css-skill-project/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/css-skill-project/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/css-skill-project/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/css-skill-project/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/css-skill-project/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/css-skill-project/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/css-skill-project/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/css-skill-project/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/css-skill-project/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/css-skill-project/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/css-skill-project/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/css-skill-project/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/css-skill-project/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/css-skill-project/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/css-skill-project/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/css-skill-project/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/css-skill-project/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/css-skill-project/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/css-skill-project/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/css-skill-project/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/css-skill-project/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/css-skill-project/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/css-skill-project/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/css-skill-project/deployments",
        created_at: "2020-10-11T02:42:59Z",
        updated_at: "2020-10-11T02:44:21Z",
        pushed_at: "2020-10-11T02:43:53Z",
        git_url: "git://github.com/emetdas/css-skill-project.git",
        ssh_url: "git@github.com:emetdas/css-skill-project.git",
        clone_url: "https://github.com/emetdas/css-skill-project.git",
        svn_url: "https://github.com/emetdas/css-skill-project",
        homepage: null,
        size: 114,
        stargazers_count: 1,
        watchers_count: 1,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 303027941,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDMwMjc5NDE=",
        name: "css-slider",
        full_name: "emetdas/css-slider",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/css-slider",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/css-slider",
        forks_url: "https://api.github.com/repos/emetdas/css-slider/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/css-slider/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/css-slider/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/css-slider/teams",
        hooks_url: "https://api.github.com/repos/emetdas/css-slider/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/css-slider/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/css-slider/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/css-slider/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/css-slider/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/css-slider/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/css-slider/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/css-slider/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/css-slider/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/css-slider/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/css-slider/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/css-slider/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/css-slider/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/css-slider/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/css-slider/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/css-slider/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/css-slider/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/css-slider/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/css-slider/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/css-slider/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/css-slider/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/css-slider/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/css-slider/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/css-slider/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/css-slider/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/css-slider/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/css-slider/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/css-slider/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/css-slider/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/css-slider/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/css-slider/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/css-slider/deployments",
        created_at: "2020-10-11T02:34:35Z",
        updated_at: "2020-10-11T02:35:34Z",
        pushed_at: "2020-10-11T02:35:09Z",
        git_url: "git://github.com/emetdas/css-slider.git",
        ssh_url: "git@github.com:emetdas/css-slider.git",
        clone_url: "https://github.com/emetdas/css-slider.git",
        svn_url: "https://github.com/emetdas/css-slider",
        homepage: null,
        size: 1,
        stargazers_count: 1,
        watchers_count: 1,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 303028065,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDMwMjgwNjU=",
        name: "css-tab",
        full_name: "emetdas/css-tab",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/css-tab",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/css-tab",
        forks_url: "https://api.github.com/repos/emetdas/css-tab/forks",
        keys_url: "https://api.github.com/repos/emetdas/css-tab/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/css-tab/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/css-tab/teams",
        hooks_url: "https://api.github.com/repos/emetdas/css-tab/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/css-tab/issues/events{/number}",
        events_url: "https://api.github.com/repos/emetdas/css-tab/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/css-tab/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/css-tab/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/css-tab/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/css-tab/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/css-tab/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/css-tab/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/css-tab/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/css-tab/statuses/{sha}",
        languages_url: "https://api.github.com/repos/emetdas/css-tab/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/css-tab/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/css-tab/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/css-tab/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/css-tab/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/css-tab/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/css-tab/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/css-tab/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/css-tab/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/css-tab/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/css-tab/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/emetdas/css-tab/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/css-tab/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/emetdas/css-tab/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/css-tab/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/css-tab/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/css-tab/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/css-tab/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/css-tab/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/css-tab/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/css-tab/deployments",
        created_at: "2020-10-11T02:35:43Z",
        updated_at: "2020-10-11T02:37:14Z",
        pushed_at: "2020-10-11T02:36:19Z",
        git_url: "git://github.com/emetdas/css-tab.git",
        ssh_url: "git@github.com:emetdas/css-tab.git",
        clone_url: "https://github.com/emetdas/css-tab.git",
        svn_url: "https://github.com/emetdas/css-tab",
        homepage: null,
        size: 1,
        stargazers_count: 1,
        watchers_count: 1,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 303029815,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDMwMjk4MTU=",
        name: "css-togle-navbar",
        full_name: "emetdas/css-togle-navbar",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/css-togle-navbar",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/css-togle-navbar",
        forks_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/collaborators{/collaborator}",
        teams_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/teams",
        hooks_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/css-togle-navbar/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/css-togle-navbar/deployments",
        created_at: "2020-10-11T02:49:47Z",
        updated_at: "2020-10-11T02:53:16Z",
        pushed_at: "2020-10-11T02:50:51Z",
        git_url: "git://github.com/emetdas/css-togle-navbar.git",
        ssh_url: "git@github.com:emetdas/css-togle-navbar.git",
        clone_url: "https://github.com/emetdas/css-togle-navbar.git",
        svn_url: "https://github.com/emetdas/css-togle-navbar",
        homepage: null,
        size: 2,
        stargazers_count: 1,
        watchers_count: 1,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 303025905,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDMwMjU5MDU=",
        name: "Cuda-Single-Page-Portfolio",
        full_name: "emetdas/Cuda-Single-Page-Portfolio",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/Cuda-Single-Page-Portfolio",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio",
        forks_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/collaborators{/collaborator}",
        teams_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/teams",
        hooks_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/branches{/branch}",
        tags_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/Cuda-Single-Page-Portfolio/deployments",
        created_at: "2020-10-11T02:18:27Z",
        updated_at: "2020-10-11T02:20:52Z",
        pushed_at: "2020-10-11T02:20:05Z",
        git_url: "git://github.com/emetdas/Cuda-Single-Page-Portfolio.git",
        ssh_url: "git@github.com:emetdas/Cuda-Single-Page-Portfolio.git",
        clone_url: "https://github.com/emetdas/Cuda-Single-Page-Portfolio.git",
        svn_url: "https://github.com/emetdas/Cuda-Single-Page-Portfolio",
        homepage: null,
        size: 1352,
        stargazers_count: 1,
        watchers_count: 1,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 316375093,
        node_id: "MDEwOlJlcG9zaXRvcnkzMTYzNzUwOTM=",
        name: "dart-and-flutter-learning-path",
        full_name: "emetdas/dart-and-flutter-learning-path",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/dart-and-flutter-learning-path",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path",
        forks_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/collaborators{/collaborator}",
        teams_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/teams",
        hooks_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/branches{/branch}",
        tags_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/dart-and-flutter-learning-path/deployments",
        created_at: "2020-11-27T01:50:10Z",
        updated_at: "2020-12-07T13:41:21Z",
        pushed_at: "2020-12-07T13:41:19Z",
        git_url: "git://github.com/emetdas/dart-and-flutter-learning-path.git",
        ssh_url: "git@github.com:emetdas/dart-and-flutter-learning-path.git",
        clone_url:
            "https://github.com/emetdas/dart-and-flutter-learning-path.git",
        svn_url: "https://github.com/emetdas/dart-and-flutter-learning-path",
        homepage: null,
        size: 7,
        stargazers_count: 2,
        watchers_count: 2,
        language: "Dart",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 2,
        default_branch: "main",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 353397140,
        node_id: "MDEwOlJlcG9zaXRvcnkzNTMzOTcxNDA=",
        name: "design-resources-for-developers",
        full_name: "emetdas/design-resources-for-developers",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/design-resources-for-developers",
        description:
            "Curated list of design and UI resources from stock photos, web templates, CSS frameworks, UI libraries, tools and much more",
        fork: true,
        url: "https://api.github.com/repos/emetdas/design-resources-for-developers",
        forks_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/collaborators{/collaborator}",
        teams_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/teams",
        hooks_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/branches{/branch}",
        tags_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/design-resources-for-developers/deployments",
        created_at: "2021-03-31T15:06:04Z",
        updated_at: "2021-07-01T13:54:37Z",
        pushed_at: "2021-03-31T09:06:00Z",
        git_url: "git://github.com/emetdas/design-resources-for-developers.git",
        ssh_url: "git@github.com:emetdas/design-resources-for-developers.git",
        clone_url:
            "https://github.com/emetdas/design-resources-for-developers.git",
        svn_url: "https://github.com/emetdas/design-resources-for-developers",
        homepage: null,
        size: 4521,
        stargazers_count: 1,
        watchers_count: 1,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 1,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
            key: "mit",
            name: "MIT License",
            spdx_id: "MIT",
            url: "https://api.github.com/licenses/mit",
            node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 1,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 303026588,
        node_id: "MDEwOlJlcG9zaXRvcnkzMDMwMjY1ODg=",
        name: "design-website",
        full_name: "emetdas/design-website",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/design-website",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/design-website",
        forks_url: "https://api.github.com/repos/emetdas/design-website/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/design-website/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/design-website/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/emetdas/design-website/teams",
        hooks_url: "https://api.github.com/repos/emetdas/design-website/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/design-website/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/design-website/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/design-website/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/design-website/branches{/branch}",
        tags_url: "https://api.github.com/repos/emetdas/design-website/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/design-website/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/design-website/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/design-website/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/design-website/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/design-website/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/design-website/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/design-website/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/design-website/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/design-website/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/design-website/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/design-website/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/design-website/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/design-website/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/design-website/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/design-website/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/design-website/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/design-website/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/design-website/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/design-website/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/design-website/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/design-website/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/design-website/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/design-website/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/design-website/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/design-website/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/design-website/deployments",
        created_at: "2020-10-11T02:23:53Z",
        updated_at: "2020-10-11T02:25:48Z",
        pushed_at: "2020-10-11T02:25:35Z",
        git_url: "git://github.com/emetdas/design-website.git",
        ssh_url: "git@github.com:emetdas/design-website.git",
        clone_url: "https://github.com/emetdas/design-website.git",
        svn_url: "https://github.com/emetdas/design-website",
        homepage: null,
        size: 4492,
        stargazers_count: 1,
        watchers_count: 1,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
    {
        id: 410283680,
        node_id: "R_kgDOGHRuoA",
        name: "devloper-biten-portfolio",
        full_name: "emetdas/devloper-biten-portfolio",
        private: false,
        owner: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        html_url: "https://github.com/emetdas/devloper-biten-portfolio",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/emetdas/devloper-biten-portfolio",
        forks_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/forks",
        keys_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/collaborators{/collaborator}",
        teams_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/teams",
        hooks_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/hooks",
        issue_events_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/issues/events{/number}",
        events_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/events",
        assignees_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/branches{/branch}",
        tags_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/tags",
        blobs_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/languages",
        stargazers_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/stargazers",
        contributors_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/contributors",
        subscribers_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/subscribers",
        subscription_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/subscription",
        commits_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/compare/{base}...{head}",
        merges_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/merges",
        archive_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/downloads",
        issues_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/labels{/name}",
        releases_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/emetdas/devloper-biten-portfolio/deployments",
        created_at: "2021-09-25T13:45:36Z",
        updated_at: "2021-10-23T10:45:04Z",
        pushed_at: "2021-10-23T10:45:02Z",
        git_url: "git://github.com/emetdas/devloper-biten-portfolio.git",
        ssh_url: "git@github.com:emetdas/devloper-biten-portfolio.git",
        clone_url: "https://github.com/emetdas/devloper-biten-portfolio.git",
        svn_url: "https://github.com/emetdas/devloper-biten-portfolio",
        homepage: null,
        size: 539,
        stargazers_count: 1,
        watchers_count: 1,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
        permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
        },
    },
];
const expectedUserRepoCommits = [
    {
        sha: "a5c416eca34deff55b2610c6b89a77f7b290c1ba",
        node_id:
            "MDY6Q29tbWl0MzAzMDI4Nzc1OmE1YzQxNmVjYTM0ZGVmZjU1YjI2MTBjNmI4OWE3N2Y3YjI5MGMxYmE=",
        commit: {
            author: {
                name: "emetdas",
                email: "emet@b2bleadstaff.com",
                date: "2020-10-11T02:41:40Z",
            },
            committer: {
                name: "emetdas",
                email: "emet@b2bleadstaff.com",
                date: "2020-10-11T02:41:40Z",
            },
            message: "css-flipping-card",
            tree: {
                sha: "cdcf83a5d9565575ef01bbb73a7a08449b3daa22",
                url: "https://api.github.com/repos/emetdas/-css-flipping-card/git/trees/cdcf83a5d9565575ef01bbb73a7a08449b3daa22",
            },
            url: "https://api.github.com/repos/emetdas/-css-flipping-card/git/commits/a5c416eca34deff55b2610c6b89a77f7b290c1ba",
            comment_count: 0,
            verification: {
                verified: false,
                reason: "unsigned",
                signature: null,
                payload: null,
            },
        },
        url: "https://api.github.com/repos/emetdas/-css-flipping-card/commits/a5c416eca34deff55b2610c6b89a77f7b290c1ba",
        html_url:
            "https://github.com/emetdas/-css-flipping-card/commit/a5c416eca34deff55b2610c6b89a77f7b290c1ba",
        comments_url:
            "https://api.github.com/repos/emetdas/-css-flipping-card/commits/a5c416eca34deff55b2610c6b89a77f7b290c1ba/comments",
        author: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        committer: {
            login: "emetdas",
            id: 72676990,
            node_id: "MDQ6VXNlcjcyNjc2OTkw",
            avatar_url: "https://avatars.githubusercontent.com/u/72676990?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/emetdas",
            html_url: "https://github.com/emetdas",
            followers_url: "https://api.github.com/users/emetdas/followers",
            following_url:
                "https://api.github.com/users/emetdas/following{/other_user}",
            gists_url: "https://api.github.com/users/emetdas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/emetdas/subscriptions",
            organizations_url: "https://api.github.com/users/emetdas/orgs",
            repos_url: "https://api.github.com/users/emetdas/repos",
            events_url: "https://api.github.com/users/emetdas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/emetdas/received_events",
            type: "User",
            site_admin: false,
        },
        parents: [],
    },
];

const repoName = "-css-flipping-card";

describe("Check the request status and data retrieved from github api", () => {
    describe("Get User Info", () => {
        // checks whether the status returned from the request is 200
        it("status", (done) => {
            request(
                `http://localhost:8080/user/${username}`,
                (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    done();
                }
            );
        });

        // checks whether the data retrieved matches the expected data form the request
        it("data", (done) => {
            request(
                `http://localhost:8080/user/${username}`,
                (error, response, body) => {
                    expect(body).to.equal(JSON.stringify(expectedUserData));
                    done();
                }
            );
        });
    });

    describe("Get User Repositories", () => {
        // checks whether the status returned from the request is 200
        it("status", (done) => {
            request(
                `http://localhost:8080/user/${username}/repos`,
                (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    done();
                }
            );
        });

        // checks whether the data retrieved matches the expected data form the request
        it("data", (done) => {
            request(
                `http://localhost:8080/user/${username}/repos`,
                (error, response, body) => {
                    expect(body).to.equal(JSON.stringify(expectedUserRepos));
                    done();
                }
            );
        });
    });

    describe("Get User Repository Commits", () => {
        // checks whether the status returned from the request is 200
        it("status", (done) => {
            request(
                `http://localhost:8080/user/${username}/repos/${repoName}/commits`,
                (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    done();
                }
            );
        });

        // checks whether the data retrieved matches the expected data form the request
        it("data", (done) => {
            request(
                `http://localhost:8080/user/${username}/repos/${repoName}/commits`,
                (error, response, body) => {
                    expect(body).to.equal(
                        JSON.stringify(expectedUserRepoCommits)
                    );
                    done();
                }
            );
        });
    });
});

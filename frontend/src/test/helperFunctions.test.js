import { combineReposAndCommits } from "../helperFunctions";

describe("combineReposAndCommits", () => {
    it("should combine userRepos and userRepoCommits correctly", () => {
        // Mock data
        const userRepos = [
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
                    avatar_url:
                        "https://avatars.githubusercontent.com/u/72676990?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/emetdas",
                    html_url: "https://github.com/emetdas",
                    followers_url:
                        "https://api.github.com/users/emetdas/followers",
                    following_url:
                        "https://api.github.com/users/emetdas/following{/other_user}",
                    gists_url:
                        "https://api.github.com/users/emetdas/gists{/gist_id}",
                    starred_url:
                        "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
                    subscriptions_url:
                        "https://api.github.com/users/emetdas/subscriptions",
                    organizations_url:
                        "https://api.github.com/users/emetdas/orgs",
                    repos_url: "https://api.github.com/users/emetdas/repos",
                    events_url:
                        "https://api.github.com/users/emetdas/events{/privacy}",
                    received_events_url:
                        "https://api.github.com/users/emetdas/received_events",
                    type: "User",
                    site_admin: false,
                },
                html_url: "https://github.com/emetdas/Accordion",
                description: "Responsive Accordion HTML & CSS only",
                fork: false,
                url: "https://api.github.com/repos/emetdas/Accordion",
                forks_url:
                    "https://api.github.com/repos/emetdas/Accordion/forks",
                keys_url:
                    "https://api.github.com/repos/emetdas/Accordion/keys{/key_id}",
                collaborators_url:
                    "https://api.github.com/repos/emetdas/Accordion/collaborators{/collaborator}",
                teams_url:
                    "https://api.github.com/repos/emetdas/Accordion/teams",
                hooks_url:
                    "https://api.github.com/repos/emetdas/Accordion/hooks",
                issue_events_url:
                    "https://api.github.com/repos/emetdas/Accordion/issues/events{/number}",
                events_url:
                    "https://api.github.com/repos/emetdas/Accordion/events",
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
                merges_url:
                    "https://api.github.com/repos/emetdas/Accordion/merges",
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
        ];

        const userRepoCommits = [
            {
                name: "Accordion",
                commits: [
                    {
                        sha: "e38c585e95c8400792dc9a660fd38adca4746402",
                        node_id:
                            "C_kwDOGerCmNoAKGUzOGM1ODVlOTVjODQwMDc5MmRjOWE2NjBmZDM4YWRjYTQ3NDY0MDI",
                        commit: {
                            author: {
                                name: "emetdas",
                                email: "emet@b2bleadstaff.com",
                                date: "2021-12-04T06:33:19Z",
                            },
                            committer: {
                                name: "emetdas",
                                email: "emet@b2bleadstaff.com",
                                date: "2021-12-04T06:33:19Z",
                            },
                            message: "update",
                            tree: {
                                sha: "6ddc53077f93934f46e771445ce8cc2060869179",
                                url: "https://api.github.com/repos/emetdas/Accordion/git/trees/6ddc53077f93934f46e771445ce8cc2060869179",
                            },
                            url: "https://api.github.com/repos/emetdas/Accordion/git/commits/e38c585e95c8400792dc9a660fd38adca4746402",
                            comment_count: 0,
                            verification: {
                                verified: false,
                                reason: "unsigned",
                                signature: null,
                                payload: null,
                            },
                        },
                        url: "https://api.github.com/repos/emetdas/Accordion/commits/e38c585e95c8400792dc9a660fd38adca4746402",
                        html_url:
                            "https://github.com/emetdas/Accordion/commit/e38c585e95c8400792dc9a660fd38adca4746402",
                        comments_url:
                            "https://api.github.com/repos/emetdas/Accordion/commits/e38c585e95c8400792dc9a660fd38adca4746402/comments",
                        author: {
                            login: "emetdas",
                            id: 72676990,
                            node_id: "MDQ6VXNlcjcyNjc2OTkw",
                            avatar_url:
                                "https://avatars.githubusercontent.com/u/72676990?v=4",
                            gravatar_id: "",
                            url: "https://api.github.com/users/emetdas",
                            html_url: "https://github.com/emetdas",
                            followers_url:
                                "https://api.github.com/users/emetdas/followers",
                            following_url:
                                "https://api.github.com/users/emetdas/following{/other_user}",
                            gists_url:
                                "https://api.github.com/users/emetdas/gists{/gist_id}",
                            starred_url:
                                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
                            subscriptions_url:
                                "https://api.github.com/users/emetdas/subscriptions",
                            organizations_url:
                                "https://api.github.com/users/emetdas/orgs",
                            repos_url:
                                "https://api.github.com/users/emetdas/repos",
                            events_url:
                                "https://api.github.com/users/emetdas/events{/privacy}",
                            received_events_url:
                                "https://api.github.com/users/emetdas/received_events",
                            type: "User",
                            site_admin: false,
                        },
                        committer: {
                            login: "emetdas",
                            id: 72676990,
                            node_id: "MDQ6VXNlcjcyNjc2OTkw",
                            avatar_url:
                                "https://avatars.githubusercontent.com/u/72676990?v=4",
                            gravatar_id: "",
                            url: "https://api.github.com/users/emetdas",
                            html_url: "https://github.com/emetdas",
                            followers_url:
                                "https://api.github.com/users/emetdas/followers",
                            following_url:
                                "https://api.github.com/users/emetdas/following{/other_user}",
                            gists_url:
                                "https://api.github.com/users/emetdas/gists{/gist_id}",
                            starred_url:
                                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
                            subscriptions_url:
                                "https://api.github.com/users/emetdas/subscriptions",
                            organizations_url:
                                "https://api.github.com/users/emetdas/orgs",
                            repos_url:
                                "https://api.github.com/users/emetdas/repos",
                            events_url:
                                "https://api.github.com/users/emetdas/events{/privacy}",
                            received_events_url:
                                "https://api.github.com/users/emetdas/received_events",
                            type: "User",
                            site_admin: false,
                        },
                        parents: [
                            {
                                sha: "677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                                url: "https://api.github.com/repos/emetdas/Accordion/commits/677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                                html_url:
                                    "https://github.com/emetdas/Accordion/commit/677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                            },
                        ],
                    },
                    {
                        sha: "677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                        node_id:
                            "C_kwDOGerCmNoAKDY3N2FhN2ZmYjI0NWIzYjdiMzVlMDMxZTc3Y2IyYjAyZTdlMWNlZTg",
                        commit: {
                            author: {
                                name: "emetdas",
                                email: "emet@b2bleadstaff.com",
                                date: "2021-12-04T05:29:46Z",
                            },
                            committer: {
                                name: "emetdas",
                                email: "emet@b2bleadstaff.com",
                                date: "2021-12-04T05:29:46Z",
                            },
                            message: "all code is done",
                            tree: {
                                sha: "a83ca7272fd6565183815b398451d99924dcf666",
                                url: "https://api.github.com/repos/emetdas/Accordion/git/trees/a83ca7272fd6565183815b398451d99924dcf666",
                            },
                            url: "https://api.github.com/repos/emetdas/Accordion/git/commits/677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                            comment_count: 0,
                            verification: {
                                verified: false,
                                reason: "unsigned",
                                signature: null,
                                payload: null,
                            },
                        },
                        url: "https://api.github.com/repos/emetdas/Accordion/commits/677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                        html_url:
                            "https://github.com/emetdas/Accordion/commit/677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                        comments_url:
                            "https://api.github.com/repos/emetdas/Accordion/commits/677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8/comments",
                        author: {
                            login: "emetdas",
                            id: 72676990,
                            node_id: "MDQ6VXNlcjcyNjc2OTkw",
                            avatar_url:
                                "https://avatars.githubusercontent.com/u/72676990?v=4",
                            gravatar_id: "",
                            url: "https://api.github.com/users/emetdas",
                            html_url: "https://github.com/emetdas",
                            followers_url:
                                "https://api.github.com/users/emetdas/followers",
                            following_url:
                                "https://api.github.com/users/emetdas/following{/other_user}",
                            gists_url:
                                "https://api.github.com/users/emetdas/gists{/gist_id}",
                            starred_url:
                                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
                            subscriptions_url:
                                "https://api.github.com/users/emetdas/subscriptions",
                            organizations_url:
                                "https://api.github.com/users/emetdas/orgs",
                            repos_url:
                                "https://api.github.com/users/emetdas/repos",
                            events_url:
                                "https://api.github.com/users/emetdas/events{/privacy}",
                            received_events_url:
                                "https://api.github.com/users/emetdas/received_events",
                            type: "User",
                            site_admin: false,
                        },
                        committer: {
                            login: "emetdas",
                            id: 72676990,
                            node_id: "MDQ6VXNlcjcyNjc2OTkw",
                            avatar_url:
                                "https://avatars.githubusercontent.com/u/72676990?v=4",
                            gravatar_id: "",
                            url: "https://api.github.com/users/emetdas",
                            html_url: "https://github.com/emetdas",
                            followers_url:
                                "https://api.github.com/users/emetdas/followers",
                            following_url:
                                "https://api.github.com/users/emetdas/following{/other_user}",
                            gists_url:
                                "https://api.github.com/users/emetdas/gists{/gist_id}",
                            starred_url:
                                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
                            subscriptions_url:
                                "https://api.github.com/users/emetdas/subscriptions",
                            organizations_url:
                                "https://api.github.com/users/emetdas/orgs",
                            repos_url:
                                "https://api.github.com/users/emetdas/repos",
                            events_url:
                                "https://api.github.com/users/emetdas/events{/privacy}",
                            received_events_url:
                                "https://api.github.com/users/emetdas/received_events",
                            type: "User",
                            site_admin: false,
                        },
                        parents: [],
                    },
                ],
            },
        ];

        // Expected result
        const expectedResult = [
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
                    avatar_url:
                        "https://avatars.githubusercontent.com/u/72676990?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/emetdas",
                    html_url: "https://github.com/emetdas",
                    followers_url:
                        "https://api.github.com/users/emetdas/followers",
                    following_url:
                        "https://api.github.com/users/emetdas/following{/other_user}",
                    gists_url:
                        "https://api.github.com/users/emetdas/gists{/gist_id}",
                    starred_url:
                        "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
                    subscriptions_url:
                        "https://api.github.com/users/emetdas/subscriptions",
                    organizations_url:
                        "https://api.github.com/users/emetdas/orgs",
                    repos_url: "https://api.github.com/users/emetdas/repos",
                    events_url:
                        "https://api.github.com/users/emetdas/events{/privacy}",
                    received_events_url:
                        "https://api.github.com/users/emetdas/received_events",
                    type: "User",
                    site_admin: false,
                },
                html_url: "https://github.com/emetdas/Accordion",
                description: "Responsive Accordion HTML & CSS only",
                fork: false,
                url: "https://api.github.com/repos/emetdas/Accordion",
                forks_url:
                    "https://api.github.com/repos/emetdas/Accordion/forks",
                keys_url:
                    "https://api.github.com/repos/emetdas/Accordion/keys{/key_id}",
                collaborators_url:
                    "https://api.github.com/repos/emetdas/Accordion/collaborators{/collaborator}",
                teams_url:
                    "https://api.github.com/repos/emetdas/Accordion/teams",
                hooks_url:
                    "https://api.github.com/repos/emetdas/Accordion/hooks",
                issue_events_url:
                    "https://api.github.com/repos/emetdas/Accordion/issues/events{/number}",
                events_url:
                    "https://api.github.com/repos/emetdas/Accordion/events",
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
                merges_url:
                    "https://api.github.com/repos/emetdas/Accordion/merges",
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
                commits: [
                    {
                        sha: "e38c585e95c8400792dc9a660fd38adca4746402",
                        node_id:
                            "C_kwDOGerCmNoAKGUzOGM1ODVlOTVjODQwMDc5MmRjOWE2NjBmZDM4YWRjYTQ3NDY0MDI",
                        commit: {
                            author: {
                                name: "emetdas",
                                email: "emet@b2bleadstaff.com",
                                date: "2021-12-04T06:33:19Z",
                            },
                            committer: {
                                name: "emetdas",
                                email: "emet@b2bleadstaff.com",
                                date: "2021-12-04T06:33:19Z",
                            },
                            message: "update",
                            tree: {
                                sha: "6ddc53077f93934f46e771445ce8cc2060869179",
                                url: "https://api.github.com/repos/emetdas/Accordion/git/trees/6ddc53077f93934f46e771445ce8cc2060869179",
                            },
                            url: "https://api.github.com/repos/emetdas/Accordion/git/commits/e38c585e95c8400792dc9a660fd38adca4746402",
                            comment_count: 0,
                            verification: {
                                verified: false,
                                reason: "unsigned",
                                signature: null,
                                payload: null,
                            },
                        },
                        url: "https://api.github.com/repos/emetdas/Accordion/commits/e38c585e95c8400792dc9a660fd38adca4746402",
                        html_url:
                            "https://github.com/emetdas/Accordion/commit/e38c585e95c8400792dc9a660fd38adca4746402",
                        comments_url:
                            "https://api.github.com/repos/emetdas/Accordion/commits/e38c585e95c8400792dc9a660fd38adca4746402/comments",
                        author: {
                            login: "emetdas",
                            id: 72676990,
                            node_id: "MDQ6VXNlcjcyNjc2OTkw",
                            avatar_url:
                                "https://avatars.githubusercontent.com/u/72676990?v=4",
                            gravatar_id: "",
                            url: "https://api.github.com/users/emetdas",
                            html_url: "https://github.com/emetdas",
                            followers_url:
                                "https://api.github.com/users/emetdas/followers",
                            following_url:
                                "https://api.github.com/users/emetdas/following{/other_user}",
                            gists_url:
                                "https://api.github.com/users/emetdas/gists{/gist_id}",
                            starred_url:
                                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
                            subscriptions_url:
                                "https://api.github.com/users/emetdas/subscriptions",
                            organizations_url:
                                "https://api.github.com/users/emetdas/orgs",
                            repos_url:
                                "https://api.github.com/users/emetdas/repos",
                            events_url:
                                "https://api.github.com/users/emetdas/events{/privacy}",
                            received_events_url:
                                "https://api.github.com/users/emetdas/received_events",
                            type: "User",
                            site_admin: false,
                        },
                        committer: {
                            login: "emetdas",
                            id: 72676990,
                            node_id: "MDQ6VXNlcjcyNjc2OTkw",
                            avatar_url:
                                "https://avatars.githubusercontent.com/u/72676990?v=4",
                            gravatar_id: "",
                            url: "https://api.github.com/users/emetdas",
                            html_url: "https://github.com/emetdas",
                            followers_url:
                                "https://api.github.com/users/emetdas/followers",
                            following_url:
                                "https://api.github.com/users/emetdas/following{/other_user}",
                            gists_url:
                                "https://api.github.com/users/emetdas/gists{/gist_id}",
                            starred_url:
                                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
                            subscriptions_url:
                                "https://api.github.com/users/emetdas/subscriptions",
                            organizations_url:
                                "https://api.github.com/users/emetdas/orgs",
                            repos_url:
                                "https://api.github.com/users/emetdas/repos",
                            events_url:
                                "https://api.github.com/users/emetdas/events{/privacy}",
                            received_events_url:
                                "https://api.github.com/users/emetdas/received_events",
                            type: "User",
                            site_admin: false,
                        },
                        parents: [
                            {
                                sha: "677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                                url: "https://api.github.com/repos/emetdas/Accordion/commits/677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                                html_url:
                                    "https://github.com/emetdas/Accordion/commit/677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                            },
                        ],
                    },
                    {
                        sha: "677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                        node_id:
                            "C_kwDOGerCmNoAKDY3N2FhN2ZmYjI0NWIzYjdiMzVlMDMxZTc3Y2IyYjAyZTdlMWNlZTg",
                        commit: {
                            author: {
                                name: "emetdas",
                                email: "emet@b2bleadstaff.com",
                                date: "2021-12-04T05:29:46Z",
                            },
                            committer: {
                                name: "emetdas",
                                email: "emet@b2bleadstaff.com",
                                date: "2021-12-04T05:29:46Z",
                            },
                            message: "all code is done",
                            tree: {
                                sha: "a83ca7272fd6565183815b398451d99924dcf666",
                                url: "https://api.github.com/repos/emetdas/Accordion/git/trees/a83ca7272fd6565183815b398451d99924dcf666",
                            },
                            url: "https://api.github.com/repos/emetdas/Accordion/git/commits/677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                            comment_count: 0,
                            verification: {
                                verified: false,
                                reason: "unsigned",
                                signature: null,
                                payload: null,
                            },
                        },
                        url: "https://api.github.com/repos/emetdas/Accordion/commits/677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                        html_url:
                            "https://github.com/emetdas/Accordion/commit/677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8",
                        comments_url:
                            "https://api.github.com/repos/emetdas/Accordion/commits/677aa7ffb245b3b7b35e031e77cb2b02e7e1cee8/comments",
                        author: {
                            login: "emetdas",
                            id: 72676990,
                            node_id: "MDQ6VXNlcjcyNjc2OTkw",
                            avatar_url:
                                "https://avatars.githubusercontent.com/u/72676990?v=4",
                            gravatar_id: "",
                            url: "https://api.github.com/users/emetdas",
                            html_url: "https://github.com/emetdas",
                            followers_url:
                                "https://api.github.com/users/emetdas/followers",
                            following_url:
                                "https://api.github.com/users/emetdas/following{/other_user}",
                            gists_url:
                                "https://api.github.com/users/emetdas/gists{/gist_id}",
                            starred_url:
                                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
                            subscriptions_url:
                                "https://api.github.com/users/emetdas/subscriptions",
                            organizations_url:
                                "https://api.github.com/users/emetdas/orgs",
                            repos_url:
                                "https://api.github.com/users/emetdas/repos",
                            events_url:
                                "https://api.github.com/users/emetdas/events{/privacy}",
                            received_events_url:
                                "https://api.github.com/users/emetdas/received_events",
                            type: "User",
                            site_admin: false,
                        },
                        committer: {
                            login: "emetdas",
                            id: 72676990,
                            node_id: "MDQ6VXNlcjcyNjc2OTkw",
                            avatar_url:
                                "https://avatars.githubusercontent.com/u/72676990?v=4",
                            gravatar_id: "",
                            url: "https://api.github.com/users/emetdas",
                            html_url: "https://github.com/emetdas",
                            followers_url:
                                "https://api.github.com/users/emetdas/followers",
                            following_url:
                                "https://api.github.com/users/emetdas/following{/other_user}",
                            gists_url:
                                "https://api.github.com/users/emetdas/gists{/gist_id}",
                            starred_url:
                                "https://api.github.com/users/emetdas/starred{/owner}{/repo}",
                            subscriptions_url:
                                "https://api.github.com/users/emetdas/subscriptions",
                            organizations_url:
                                "https://api.github.com/users/emetdas/orgs",
                            repos_url:
                                "https://api.github.com/users/emetdas/repos",
                            events_url:
                                "https://api.github.com/users/emetdas/events{/privacy}",
                            received_events_url:
                                "https://api.github.com/users/emetdas/received_events",
                            type: "User",
                            site_admin: false,
                        },
                        parents: [],
                    },
                ],
            },
        ];

        // Call the function
        const result = combineReposAndCommits(userRepos, userRepoCommits);

        // Check if the result matches the expected result
        expect(result).toEqual(expectedResult);
    });
});

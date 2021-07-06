# Lighthouse Reporting

To get a better understanding ov our progress we us a set of lighthouse tools to get relevant numbers per commit directly in the CI setup.

Lighthouse provides the following tools:

- `@lhci/cli` - A CLI too to spin up websites form the file system or directly from a URL
- `@lhci/server` - A server able to recieve reports over HTTP post requests and a UI displaying the progress over time.

![Untitled presentation (9)](https://user-images.githubusercontent.com/10064416/124641559-235e3c00-de8f-11eb-8236-c8687e599fd6.png)


# Setup & Configure Lighthouse CI

Install the cli in your repository by running `npm i -S @lhci/cli`

To contorl the CLI place a config file called `lighthouserc.js` at the root of your repo to control the options for Lighthouse CI. 

`echo "module.exports = {ci: { upload: { target: 'temporary-public-storage' } }}" > lighthouserc.js`

For advanced users who'd prefer to use CLI flags or keep the configuration file in another location, refer to the [configuration documentation](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md).

The simple configuration file below is all you need to started test collecting Lighthouse reports and storing them to temporary public storage.

> **Notice ⚠:**
> Temporary storege is publically available over a link

```JavaScript
module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

Run `lhci collect --url https://developers.google.com/web/tools/lighthouse`


# Run server

`npm run lhci-server:start` 

open 

`http://localhost:9001/app/projects`



# CI


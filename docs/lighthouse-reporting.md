# Lighthouse Reporting

To get a better understanding ov our progress we us a set of lighthouse tools to get relevant numbers per commit directly in the CI setup.

Lighthouse provides the following tools:

- `@lhci/cli` - A CLI too to spin up websites form the file system or directly from a URL
- `@lhci/server` - A server able to recieve reports over HTTP post requests and a UI displaying the progress over time.

![lighthouse-ci_github-action-flow_michael-hladky](https://user-images.githubusercontent.com/10064416/124683232-dbf6a080-decc-11eb-81b5-ebcc6bc547bf.png)

# Setup & Configure Lighthouse-CI CLI

Install the CLI in your repository by running `npm i -D @lhci/cli`

To contorl the CLI place a config file called `lighthouserc.js` at the root of your repo to control the options for Lighthouse CI. 

`echo "module.exports = {ci: { upload: { target: 'temporary-public-storage' } }}" > lighthouserc.js`

For advanced users who'd prefer to use CLI flags or keep the configuration file in another location, refer to the [configuration documentation](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md).

The simple configuration file below is all you need to started test collecting Lighthouse reports and storing them to temporary public storage.

> **Notice ⚠:**
> Temporary storege is publically available over a link

```javascript
module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

Add a script to your `package.json` to be able to run lhci without a global install.

```json
{
  scripts: {
    "lhci": "lhci"
  }
}
```

Now you can test it by running `npm run lhci -- collect --url https://developers.google.com/web/tools/lighthouse` in the repos root directory.

You should see the results in directly the root.

To organize the reporting artefacts better lighthouse-ci will introduce a `.lighthouseci` folder and automatically store the reports in this folder.

# Setup & Connfigure Lighhouse-CI Server

```bash
npm i -D @lhci/server sqlite3
```

Now you can spin up the server persisting to a sqlite db by running:

´npm run lhci -- server --storage.storageMethod=sql --storage.sqlDialect=sqlite --storage.sqlDatabasePath=./db.sql´ 

You may also add this as a script to your `package.json`.

```json
{
  scripts: {
    "npm run lhci-server:start": "npm run lhci -- server --storage.storageMethod=sql --storage.sqlDialect=sqlite --storage.sqlDatabasePath=./db.sql"
  }
}
```

The consol will prompt the port wherer lighthouse-ci is served. (by default 9001)

Open the browser under `http://localhost:9001/app/projects` to test it.



# CI


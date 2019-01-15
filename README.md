# dir2object
This module translates directory structures into plain JavaScript object with fs.stats detail.


* Install
```
$ npm i dir2object
```

* Usage

```javascript
const dir2object = require('dir2object');

console.log(dir2object(path))


/*
{ dir2object:
   { '.git':
      { COMMIT_EDITMSG: [Stats],
        config: [Stats],
        description: [Stats],
        FETCH_HEAD: [Stats],
        HEAD: [Stats],
        hooks: [Object],
        index: [Stats],
        info: [Object],
        logs: [Object],
        objects: [Object],
        refs: [Object] },
     '.gitattributes':
      Stats {
        dev: 3767451942,
        mode: 33206,
        nlink: 1,
        uid: 0,
        gid: 0,
        rdev: 0,
        blksize: undefined,
        ino: 1970324837300547,
        size: 66,
        blocks: undefined,
        atimeMs: 1547551173737.9102,
        mtimeMs: 1547551173737.9102,
        ctimeMs: 1547551173737.9102,
        birthtimeMs: 1547551173736.9104,
        atime: 2019-01-15T11:19:33.738Z,
        mtime: 2019-01-15T11:19:33.738Z,
        ctime: 2019-01-15T11:19:33.738Z,
        birthtime: 2019-01-15T11:19:33.737Z },
     'dir2object.js':
      Stats {
        dev: 3767451942,
        mode: 33206,
        nlink: 1,
        uid: 0,
        gid: 0,
        rdev: 0,
        blksize: undefined,
        ino: 8162774324769545,
        size: 883,
        blocks: undefined,
        atimeMs: 1547551509639.0808,
        mtimeMs: 1547551509639.0808,
        ctimeMs: 1547551521167.694,
        birthtimeMs: 1547551200636.0156,
        atime: 2019-01-15T11:25:09.639Z,
        mtime: 2019-01-15T11:25:09.639Z,
        ctime: 2019-01-15T11:25:21.168Z,
        birthtime: 2019-01-15T11:20:00.636Z },
     node_modules:
      { fs: [Object],
        inherits: [Object],
        path: [Object],
        process: [Object],
        util: [Object] },
     'package-lock.json':
      Stats {
        dev: 3767451942,
        mode: 33206,
        nlink: 1,
        uid: 0,
        gid: 0,
        rdev: 0,
        blksize: undefined,
        ino: 2251799814011217,
        size: 1222,
        blocks: undefined,
        atimeMs: 1547551466626.3264,
        mtimeMs: 1547551466626.3264,
        ctimeMs: 1547551466646.3325,
        birthtimeMs: 1547551466625.3286,
        atime: 2019-01-15T11:24:26.626Z,
        mtime: 2019-01-15T11:24:26.626Z,
        ctime: 2019-01-15T11:24:26.646Z,
        birthtime: 2019-01-15T11:24:26.625Z },
     'package.json':
      Stats {
        dev: 3767451942,
        mode: 33206,
        nlink: 1,
        uid: 0,
        gid: 0,
        rdev: 0,
        blksize: undefined,
        ino: 3096224744143410,
        size: 741,
        blocks: undefined,
        atimeMs: 1547551466585.3167,
        mtimeMs: 1547551466585.3167,
        ctimeMs: 1547551466620.3257,
        birthtimeMs: 1547551466585.3167,
        atime: 2019-01-15T11:24:26.585Z,
        mtime: 2019-01-15T11:24:26.585Z,
        ctime: 2019-01-15T11:24:26.620Z,
        birthtime: 2019-01-15T11:24:26.585Z },
     'README.md':
      Stats {
        dev: 3767451942,
        mode: 33206,
        nlink: 1,
        uid: 0,
        gid: 0,
        rdev: 0,
        blksize: undefined,
        ino: 1688849860589888,
        size: 248,
        blocks: undefined,
        atimeMs: 1547552082649.1018,
        mtimeMs: 1547552082649.1018,
        ctimeMs: 1547552082649.1018,
        birthtimeMs: 1547551173673.896,
        atime: 2019-01-15T11:34:42.649Z,
        mtime: 2019-01-15T11:34:42.649Z,
        ctime: 2019-01-15T11:34:42.649Z,
        birthtime: 2019-01-15T11:19:33.674Z } } }
*/


```
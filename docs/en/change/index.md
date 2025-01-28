> Commonly used symbols description:
>
> ✨New: Used to indicate tasks that add new features or new characteristics.
>
> 🛠️Optimization: Used to indicate tasks for code refactoring or performance optimization.
>
> 📖Documentation: Used to indicate tasks for updating or adding documentation.
>
> 🐛Fix: Used to indicate tasks for fixing bugs or issues.
>
> 💥Breaking Change: Refers to changes in code, API, protocol, or system that may cause systems, libraries, or applications dependent on the old version to not work properly.


## [v0.6.11](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.11) 2025-01-12
Released by @github-actions[bot] on 2025-01-12T16:16:35Z

## What's Changed
* feat(naming): query service subscriber list by @a981008 in https://github.com/nacos-group/r-nacos/pull/189
* support linux x64 gnu build by @leyou240 in https://github.com/nacos-group/r-nacos/pull/194

+ New: Added service management subscriber list viewing function (currently only supports subscription viewing for v2.x grpc protocol); #189 
+ New: Updated packaging build script, added support for x86_64-unknown-linux-gnu application package (if some older linux systems cannot run, you can use x86_64-unknown-linux-musl application package); #193

## New Contributors
* @leyou240 made their first contribution in https://github.com/nacos-group/r-nacos/pull/194

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.10...v0.6.11

## [v0.6.10](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.10) 2024-12-30
Released by @github-actions[bot] on 2024-12-30T15:23:02Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.9...v0.6.10

+ Fix: Fixed the issue of incorrect display of namespace whitelist content in the console user management list in version v0.6.9; #190

## [v0.6.9](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.9) 2024-12-29
Released by @github-actions[bot] on 2024-12-29T16:51:42Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.8...v0.6.9

+  New: Console user management now allows setting namespace blacklist and whitelist data permissions; (#186)
+  New: Console management interface now enables data permission control by namespace; (#188)
+  Update: Console frontend interfaces have been upgraded to v2, with plans to phase out the old console interfaces; (r-nacos/rnacos-console-web#24)

## [v0.6.8](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.8) 2024-12-09
Released by @github-actions[bot] on 2024-12-09T15:18:55Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.7...v0.6.8

+  Fix: Resolved console page errors caused by internationalization; #185 

## [v0.6.7](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.7) 2024-12-08
Released by @github-actions[bot] on 2024-12-08T17:28:09Z

## What's Changed
* docs: fix typo by @mindfocus in https://github.com/nacos-group/r-nacos/pull/180

+  New: Console now supports internationalization, including both Chinese and English, with options for automatic language detection and manual switching; #181
+  Fix: Addressed compatibility issues with the default namespace ID in gRPC protocol configuration requests, where "public" and an empty string were considered equivalent; #184
+  Improved: Added registration time details to the console service instance list; #177
+  Improved: Console configuration list now displays configuration descriptions; #179

## New Contributors
* @mindfocus made their first contribution in https://github.com/nacos-group/r-nacos/pull/180

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.6...v0.6.7

## [v0.6.6](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.6) 2024-11-17
Released by @github-actions[bot] on 2024-11-17T17:09:08Z

## What's Changed
* feat: support extra runtime configs with env by @fengxsong in https://github.com/nacos-group/r-nacos/pull/169

## New Contributors
* @fengxsong made their first contribution in https://github.com/nacos-group/r-nacos/pull/169

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.5...v0.6.6


+  Fix: Resolved the issue where changing the addresses of some nodes in the cluster caused the registry cluster to malfunction; #170
+  New: Introduced a service health check interface to detect problematic nodes, allowing for automatic removal or restart of such nodes in the cluster; #171
+  New: Added a backup data HTTP interface to enable scheduled backups via external scripts; #172
+  Optimization: Adjusted the parameter configuration items in the k8s helm template to support setting all configuration parameters of r-nacos; from @fengxsong PR #169

## [v0.6.5](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.5) 2024-11-11
Released by @github-actions[bot] on 2024-11-11T01:09:03Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.4...v0.6.5

+  Optimization: Made r-nacos compatible with the grpc publish configuration interface in nacos-sdk-csharp; #162 
+  New: Added a sub-command `mysql-to-data` to r-nacos, enabling the export of nacos mysql data (including configurations, namespaces, and user data) to intermediate data files, facilitating indirect import of nacos data into r-nacos; #138
+  Fix: Corrected a typo on the console page, changing `主角点` to `主节点`;

## [v0.6.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.4) 2024-11-03
Released by @github-actions[bot] on 2024-11-03T17:30:36Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.3...v0.6.4

+  Fix: Resolved the issue where the cursor couldn't be placed in the input box during configuration editing in the console; #156
+  Enhancement: The console editor now allows dynamic height adjustment and supports full-screen editing;
+  Fix: Addressed the problem where some namespace names were reset to IDs after upgrading from v0.5.x to v0.6.x; #161

## [v0.6.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.3) 2024-10-27
Released by @github-actions[bot] on 2024-10-27T18:03:59Z

## What's Changed
* fix: Removed redundant prefixes by @MangerLe in https://github.com/nacos-group/r-nacos/pull/153
* refactor: Switched print statements to logging by @MangerLe in https://github.com/nacos-group/r-nacos/pull/154

+  New: Introduced a console namespace component that enables viewing and copying namespace IDs.
+  New: Added the `openapi-to-data` subcommand to r-nacos, allowing full export of namespace and configuration data from nacos to an intermediate file via openapi; this facilitates indirect data import into r-nacos; #138

## New Contributors
* @MangerLe made their first contribution in https://github.com/nacos-group/r-nacos/pull/153

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.2...v0.6.3

## [v0.6.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.2) 2024-10-21
Released by @github-actions[bot] on 2024-10-21T01:09:52Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.1...v0.6.2

+  Fix: Updates from the cluster no longer maintain instance heartbeat detection, addressing service health fluctuation issues; #139
+  New: Registry HTTP registration now supports parameter configuration for instance health and expiration time; #139
+  Fix: Resolved a panic issue caused by unwrap parsing empty parameters in the openapi naming model in certain scenarios; #151
+  New: Added subcommands `data-to-sqlite` and `sqlite-to-data` to r-nacos, enabling conversion between intermediate files exported by r-nacos and SQLite database files; #138

## [v0.6.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.1) 2024-10-13
Released by @github-actions[bot] on 2024-10-13T16:13:10Z

## What's Changed
* feat(user): prevent deletion of the last admin user by @a981008 in https://github.com/nacos-group/r-nacos/pull/145

+  New: Console user management now prevents the deletion of the last admin user to avoid accidental removal. #34
+  Optimization: Namespace management now supports data synchronization with the configuration center and registry. #126
	+ Adding configurations or services through the interface will automatically create the corresponding namespace if it doesn't exist;
	+ Namespaces containing configuration or service data cannot be deleted;

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.6.0...v0.6.1

## [v0.6.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.0) 2024-10-07
Released by @github-actions[bot] on 2024-10-07T17:42:27Z

## What's Changed

* Added support for data export and import, enabling scenarios like backup, recovery, and data migration; #138
* On Linux and macOS, data is now stored by default in the absolute path `~/.local/share/r-nacos/nacos_db`; #78
* Disabled console CAPTCHA support for frontend-backend integration. When `RNACOS_CONSOLE_ENABLE_CAPTCHA=false`, the returned data is null, allowing the frontend to hide the CAPTCHA; by @a981008 in https://github.com/nacos-group/r-nacos/pull/142
* Compatibility with v0.5.x data, enabling seamless upgrades from v0.5.x; #123

## New Contributors
* @a981008 made their first contribution in https://github.com/nacos-group/r-nacos/pull/142

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.23...v0.6.0

## [v0.6.0-beta](https://github.com/nacos-group/r-nacos/releases/tag/v0.6.0-beta) 2024-09-27
Released by @github-actions[bot] on 2024-09-27T01:12:42Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.23...v0.6.0-beta

1. Added support for data export and import, enabling scenarios like backup, recovery, and data migration; #138
2. On Linux and macOS, data is now stored by default in the absolute path `~/.local/share/r-nacos/nacos_db`; #78
3. Compatibility with v0.5.x data, enabling seamless upgrades from v0.5.x;

This is currently a beta version. Interested users can try it out in testing environments. For production environments, it is recommended to wait for the official release before upgrading.

## [v0.5.23](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.23) 2024-09-17
Released by @github-actions[bot] on 2024-09-17T15:21:49Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.22...v0.5.23

1. 🐛 Fixed: Resolved an issue where adding a user in the console without setting a role would cause system exceptions; #136
2. 🛠️ Optimized: The login interface in the console now uses the same error code for both non-existent usernames and incorrect password validations to prevent bots from detecting valid usernames; #137

## [v0.5.22](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.22) 2024-09-08
Released by @github-actions[bot] on 2024-09-08T14:42:04Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.21...v0.5.22

1. 🐛Fix: Resolved an issue where metadata for some nodes wasn't updated when using the HTTP interface to update gRPC-registered service instances in cluster scenarios; #132
2. 🛠️Optimization: Improved the console namespace dropdown component to better handle the display of lengthy namespace content; #133

## [v0.5.21](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.21) 2024-09-02
Released by @github-actions[bot] on 2024-09-02T01:11:46Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.20...v0.5.21

1. 🛠️Optimization: Enhanced the console editor's style to better distinguish between the cursor line and selected content background colors;
2. 🛠️Optimization: Improved the query parameter input box in the management page to trigger searches immediately upon pressing Enter;
3. 🛠️Optimization: Introduced a toggle for logging monitoring metrics, with logging disabled by default;

## [v0.5.20](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.20) 2024-08-18
Released by @github-actions[bot] on 2024-08-18T13:50:57Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.19...v0.5.20

r-nacos v0.5.20 Release

1. ✨New: Added compatibility with the Nacos OpenAPI namespace module interface #127
2. 🛠️Optimization: Modified the console namespace creation logic to automatically generate a namespace ID if none is provided during creation #127
3. 🛠️Optimization: Enhanced the console frontend interaction. ① Namespace ID can be omitted during creation ② The namespace selector in configuration and service management pages now supports text filtering, improving the experience with multiple namespaces ③ Configuration management now allows cloning configurations, with clear distinctions between cloning and editing to avoid interference.
4. 🛠️Optimization: Extended the frontend resource cache duration from 1 day to 7 days

## [v0.5.20-beta](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.20-beta) 2024-08-06
Released by @github-actions[bot] on 2024-08-06T00:51:49Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.19...v0.5.20-beta

Fixed the raft API tool to address issue #125.

## [v0.5.19](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.19) 2024-08-05
Released by @github-actions[bot] on 2024-08-05T00:32:57Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.18...v0.5.19

1. 🐛Fix: Resolved an issue where using r-nacos with dubbo 3.2.14 caused errors (#124).
2. 🛠️Optimization: Enhanced the namespace selector on the console page by adding descriptions to the namespace component and enabling the persistence of namespace selections in the browser.

## [v0.5.18](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.18) 2024-07-29
Released by @github-actions[bot] on 2024-07-29T00:50:58Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.17...v0.5.18

1. Added compatibility with nacos registry 1.x http protocol, supporting both JSON and nacos custom formats for metadata (#121).
2. Improved r-nacos system monitoring by adding date displays for metrics with a 1-hour interval and introducing percentile statistics for request processing times.

## [v0.5.17](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.17) 2024-07-21
Released by @github-actions[bot] on 2024-07-21T17:16:34Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.16...v0.5.17

1. Enhanced r-nacos system monitoring:
	1. Added 1-hour interval metric caching to allow querying resource usage for approximately 15 days on the control panel.
	2. Reduced the precision of monitoring metrics by switching from f64 to f32 floating-point types.
	3. Fixed an issue where automatic data loading did not stop when navigating away from the monitoring page.
2. Improved the console page by enabling different pagination sizes for data tables in configuration management and service instance management pages.

## [v0.5.16](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.16) 2024-07-14
Released by @github-actions[bot] on 2024-07-14T23:11:17Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.15...v0.5.16

1. ✨New: Improved observability with a new monitoring page in the console to view r-nacos metrics
	1. The r-nacos backend now collects and caches recent metrics data, providing an interface for the console to query this data. #117
	2. The r-nacos frontend has a new monitoring page using echarts, allowing users to view r-nacos metrics.
2. 🐛Fix: Adjusted the order of data loading and raft initialization to resolve an issue where the configuration list would occasionally be empty after quickly restarting r-nacos on Windows. 

## [v0.5.15](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.15) 2024-07-07
Released by @github-actions[bot] on 2024-07-07T16:02:19Z

## What's Changed
* feat: Added a captcha toggle by @moyu-x in https://github.com/nacos-group/r-nacos/pull/113

1. 🐛Fix: Implemented a file lock mechanism to fix the issue of occasionally empty configuration lists after quickly restarting r-nacos on Windows.  #86 #88
2. ✨New: Introduced a toggle to enable or disable the console captcha, defaulting to enabled. When disabled, it can be used to manage console interfaces via openapi. #113

## New Contributors
* @moyu-x made their first contribution in https://github.com/nacos-group/r-nacos/pull/113

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.14...v0.5.15

## [v0.5.14](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.14) 2024-06-30
Released by @github-actions[bot] on 2024-06-30T17:01:10Z

## What's Changed
* fix: ingress 503 by @linonetwo in https://github.com/nacos-group/r-nacos/pull/112

1. 🐛Fix: Resolved a login interface compatibility issue, enabling nacos-sdk-rust to use enable_auth_plugin_http for account password login; #110
2. 🛠️Optimization: Introduced a configurable metric collection interval, defaulting to 15 seconds, separate from the original log printing interval, to allow longer log intervals without affecting metric collection; #64
3. 🛠️Optimization: Added support for collecting summary-type metrics, capturing histogram and summary metrics for http/grpc request response times; #64
4. ✨New: Implemented a Prometheus metrics exporter, allowing monitoring metrics to be integrated into Prometheus via the `http://127.0.0.1:8848/metrics` interface; #64
5. 🛠️Optimization: Updated the k8s helm service ports definition to include port 10848, supporting ingress for console exposure; #112

## New Contributors
* @linonetwo made their first contribution in https://github.com/nacos-group/r-nacos/pull/112

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.13...v0.5.14

## [v0.5.13](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.13) 2024-06-23
Released by @github-actions[bot] on 2024-06-23T16:41:33Z

## What's Changed
* Match configuration file type based on data_id by @bestK in https://github.com/nacos-group/r-nacos/pull/105

1. ✨New: Enhanced system observability by adding support for defining and collecting key service metrics, with the ability to print these metrics to logs; #64
2. 🐛Fix: Addressed a memory leak issue where r-nacos would slowly increase memory usage over long periods in certain scenarios; #108
3. 🐛Fix: Fixed a compatibility issue with the config grpc query interface where lastModified was 0 (not relied upon by the official SDK); #107
4. 🛠️Optimization: Increased the console API request timeout from 1 second to 15 seconds; [Link to issue](https://github.com/r-nacos/rnacos-console-web/issues/7)
5. 🛠️Optimization: Improved the console's configuration import feature to match configuration file types based on data_id (user rp); #105

## New Contributors
* @bestK made their first contribution in https://github.com/nacos-group/r-nacos/pull/105

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.12...v0.5.13


## [v0.5.12](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.12) 2024-06-10
Released by @github-actions[bot] on 2024-06-10T16:15:12Z

## What's Changed
* feat(*): Switched the memory allocator to mimalloc and added compilation release optimizations by @Clownsw in https://github.com/nacos-group/r-nacos/pull/99
* [polish] Added version numbers to released file names by @asmpg in https://github.com/nacos-group/r-nacos/pull/103


**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.11...v0.5.12

## [v0.5.11](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.11) 2024-06-02
Released by @github-actions[bot] on 2024-06-02T15:25:47Z

## What's Changed
* Added RNACOS_ADMIN_USERNAME and RNACOS_ADMIN_PASSWORD environment variables to support modifying the default admin username and password by @yimiaoxiehou in https://github.com/nacos-group/r-nacos/pull/97


1. 🐛Fix: Resolved the issue where the token was not refreshed by the client in time after expiration when authentication was enabled #100
2. 🛠️Optimization: The service instance heartbeat interface now supports light beat mode, addressing the issue of an empty service list when switching from nacos to rnacos in running applications #85
3. 🛠️Optimization: Added support for setting the configuration format of the configuration center through the SDK interface #87
4. ✨New: Added support for the SearchConfig query interface in the Go SDK #101
5. ✨New: Added support for setting the initial admin username and password through startup configuration #97
6. 📖Documentation: Added an explanation for the RNACOS_API_LOGIN_TIMEOUT parameter in the interface authentication timeout #100

## New Contributors
* @yimiaoxiehou made their first contribution in https://github.com/nacos-group/r-nacos/pull/97

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.10...v0.5.11

## [v0.5.10](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.10) 2024-05-27
Released by @github-actions[bot] on 2024-05-27T01:10:11Z

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.9...v0.5.10

The new version of the console frontend still has some minor issues (#95). To ensure the stability of the latest official version, we will temporarily revert the console frontend to the old version.

We will switch back to the new version once all issues with the new console frontend are resolved.

## [v0.5.9](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.9) 2024-05-21
Released by @github-actions[bot] on 2024-05-21T14:40:05Z

## What's Changed
* feat(*): Code snippet optimization by @Clownsw in https://github.com/nacos-group/r-nacos/pull/90

v0.5.9 addresses the issues with the console frontend in v0.5.8. The changes compared to v0.5.7 include:

1. ✨ New: Adjusted GitHub workflows to support packaging MacOS arm64 installation packages (#77)
2. ✨ New: Added authentication for SDK-facing interfaces (#65)
3. ✨ New: Enabled validation of cluster communication requests using a cluster token (#93)
4. 🛠️ Optimization: Switched to the newly refactored console frontend, which retains most of the same functionality. Future updates will include mobile support and internationalization (#58).
5. 🛠️ Optimization: Restructured and refactored the openapi interface code (#62)

In this update, the console frontend was switched to the newly refactored version [rnacos-console-web](https://github.com/r-nacos/rnacos-console-web).
The entire console refactoring was completed by @DaqiongYang. After this release, he will lead the future development of the console frontend.

After more than a month of磨合, we have finally found a suitable frontend development lead for the project.
From now on, the author can focus more on system design and backend development.

We would like to extend our特别感谢 to @DaqiongYang for his work.

## New Contributors
* @Clownsw made their first contribution in https://github.com/nacos-group/r-nacos/pull/90

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.8...v0.5.9

## [v0.5.8](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.8) 2024-05-20
Released by @github-actions[bot] on 2024-05-20T01:01:10Z

## What's Changed
* Rebuilt the structure of openapi by @Freedomfirebody in https://github.com/nacos-group/r-nacos/pull/70

---

Issues after release: Adding configurations directly to public #82 

For those using the console to edit configurations, please temporarily use version v0.5.7.
I will take some time to address this and release a new version soon.

## New Contributors
* @Freedomfirebody made their first contribution in https://github.com/nacos-group/r-nacos/pull/70

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.7...v0.5.8

## [v0.5.8-beta.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.8-beta.1) 2024-05-12
Released by @github-actions[bot] on 2024-05-12T17:38:30Z

## What's Changed
* Rebuilt the structure of openapi by @Freedomfirebody in https://github.com/nacos-group/r-nacos/pull/70

1. Adjusted github workflows to add support for packaging MacOS arm64 installation packages #77
2. Added authentication for SDK-facing interfaces #65
3. Switched to the newly refactored console version 0.4.0-beta.2, with current functionality largely consistent; future updates will include mobile support, internationalization, etc.
4. Refactored and restructured the openapi interface code #62

## New Contributors
* @Freedomfirebody made their first contribution in https://github.com/nacos-group/r-nacos/pull/70

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.7...v0.5.8-beta.1

## [v0.5.7](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.7) 2024-05-05
Released by @github-actions[bot] on 2024-05-05T11:25:53Z

## What's Changed
* Updated the old documentation link address by @Aurorxa in https://github.com/nacos-group/r-nacos/pull/63
* Merged Develop and updated version to v0.5.7-beta by @heqingpan in https://github.com/nacos-group/r-nacos/pull/67


1. Fixed the issue where the log printing time could not be printed according to the time zone; now it prints log time in the local time zone by default, and supports specifying the time zone through configuration. #56
2. Fixed the issue where configurations with empty dataId could be added but not deleted due to the console switching to the v2 version interface. #69

## New Contributors
* @Aurorxa made their first contribution in https://github.com/nacos-group/r-nacos/pull/63

**Full Changelog**: https://github.com/nacos-group/r-nacos/compare/v0.5.6...v0.5.7

----

2024-05-08 09:00

The Mac package `rnacos-x86_64-apple-darwin.tar.gz` generated by GitHub Actions in this version prompts `bad CPU type in executable` on x86 (possibly because the latest MacOS packaging platform has switched to the arm64 architecture).

I will manually repackage and upload it on my computer today, and adjust the corresponding GitHub Actions later.

If there are still issues, you can use the v0.5.6 version for now.

## [v0.5.6](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.6) 2024-04-19
Released by @github-actions[bot] on 2024-04-19T16:32:55Z

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.5.5...v0.5.6

1. The console interface has been refactored to be independent of the openapi, allowing for more flexible support of console features and easier future compatibility with the nacos openapi. #58
2. In the configuration center, two new fields have been added to the configuration information: configuration format and configuration description. #55 #57
3. The configuration editor in the console's configuration center has been replaced with a code editor that supports syntax highlighting, making it more user-friendly for editing configuration content. #55 #57
4. Fixed an issue where the configuration center history record ID would reset to 1 after a restart. (Note: The history record ID is only used for display in the console and does not affect functionality.)

## [v0.5.5](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.5) 2024-04-13
Released by @github-actions[bot] on 2024-04-13T02:24:29Z

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.5.4...v0.5.5

1. The console login captcha has been simplified. #54
2. Fixed an issue where the page path was incorrect after logging out and logging back in when using an nginx proxy for the console.
3. The default console login expiration time has been set to one day, with the option to configure the expiration time.

## [v0.5.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.4) 2024-04-07
Released by @github-actions[bot] on 2024-04-07T16:00:37Z

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.5.3...v0.5.4

1. Added support for CSS/JS caching in the console to improve page loading efficiency. #53
2. Fixed an issue where logged-in users did not have permission to change their passwords.

## [v0.5.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.3) 2024-04-02
Released by @github-actions[bot] on 2024-04-02T00:11:02Z

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.5.2...v0.5.3

+ Fixed an issue where the console configuration list page used outdated interfaces for downloading and uploading files, which did not support request forwarding to the /rnacos/ subdirectory.

## [v0.5.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.2) 2024-03-31
Released by @github-actions[bot] on 2024-03-31T14:14:42Z

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.5.1...v0.5.2

+ Fixed an issue where the user parameter field in the console query user interface was incorrect.
+ The console frontend and backend paths were moved to a subdirectory, allowing r-nacos to be forwarded to an existing domain name under a subdirectory. #46
+ By default, only the authenticated console is retained, and the unauthenticated console is disabled, with the option to enable it through configuration. #51
+ Added support for Linux arm64 packages during the build process.

## [v0.5.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.1) 2024-03-27
Released by @github-actions[bot] on 2024-03-27T16:13:27Z

## What's Changed
* [config] Default configuration files were included during packaging by @asmpg in https://github.com/r-nacos/r-nacos/pull/47
* The console frontend now supports gzip compression for resource requests to improve the initial page load speed. #43
* Fixed an issue where the raft initialization index file was written in two steps, with the first write succeeding but the second write failing, leading to incomplete index content and startup failure upon restart. #50

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.5.0...v0.5.1

## [v0.5.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.0) 2024-03-18
Released by @github-actions[bot] on 2024-03-18T15:38:23Z

## What's Changed
* [polish] Update the repository URL in the README file to r-nacos by @asmpg in https://github.com/r-nacos/r-nacos/pull/45

* Improved the raft cluster write mechanism;
	* The single-node write TPS of the configuration center increased from 1.8k to 17.6k, a 9.7x improvement;
	* (Running on a single machine) The 3-node cluster write TPS increased from 1.5k to 7.6k, a 5x improvement;
* Improved the raft cluster write mechanism and removed sled storage, replacing it with custom raft log and snapshot files;
	* After the adjustment, the initial startup memory decreased from 26M to 5M;
	* During stress testing of the configuration center, memory usage decreased from over 100M to around 20M;
* The removal of sled storage makes v0.5.x incompatible with v0.4.x storage, which users of the old version should be aware of before upgrading; The storage incompatibility mainly affects the configuration center and console user data;
	* The configuration center can perform data migration through configuration export and import;
	* There is currently no tool to support the migration of console user data; As the demand for this part is expected to be small, it is tentatively decided not to provide a separate migration tool; If there is more demand from users, a tool to support migration from v0.4.x to v0.5.x can be considered later; (Users in need can raise issues for feedback, and if the number exceeds 10, I will make time to add this migration tool);

## New Contributors
* @asmpg made their first contribution in https://github.com/r-nacos/r-nacos/pull/45

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.4.3...v0.5.0

## [v0.5.0-beta](https://github.com/nacos-group/r-nacos/releases/tag/v0.5.0-beta) 2024-03-10
Released by @github-actions[bot] on 2024-03-10T10:20:02Z

## What's Changed
* [polish] Update the repository URL in the README file to r-nacos by @asmpg in https://github.com/r-nacos/r-nacos/pull/45
* Improved the raft cluster write mechanism;
	* Single-node write TPS in the configuration center increased from 1.8k to 17.6k, a 9.7x boost;
	* (On a single machine) 3-node cluster write TPS increased from 1.5k to 7.6k, a 5x improvement;
* Enhanced the raft cluster write mechanism by removing sled storage and replacing it with custom raft log and snapshot files;
	* Initial startup memory usage dropped from 26M to 5M;
	* Memory usage during configuration center stress testing decreased from over 100M to around 20M;
* The removal of sled storage makes v0.5.x incompatible with v0.4.x storage, which users of the old version should note before upgrading; this incompatibility mainly affects the configuration center and console user data;
	* Data migration for the configuration center can be done through export and import configurations;
	* Currently, there is no tool to migrate console user data; since demand for this is expected to be low, a separate migration tool will not be provided for now; if there is significant demand, a tool to migrate from v0.4.x to v0.5.x may be developed later (users with this need can raise an issue, and if the number exceeds 10, I will consider adding this migration tool);
	* Currently, v0.5.x is only available as a beta version, and production environments should wait for the official release before considering migration;

The primary focus of this change is [Optimize raft cluster write mechanism](https://github.com/r-nacos/r-nacos/issues/19), and more details can be found in the corresponding [issue](https://github.com/r-nacos/r-nacos/issues/19).

## New Contributors
* @asmpg made their first contribution in https://github.com/r-nacos/r-nacos/pull/45

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.4.3...v0.5.0-beta

## [v0.4.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.3) 2024-03-01
Released by @github-actions[bot] on 2024-03-01T14:35:05Z


## What's Changed
* feat: Added Helm chart by @dickens7 in https://github.com/r-nacos/r-nacos/pull/40
* Fixed the issue where importing configurations from the console didn't work on cluster slave nodes #41

## New Contributors
* @dickens7 made their first contribution in https://github.com/r-nacos/r-nacos/pull/40

**Full Changelog**: https://github.com/r-nacos/r-nacos/compare/v0.4.2...v0.4.3

## [v0.4.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.2) 2024-01-09
Released by @github-actions[bot] on 2024-01-09T15:38:38Z

Updated to version v0.4.2, fixing the issue where the console frontend incorrectly converted time to string format.

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.4.1...v0.4.2

## [v0.4.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.1) 2024-01-08
Released by @github-actions[bot] on 2024-01-08T16:58:27Z

1. Adjusted the input and output parameter type handling in r-nacos to support nacos-sdk-go #35
2. Adjusted the input and output parameter type handling in r-nacos to support nacos-sdk-rust #36

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.4.0...v0.4.1

## [v0.4.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.0) 2023-12-23
Released by @github-actions[bot] on 2023-12-23T14:59:09Z

1. Added support for opening a separate HTTP port dedicated to the new console, allowing the new console port to be exposed to the external network. [#29](https://github.com/heqingpan/rnacos/issues/29)
2. Introduced a unified login verification interceptor for the new console HTTP port requests, supporting necessary checks like login frequency, to enable exposure to the external network. [#29](https://github.com/heqingpan/rnacos/issues/29)
3. By default, an administrator is added when the new console is enabled. [#29](https://github.com/heqingpan/rnacos/issues/29)
4. Added a user management module to the new console, allowing management of users and their permissions. [#29](https://github.com/heqingpan/rnacos/issues/29)
5. Implemented a simple permission control module in the new console. [#29](https://github.com/heqingpan/rnacos/issues/29)
6. Updated the new console web frontend page and upgraded rnacos-web-dist-wrap to version v0.3.1. [#29](https://github.com/heqingpan/rnacos/issues/29)

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.9...v0.4.0

## [v0.4.0-beta.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.0-beta.4) 2023-12-17
Released by @github-actions[bot] on 2023-12-17T13:27:08Z

1. The new console frontend now includes page permission controls;
2. The new console backend now includes permission controls for both interface and page requests;
3. Released the new version of r-nacos, v0.4.0-beta.4.

Role permissions are as follows:

1. Administrator: Full access to all console features.
2. Developer: Access to all console features except user management.
3. Visitor: Can only view data in the configuration and registration centers, with no editing rights.

The main features of the new console are now complete, with some security enhancements like login failure rate limits still to be added. The official release will follow once these are completed.

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.4.0-beta.1...v0.4.0-beta.4


## [v0.4.0-beta.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.4.0-beta.1) 2023-12-09
Released by @github-actions[bot] on 2023-12-09T16:10:05Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.9...v0.4.0-beta.1

Developed a new console for r-nacos, which supports a new HTTP port, user password login, and exposure to the external network.

1. The new console opens a new HTTP port to allow external network access, enabling the new console's port to be exposed to the external network separately. The port number is http_port+2000, defaulting to 10848, and can be accessed locally via http://127.0.0.1:10848/.
2. The new console includes a user management module, allowing for the management of console users. The default username is admin, with the corresponding password being admin; the password should be updated before exposing the console to the external network.
3. All interfaces in the new console now require login verification, and the login page interface includes captcha verification (future official versions will also include error verification frequency interception).

The new console is still missing the final role permission control module, which is yet to be developed. For specific plans, refer to: https://github.com/heqingpan/rnacos/issues/29

## [v0.3.9](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.9) 2023-10-16
Released by @github-actions[bot] on 2023-10-16T16:14:25Z

## What's Changed
* Updated the rnacos-web-dist-wrap version to v0.2.2, improved the console page style, and fixed the issue where the console displayed scrollbars by default on Windows browsers, which looked unattractive.
* znb 20231014 Added tenant validation in the configuration center by @zhangyubo in https://github.com/heqingpan/rnacos/pull/24
* znb 20231015 Added validation for data_id, group, content, and other parameters in the configuration center by @zhangyubo in https://github.com/heqingpan/rnacos/pull/25
* Development updates by @heqingpan in https://github.com/heqingpan/rnacos/pull/26
* znb 20231016 Added character validity checks for tenant, group, and data_id when deleting configurations by @zhangyubo in https://github.com/heqingpan/rnacos/pull/27

## New Contributors
* @zhangyubo made their first contribution in https://github.com/heqingpan/rnacos/pull/24

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.8...v0.3.9

## [v0.3.8](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.8) 2023-09-29
Released by @github-actions[bot] on 2023-09-29T14:30:58Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.7...v0.3.8

## [v0.3.7](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.7) 2023-09-28
Released by @github-actions[bot] on 2023-09-28T13:28:11Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.6...v0.3.7

## [v0.3.6](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.6) 2023-09-27
Released by @github-actions[bot] on 2023-09-27T00:11:59Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.5...v0.3.6

## [v0.3.5](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.5) 2023-09-24
Released by @github-actions[bot] on 2023-09-24T07:11:00Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.4...v0.3.5

## [v0.3.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.4) 2023-09-20
Released by @github-actions[bot] on 2023-09-20T15:20:21Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.3...v0.3.4

## [v0.3.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.3) 2023-09-18
Released by @github-actions[bot] on 2023-09-18T16:18:24Z


## What's Changed
* Fix issue #14 by @zzyandzzy in https://github.com/heqingpan/rnacos/pull/15

## New Contributors
* @zzyandzzy made their first contribution in https://github.com/heqingpan/rnacos/pull/15

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.2...v0.3.3

## [v0.3.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.2) 2023-09-17
Released by @github-actions[bot] on 2023-09-17T16:45:10Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.1...v0.3.2

## [v0.3.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.1) 2023-09-17
Released by @github-actions[bot] on 2023-09-17T15:50:27Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.3.0...v0.3.1

## [v0.3.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.3.0) 2023-09-16
Released by @github-actions[bot] on 2023-09-16T12:36:37Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.2...v0.3.0

## [v0.2.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.3) 2023-09-16
Released by @github-actions[bot] on 2023-09-16T12:07:25Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.1...v0.2.3

## [v0.2.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.2) 2023-09-15
Released by @github-actions[bot] on 2023-09-15T16:19:09Z

## What's Changed
* raft_feature v0.2.1-beta.1 by @heqingpan in https://github.com/heqingpan/rnacos/pull/9


**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.0...v0.2.2

## [v0.2.2-beta.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.2-beta.1) 2023-08-26
Released by @github-actions[bot] on 2023-08-26T00:57:32Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.1-beta.1...v0.2.2-beta.1

## [v0.2.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.1) 2023-08-25
Released by @github-actions[bot] on 2023-08-25T23:57:27Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.0...v0.2.1

## [v0.2.1-beta.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.1-beta.2) 2023-08-25
Released by @github-actions[bot] on 2023-08-25T16:21:56Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.0...v0.2.1-beta.2

## [v0.2.1-beta.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.1-beta.1) 2023-08-07
Released by @github-actions[bot] on 2023-08-07T17:08:40Z

## What's Changed
* Added raft_feature v0.2.1-beta.1 by @heqingpan in https://github.com/heqingpan/rnacos/pull/9


**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.2.0...v0.2.1-beta.1

## [v0.2.0](https://github.com/nacos-group/r-nacos/releases/tag/v0.2.0) 2023-07-03
Released by @github-actions[bot] on 2023-07-03T15:54:40Z

## What's Changed
* Added Loadtest feature by @heqingpan in https://github.com/heqingpan/rnacos/pull/5
* Added Clippy and fmt by @heqingpan in https://github.com/heqingpan/rnacos/pull/6


**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.10...v0.2.0

## [v0.1.10](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.10) 2023-06-18
Released by @github-actions[bot] on 2023-06-18T16:10:12Z

## What's Changed
* Development updates by @heqingpan in https://github.com/heqingpan/rnacos/pull/4

## New Contributors
* @heqingpan made their first contribution in https://github.com/heqingpan/rnacos/pull/4

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.9...v0.1.10

## [v0.1.9](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.9) 2023-06-10
Released by @github-actions[bot] on 2023-06-10T10:56:49Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.8...v0.1.9

## [v0.1.8](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.8) 2023-06-01
Released by @github-actions[bot] on 2023-06-01T14:08:59Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.7...v0.1.8

## [v0.1.7](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.7) 2023-05-31
Released by @github-actions[bot] on 2023-05-31T16:11:34Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.6...v0.1.7

## [v0.1.6-3](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.6-3) 2023-05-30
Released by @github-actions[bot] on 2023-05-30T16:11:34Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.6-2...v0.1.6-3

## [v0.1.6-2](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.6-2) 2023-05-29
Released by @github-actions[bot] on 2023-05-29T15:12:05Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.6...v0.1.6-2

## [v0.1.6](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.6) 2023-05-28
Released by @github-actions[bot] on 2023-05-28T15:02:38Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.5...v0.1.6

## [v0.1.5](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.5) 2023-05-19
Released by @github-actions[bot] on 2023-05-19T15:29:52Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.4...v0.1.5

## [v0.1.5-beta2](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.5-beta2) 2023-05-15
Released by @github-actions[bot] on 2023-05-15T16:38:24Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.4...v0.1.5-beta2

## [v0.1.4](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.4) 2023-05-11
Released by @github-actions[bot] on 2023-05-11T17:28:22Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.3...v0.1.4

v0.1.4

1. Fixed the heartbeat registration issue in version 2.0, the registry now supports maintaining heartbeat uniformly via gRPC.
2. The configuration center supports importing configuration files, and the configuration files are compatible with the nacos format. (Export functionality will be supported in future versions.)

## [v0.1.3](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.3) 2023-05-07
Released by @github-actions[bot] on 2023-05-07T15:48:13Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.2...v0.1.3

## [v0.1.2](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.2) 2023-05-06
Released by @github-actions[bot] on 2023-05-06T16:27:51Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.1...v0.1.2

## [v0.1.1](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.1) 2023-05-05
Released by @github-actions[bot] on 2023-05-05T17:06:37Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.0...v0.1.1

## [v0.1.0.beta3](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.0.beta3) 2023-05-05
Released by @github-actions[bot] on 2023-05-05T14:50:50Z

**Full Changelog**: https://github.com/heqingpan/rnacos/compare/v0.1.0.beta2...v0.1.0.beta3

## [v0.1.0.beta2](https://github.com/nacos-group/r-nacos/releases/tag/v0.1.0.beta2) 2023-05-03
Released by @github-actions[bot] on 2023-05-03T17:15:16Z

**Full Changelog**: https://github.com/heqingpan/rnacos/commits/v0.1.0.beta2
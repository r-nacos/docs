# Data Backup and Migration Management

r-nacos utilizes a custom distributed file storage system, which is not very user-friendly for data management by default.

To enhance user experience in managing and utilizing data within r-nacos, we plan to introduce language-independent intermediate data files as data carriers. This will facilitate bidirectional migration between r-nacos system data and general database data.

## 1. Data Backup

### 1.1 Manual Data Backup

Administrators can manually perform data backups by selecting `Export Data` on the `Console > Data Migration Page`.

### 1.2 Automatic Data Backup

1. Enable the data backup interface by configuring the `RNACOS_BACKUP_TOKEN` parameter. By default, the backup data token is empty, meaning the feature is disabled.

2. Data Backup HTTP Interface Details

Interface Path

```
GET /rnacos/backup
```

Parameters:
```
token: Access token, which must match the `RNACOS_BACKUP_TOKEN` configured in r-nacos.
```

Example Call:

```sh
curl -o backup.data 'http://127.0.0.1:8848/rnacos/backup?token=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx'
```

3. Schedule regular data backups by setting up cron jobs to call the backup interface.

Configure according to your specific needs, details omitted.

## 2. Data Recovery

Data recovery is an infrequent operation and must be performed manually by administrators via the console.

Administrators can manually restore data by selecting `Import Data` on the `Console > Data Migration Page`.
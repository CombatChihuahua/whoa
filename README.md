# whoa
This is a chrome browser extension.

The goal of this project is to help decide the user if s/he should trust a new
site or not. To help create trust, newly visited sites will be assessed against
multiple criteria, including:

* What is the actual domain name?
* How does the domain name match with the page title?
* How long has this site existed?
* Is it an IP address only or does it have a hostname?
* Where is the site physically located?
* Who registered the domain?
* Is the connection encrypted?
* Information about the certificate
* Any mismatch between the certificate and the site

Whenever a _new_ site is visited, an informational or warning banner will be
shown (depending on the severity of issues detected). The user will be asked
whether or not to add this site to their _circle of trust_.

If the site is trusted, it will be added to a trusted site list in local storage.
If not, it will be added to a blacklist in local storage.

If it is possible to report the site to, for example google or some other authority
that will also be done with untrusted sites.

Warnings will be BIG to avoid any chance that they will be missed. My sense is
that many security warnings in browsers are too subtle and are often overlooked
as a result. This needs to be the opposite of subtle, with an emphasis on the
consequences of accepting a potentially bad site.

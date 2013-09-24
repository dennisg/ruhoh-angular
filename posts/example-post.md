---
title: 'Example Post'
date: '2013-09-23'
description:
categories: ['example']
tags: ['example']
---

This example post content is dynamically loaded using angularJS.

Have a look at **_root/index.html**. It's layout is defined as 'angular' and thus
the theme's **layouts/angular.html** file is used as layout.

This loads some javascript (some provided by angular, an app.js and a controller/main.js)

Now, when clicking on any resource, we navigate to: {{#raw_code}}#/<resource>{{/raw_code}} 
instead of {{#raw_code}}/<resource>{{/raw_code}} This is picked-up by the angularJS router
which loads the ruhoh-pre-generated static content. Of course in a single page setup. 

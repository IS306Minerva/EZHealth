


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>phonegap-plugins/Android/LocalNotification/LocalNotification.js at master · phonegap/phonegap-plugins</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe112-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="740FA843:56EB:89A3F3:5246EE6D" name="octolytics-dimension-request_id" /><meta content="5562826" name="octolytics-actor-id" /><meta content="zaxes117" name="octolytics-actor-login" /><meta content="967b962ed4a493fdc53bc196951afc633ffb04c8e4b4d40cdcae974ac8fa6778" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="/xe79HEPGiEDTLhch9582z5AfLi46WJdbpwNxZx7VYk=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-4288f026700410ae032b5d324dea2b4571789d7c.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-88d5087029dbe346f413843c4cb0149921840ef5.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-4e5aeedcc7a86dcff8294cb84644a333b46202a2.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-3eca66e8d84a2ff6e7aa623a998827892eceb472.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="405a8aa4027641752499b79ebf1cb5a3">

        <link data-pjax-transient rel='permalink' href='/phonegap/phonegap-plugins/blob/d2436c42665d67a66d016c3d7d4840a71fd6fb2f/Android/LocalNotification/LocalNotification.js'>
  <meta property="og:title" content="phonegap-plugins"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/phonegap/phonegap-plugins"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="phonegap-plugins - Plugins for use with PhoneGap. "/>

  <meta name="description" content="phonegap-plugins - Plugins for use with PhoneGap. " />

  <meta content="60365" name="octolytics-dimension-user_id" /><meta content="phonegap" name="octolytics-dimension-user_login" /><meta content="968030" name="octolytics-dimension-repository_id" /><meta content="phonegap/phonegap-plugins" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="500437" name="octolytics-dimension-repository_parent_id" /><meta content="purplecabbage/phonegap-plugins" name="octolytics-dimension-repository_parent_nwo" /><meta content="500437" name="octolytics-dimension-repository_network_root_id" /><meta content="purplecabbage/phonegap-plugins" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/phonegap/phonegap-plugins/commits/master.atom" rel="alternate" title="Recent Commits to phonegap-plugins:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public fork  page-blob">
    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="zaxes117"
      data-repo="phonegap/phonegap-plugins"
      data-branch="master"
      data-sha="c2549704458d9f2f6ed26fd217e1549f044b80a5"
  >

    <input type="hidden" name="nwo" value="phonegap/phonegap-plugins" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/zaxes117" class="name">
        <img height="20" src="https://1.gravatar.com/avatar/5547253eeb25f9ebaed0947fbb9b30d0?d=https%3A%2F%2Fidenticons.github.com%2Fdef4590fae30b4ebb5b3f8951e5c5c5b.png&amp;s=140" width="20" /> zaxes117
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="phonegap/phonegap-plugins">This repository</span>
    </li>
    <li>
      <a href="/phonegap/phonegap-plugins/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="/xe79HEPGiEDTLhch9582z5AfLi46WJdbpwNxZx7VYk=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="968030" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/phonegap/phonegap-plugins/watchers">
          462
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/phonegap/phonegap-plugins/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/phonegap/phonegap-plugins/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/phonegap/phonegap-plugins/stargazers">3,584</a>
</div>

  </li>


        <li>
          <a href="/phonegap/phonegap-plugins/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/phonegap/phonegap-plugins/network" class="social-count">4,015</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo-forked"></span>
          <span class="author">
            <a href="/phonegap" class="url fn" itemprop="url" rel="author"><span itemprop="title">phonegap</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/phonegap/phonegap-plugins" class="js-current-repository js-repo-home-link">phonegap-plugins</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/purplecabbage/phonegap-plugins">purplecabbage/phonegap-plugins</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/phonegap/phonegap-plugins" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /phonegap/phonegap-plugins">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/phonegap/phonegap-plugins/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /phonegap/phonegap-plugins/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>458</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/phonegap/phonegap-plugins/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /phonegap/phonegap-plugins/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>128</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/phonegap/phonegap-plugins/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /phonegap/phonegap-plugins/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/phonegap/phonegap-plugins/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /phonegap/phonegap-plugins/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/phonegap/phonegap-plugins/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /phonegap/phonegap-plugins/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/phonegap/phonegap-plugins/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /phonegap/phonegap-plugins/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/phonegap/phonegap-plugins.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/phonegap/phonegap-plugins.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:phonegap/phonegap-plugins.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:phonegap/phonegap-plugins.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/phonegap/phonegap-plugins" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/phonegap/phonegap-plugins" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

              <a href="/phonegap/phonegap-plugins/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:965ebeecbc16938cb99796814b012b2a -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/phonegap/phonegap-plugins/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap/phonegap-plugins/blob/master/Android/LocalNotification/LocalNotification.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap/phonegap-plugins/tree/init/Android/LocalNotification/LocalNotification.js"
                 data-name="init"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="init">init</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap/phonegap-plugins/tree/PG141/Android/LocalNotification/LocalNotification.js"
                 data-name="PG141"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="PG141">PG141</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap/phonegap-plugins/tree/BasicCLforIOS/Android/LocalNotification/LocalNotification.js"
                 data-name="BasicCLforIOS"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="BasicCLforIOS">BasicCLforIOS</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/phonegap/phonegap-plugins/tree/AdPlugin-20100712/Android/LocalNotification/LocalNotification.js"
                 data-name="AdPlugin-20100712"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="AdPlugin-20100712">AdPlugin-20100712</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-plugins" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">phonegap-plugins</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-plugins/tree/master/Android" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Android</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-plugins/tree/master/Android/LocalNotification" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">LocalNotification</span></a></span><span class="separator"> / </span><strong class="final-path">LocalNotification.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="Android/LocalNotification/LocalNotification.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
      <img class="main-avatar" height="24" src="https://2.gravatar.com/avatar/1102395c1cbd093c36de8aaddd8c4b15?d=https%3A%2F%2Fidenticons.github.com%2Fc1de211e02911d355dd051685fdbbefa.png&amp;s=140" width="24" />
      <span class="author"><a href="/dvtoever" rel="author">dvtoever</a></span>
      <time class="js-relative-date" datetime="2012-02-08T04:31:44-08:00" title="2012-02-08 04:31:44">February 08, 2012</time>
      <div class="commit-title">
          <a href="/phonegap/phonegap-plugins/commit/0bf779f7c340ce8c6a26872fb859c572664fd2d8" class="message" data-pjax="true" title="Local Notifications for Android">Local Notifications for Android</a>
      </div>

      <div class="participation">
        <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
        
      </div>
      <div id="blob_contributors_box" style="display:none">
        <h2 class="facebox-header">Users who have contributed to this file</h2>
        <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/1102395c1cbd093c36de8aaddd8c4b15?d=https%3A%2F%2Fidenticons.github.com%2Fc1de211e02911d355dd051685fdbbefa.png&amp;s=140" width="24" />
            <a href="/dvtoever">dvtoever</a>
          </li>
        </ul>
      </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>84 lines (75 sloc)</span>
        <span>2.175 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/phonegap/phonegap-plugins/edit/master/Android/LocalNotification/LocalNotification.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/phonegap/phonegap-plugins/raw/master/Android/LocalNotification/LocalNotification.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/phonegap/phonegap-plugins/blame/master/Android/LocalNotification/LocalNotification.js" class="button minibutton ">Blame</a>
          <a href="/phonegap/phonegap-plugins/commits/master/Android/LocalNotification/LocalNotification.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/phonegap/phonegap-plugins/delete/master/Android/LocalNotification/LocalNotification.js"
               title="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*-</span></div><div class='line' id='LC2'><span class="cm"> * Phonegap LocalNotification Plugin for Android</span></div><div class='line' id='LC3'><span class="cm"> * </span></div><div class='line' id='LC4'><span class="cm"> * Created by Daniel van &#39;t Oever 2012 MIT Licensed</span></div><div class='line' id='LC5'><span class="cm"> * </span></div><div class='line' id='LC6'><span class="cm"> * Usage: </span></div><div class='line' id='LC7'><span class="cm"> * </span></div><div class='line' id='LC8'><span class="cm"> * plugins.localNotification.add({ date: new Date(), message: &#39;This is an Android alarm using the statusbar&#39;, id: 123 });</span></div><div class='line' id='LC9'><span class="cm"> * plugins.localNotification.cancel(123); </span></div><div class='line' id='LC10'><span class="cm"> * plugins.localNotification.cancelAll();</span></div><div class='line' id='LC11'><span class="cm"> * </span></div><div class='line' id='LC12'><span class="cm"> * This interface is similar to the existing iOS LocalNotification plugin created by Greg Allen</span></div><div class='line' id='LC13'><span class="cm"> */</span></div><div class='line' id='LC14'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">PhoneGap</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>	<span class="cm">/**</span></div><div class='line' id='LC17'><span class="cm">	 * Empty constructor</span></div><div class='line' id='LC18'><span class="cm">	 */</span></div><div class='line' id='LC19'>	<span class="kd">var</span> <span class="nx">LocalNotification</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC20'>	<span class="p">};</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'>	<span class="cm">/**</span></div><div class='line' id='LC23'><span class="cm">	 * Register a notification message for a specific date / time</span></div><div class='line' id='LC24'><span class="cm">	 * </span></div><div class='line' id='LC25'><span class="cm">	 * @param successCB</span></div><div class='line' id='LC26'><span class="cm">	 * @param failureCB</span></div><div class='line' id='LC27'><span class="cm">	 * @param options</span></div><div class='line' id='LC28'><span class="cm">	 *            Array with arguments. Valid arguments are date, message,</span></div><div class='line' id='LC29'><span class="cm">	 *            repeatDaily and id</span></div><div class='line' id='LC30'><span class="cm">	 */</span></div><div class='line' id='LC31'>	<span class="nx">LocalNotification</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">add</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>		<span class="kd">var</span> <span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC33'>			<span class="nx">date</span> <span class="o">:</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(),</span></div><div class='line' id='LC34'>			<span class="nx">message</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC35'>			<span class="nx">ticker</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC36'>			<span class="nx">repeatDaily</span> <span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC37'>			<span class="nx">id</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span></div><div class='line' id='LC38'>		<span class="p">};</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>		<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC41'>			<span class="nx">options</span><span class="p">.</span><span class="nx">date</span> <span class="o">=</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">())</span> <span class="o">+</span> <span class="s2">&quot;/&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getDate</span><span class="p">())</span> <span class="o">+</span> <span class="s2">&quot;/&quot;</span></div><div class='line' id='LC42'>					<span class="o">+</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">())</span> <span class="o">+</span> <span class="s2">&quot;/&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getHours</span><span class="p">())</span> <span class="o">+</span> <span class="s2">&quot;/&quot;</span></div><div class='line' id='LC43'>					<span class="o">+</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getMinutes</span><span class="p">());</span></div><div class='line' id='LC44'>		<span class="p">}</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>		<span class="k">for</span> <span class="p">(</span> <span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">defaults</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span></div><div class='line' id='LC48'>				<span class="nx">defaults</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC49'>		<span class="p">}</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>		<span class="nx">PhoneGap</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;LocalNotification&#39;</span><span class="p">,</span> <span class="s1">&#39;add&#39;</span><span class="p">,</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">defaults</span><span class="p">));</span></div><div class='line' id='LC52'>	<span class="p">};</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>	<span class="cm">/**</span></div><div class='line' id='LC55'><span class="cm">	 * Cancel an existing notification using its original ID.</span></div><div class='line' id='LC56'><span class="cm">	 * </span></div><div class='line' id='LC57'><span class="cm">	 * @param id</span></div><div class='line' id='LC58'><span class="cm">	 *            The ID that was used when creating the notification using the</span></div><div class='line' id='LC59'><span class="cm">	 *            &#39;add&#39; method.</span></div><div class='line' id='LC60'><span class="cm">	 */</span></div><div class='line' id='LC61'>	<span class="nx">LocalNotification</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">cancel</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">notificationId</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>		<span class="nx">PhoneGap</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;LocalNotification&#39;</span><span class="p">,</span> <span class="s1">&#39;cancel&#39;</span><span class="p">,</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">({</span></div><div class='line' id='LC63'>			<span class="nx">id</span> <span class="o">:</span> <span class="nx">notificationId</span></div><div class='line' id='LC64'>		<span class="p">}));</span></div><div class='line' id='LC65'>	<span class="p">};</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>	<span class="cm">/**</span></div><div class='line' id='LC68'><span class="cm">	 * Cancel all notifications that were created by your application.</span></div><div class='line' id='LC69'><span class="cm">	 */</span></div><div class='line' id='LC70'>	<span class="nx">LocalNotification</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">cancelAll</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC71'>		<span class="nx">PhoneGap</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;LocalNotification&#39;</span><span class="p">,</span> <span class="s1">&#39;cancelAll&#39;</span><span class="p">,</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">());</span></div><div class='line' id='LC72'>	<span class="p">};</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>	<span class="cm">/**</span></div><div class='line' id='LC75'><span class="cm">	 * Register this plugin with phonegap</span></div><div class='line' id='LC76'><span class="cm">	 */</span></div><div class='line' id='LC77'>	<span class="nx">PhoneGap</span><span class="p">.</span><span class="nx">addConstructor</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC78'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC79'>			<span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC80'>		<span class="p">}</span></div><div class='line' id='LC81'>		<span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">.</span><span class="nx">localNotification</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">LocalNotification</span><span class="p">();</span></div><div class='line' id='LC82'>	<span class="p">});</span></div><div class='line' id='LC83'><span class="p">}</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.03906s from github-fe112-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/phonegap/phonegap-plugins/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>


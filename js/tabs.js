/*
* Skeleton V1.1
* Copyright 2011, Dave Gamache
* www.getskeleton.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 8/17/2011
*/


jQuery('body').on('click', 'ul.tabs > li > a', function(e) {

    //Get Location of tab's content
    var contentLocation = jQuery(this).attr('href');

    //Let go if not a hashed one
    if(contentLocation.charAt(0)=="#") {

        e.preventDefault();

        //Make Tab Active
        jQuery(this).parent().siblings().children('a').removeClass('active');
        jQuery(this).addClass('active');

        //Show Tab Content & add active class
        jQuery(contentLocation).show().addClass('active').siblings().hide().removeClass('active');

    }
});
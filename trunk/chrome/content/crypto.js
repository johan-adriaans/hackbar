function isMD5(s) 
{
		return (/^[A-Fa-f0-9]{32}$/).test(s);
}

function isSHA1(s) 
{
		return (/^[A-Fa-f0-9]{40}$/).test(s);
}

function getClearTextPassword ( hash )
{
  var value = hackBar.getSelectedText();
  
  if ( (hash == "md5" && isMD5(value)) || (hash == "sha1" && isSHA1(value)))
  {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function (event) {
      var cleartext = "";
      cleartext = req.responseText;
      
      hackBar.setSelectedText( cleartext );
    }
    req.open('GET', 'http://md5.rednoize.com/?p&s='+ hash +'&q=' + value + '&hackbar=1.5.1', true);
    req.send(null);  
  }
  else
  {
    hackBar.setSelectedText( "To avoid sending private password to public databases only MD5 and SHA1 hashes will be submited" );
  }
  
  
}

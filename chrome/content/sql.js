function selectionToSQLChar ( dbEngine )
{
  var charStringArray = new Array;
  var txt = hackBar.getSelectedText();
  var decimal;
  for ( var c = 0 ; c < txt.length ; c++ ) {
    decimal = txt.charCodeAt( c );
    charStringArray.push( decimal );
  }

  var charString = '';

  switch ( dbEngine )
  {
    case "mysql":
      charString = 'CHAR(' + charStringArray.join(', ') + ')';
      break;
    case "mssql":
      charString = ' CHAR(' + charStringArray.join(') + CHAR(') + ')';
      break;
    case "oracle":
      charString = ' CHR(' + charStringArray.join(') || CHR(') + ')';
      break;
  }
  hackBar.setSelectedText( charString );
}

function selectionToUnionSelect ( encoding )
{
  var columns = prompt( "Amount of columns to use in the UNION SELECT Statement", "10" );
  columns = Math.min(1000, parseInt( columns ));
  var colArray = new Array();
  for ( var i = 0 ; i < columns ; i++ ) {
    colArray.push( i+1 );
  }
  var txt = "UNION SELECT " + colArray.join( ',' );
  hackBar.setSelectedText( txt );
}
/* GENERAL FUNCTIONS */

/* MYSQL FUNCTIONS */
function selectionMySQLConvertUsing ( encoding )
{
  var txt = hackBar.getSelectedText();
  txt = "CONVERT(" + txt + " USING " + encoding + ")";
  hackBar.setSelectedText( txt );
}

function selectionMySQLBasicInfo ()
{
  hackBar.setSelectedText( "CONCAT_WS(CHAR(32,58,32),user(),database(),version())" );
}
/* MYSQL FUNCTIONS */

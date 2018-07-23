<?php

$zwsid = "X1-ZWz18hammwkyrv_af1tq"
$prefixurl = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz18hammwkyrv_af1tq";
//X1-ZWz18hammwkyrv_af1tq";

//TODO prompt user for address
$addr = urlencode("879 W 23rd street");
$cit = urlencode("Los Angeles");
$stat = urlencode("CA");
$csz = $cit."%2C+".$stat;
$query = $prefixurl.$zwsid."&address=".$addr."&citystatezip=".$csz."&rentzestimate=true";
$s = simplexml_load_file(trim($query));
echo json_encode($s);
if($s)
echo "Success" else echo "Failure" 

echo $query;
$zestimate = money_format('%n',floatval($s->response->results->result->zestimate->amount)); 

?>
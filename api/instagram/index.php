<?php

$conn=mysql_connect('localhost','bpftiiy1_site','chintan123');
mysql_select_db('bpftiiy1_site',$conn);

// start Get last since id

$qr="SELECT `sinceid` FROM `activity` WHERE `type`=1 ORDER BY `createdtime` DESC LIMIT 0,1";
$since=mysql_query($qr,$conn);
$row = mysql_fetch_array($since);
$sinceid = $row['sinceid'];
if($sinceid=="")
{
    $sinceid=0;
}else{
    $sinceid = $row['sinceid'];
}

// end Get last since id

$access_token = "43118528.6e367f9.ede6ba4052b84d0a97504b7c511790f4";
if (1) {
  
   $max_id = $sinceid; 
   $maxid = "&min_tag_id=$max_id";
   
} 
//echo "https://api.instagram.com/v1/tags/GoodDeedMarathon/media/recent/?access_token=$access_token$maxid";

header('Content-Type: application/json');
$data = getCurldata("https://api.instagram.com/v1/tags/bpft2014/media/recent/?access_token=$access_token$maxid");

// instagram data storing 

$instadata=json_decode($data);
$len=sizeOf($instadata->data);
print_r($instadata);

//start storing instagram data in database
//if($instadata->pagination->next_max_id != "")
if(true)
{
for($i=0 ; $i<$len ; $i++)
    {
        $id=$instadata->pagination->next_min_id;
	$date = new DateTime();
	$date->format('U = Y-m-d H:i:s');
        $date->setTimestamp($instadata->data[$i]->created_time);
        $createtime=$date->format('Y-m-d H:i:s');
        $qr="INSERT INTO `activity`(`type`, `text`, `user`, `sinceid`, `image`, `createdtime`, `status`) VALUES (1,'".$instadata->data[$i]->caption->text."','".$instadata->data[$i]->user->username."','".$id."','".$instadata->data[$i]->images->standard_resolution->url."','".$createtime."',0)";
        
        mysql_query($qr,$conn);
        
        
        $username=$instadata->data[$i]->user->username;
        
        
        $qr="UPDATE `user` SET `points`=`points`+10 WHERE `instagram`='$username' ";
        
        mysql_query($qr,$conn);
        
        
    }
}

mysql_close($conn);

//end storing instagram data in database


function getCurldata($url) {
   $ch = curl_init();

   curl_setopt($ch, CURLOPT_HEADER, 0);
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //Set curl to return the data instead of printing it to the browser.
   curl_setopt($ch, CURLOPT_URL, $url);

   $data = curl_exec($ch);
   curl_close($ch);

   return $data;
}
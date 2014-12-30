<?php
date_default_timezone_set("Asia/Kolkata");
require 'scripts/tmhOAuth.php';
require 'scripts/tmhUtilities.php';

$conn=mysql_connect('localhost','bpftiiy1_site','chintan123');
mysql_select_db('bpftiiy1_site',$conn);

//Get last since id

$qr="SELECT `sinceid` FROM `activity` WHERE `type`=2 ORDER BY `createdtime` DESC LIMIT 0,1";
        $since=mysql_query($qr,$conn);
$row = mysql_fetch_array($since);
$sinceid = $row['sinceid'];
if($sinceid=="")
{
    $sinceid=531683952675659776;
}else{
    $sinceid = $row['sinceid'];
}


$tmhOAuth = new tmhOAuth(array(
   'consumer_key' => 'NxbPJjrZZmHXEKoaWuaQsrs1Q',
   'consumer_secret' => 'OQnOm5JQzLbHNUTVLQ8XKdxLpiSmSmbaL3dc8gEeLWsDOd2cyA',
   'user_token' => '121427044-TltvrL0LoR4hlcikW7h4Bji3S06AKxVVWCh9rl0N',
   'user_secret' => 'rIJQL4G8YtYSkZgSfahMCb18mEjuBr7vs2MUqhfTo3gsa',
       ));
       
       $code = $tmhOAuth->request('GET', $tmhOAuth->url('1.1/search/tweets.json'), array(
   'q' => '#bpft2014',
   "count" => "10",
   "lang" => "en",
   "result_type" => "all",
   "since_id" => $sinceid
       ));
    header('Content-Type: application/json');
    $data = json_decode($tmhOAuth->response['response']);
    $len=sizeOf($data->statuses);
   print_r($data);

//    insert posts on database

    for($i=0 ; $i<$len ; $i++)
    {
        $datetwit=strtotime($data->statuses[$i]->created_at);
	$date = new DateTime();
        $date->setTimestamp($datetwit);
        $datetime=$date->format('Y-m-d H:i:s');
        $id=$data->statuses[$i]->id_str;
        $qr="INSERT INTO `activity`(`type`, `text`, `user`, `sinceid`, `createdtime`, `status`) VALUES (2,'".$data->statuses[$i]->text."','".$data->statuses[$i]->user->screen_name."','".$id."','".$datetime."',0)";
        mysql_query($qr,$conn);
        $username=$data->statuses[$i]->user->screen_name;
        $qr="UPDATE `user` SET `points`=`points`+10 WHERE `twitter`='$username' ";
        mysql_query($qr,$conn);
    }

mysql_close($conn);


?>
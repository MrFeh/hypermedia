<?php
    //Connection to database
    $mysqli = new mysqli("localhost", "hypertim2016", "", "my_hypertim2016");

    //Check connection
    if(mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: ".mysqli_connect_error();
        exit();
    } else {
        $id = $_GET["id"];
		
		$query = "SELECT * FROM `assdevice` join `assistance` on `assid`=`id` WHERE `deviceid` ='" . $id . "'";
     
        $result = $mysqli->query($query);
    
    
        if($result->num_rows > 0) {
            $array = array();
            while($row = $result->fetch_array(MYSQL_ASSOC)) {
                $array[] = array_map("utf8_encode", $row);
			}
        	
            echo json_encode($array);
        } else {
            json_encode((object) null);
        }

        $result->close();

        $mysqli->close();
    
    }
?>
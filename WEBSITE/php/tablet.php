<?php
    //Connection to database
    $mysqli = new mysqli("localhost", "hypertim2016", "", "my_hypertim2016");

    //Check connection
    if(mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: ".mysqli_connect_error();
        exit();
    } else {
        $query = "SELECT * FROM `devices` WHERE `category`='tablet' ";

        $brand = $_POST['brand'];
        $range = $_POST['range'];
        $os = $_POST['os'];

        
        if(strlen($brand) > 0) {
			$query .= "AND `brand` IN ($brand) ";
        }
        
        if(strlen($range) > 0) {
            $query .= "AND `range` IN ($range) ";
        }
        
        if(strlen($os) > 0) {
            $query .= "AND `os` IN ($os) ";
        }
        
        
        
        $result = $mysqli->query($query);
    
    
        if($result->num_rows > 0) {
            $array = array();
            while($row = $result->fetch_array(MYSQL_ASSOC)) {
                $array[] = $row;
			}
        
            echo json_encode($array);
        } else {
            json_encode((object) null);
        }

        $result->close();

        $mysqli->close();
    
    }
?>
<?php
	$to = "contact@imtoolsbos.co.uk";
	
	$nameErr = "";
	$emailErr = "";
	$msgErr = "";
	
	function validate()
	{
		global $nameErr, $emailErr, $msgErr;
		
		if (empty($_POST['name']))
		{
			$nameErr = "You must include your name<br/>";
		}
		else if (!preg_match("/^[a-zA-Z ]*$/", $_POST['name']))
		{
			$nameErr = "Your name may only include letters and spaces<br/>";
		}
		
		if (empty($_POST['email']))
		{
			$emailErr = "You must include an E-Mail Address<br/>";
		}
		else if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
		{
			$emailErr = "Invalid E-Mail Format<br/>";
		}
		
		if (empty($_POST['message']))
		{
			$msgErr = "You must include a message<br/>";
		}
		
		return ($nameErr === "" and $emailErr === "" and $msgErr === "");
	}
	
	if (validate())
	{
		$from = $_POST['email'];
		$name = $_POST['name'];
		$subject = "[Website] " . $name;
		$message = $_POST['message'];
		$headers = "From:" . $from;
		
		mail($to,$subject,$message,$headers);
		
		echo "TRUE";
		echo "Thanks for getting in touch, your E-Mail has been sent<br/>We will contact you shortly";
	}
	else
	{
		echo "FALSE";
		echo $nameErr;
		echo $emailErr;
		echo $msgErr;
	}
?>
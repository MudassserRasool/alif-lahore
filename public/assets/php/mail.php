 <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"> -->

<script src="jquery-3.5.1.min.js"></script>
<script src="sweetalert2.all.min.js"></script>
<link rel="stylesheet" href="sweetalert.css">
<?php
if($_SERVER["REQUEST_METHOD"]=="POST")
{


if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];

$message="From:" .$name."\n\nEmail:"  .$email." \n\nMessage:\n\n".$message;
$recipient = "mudasserasool@gmail.com";
$mailheader = "From: $email \r\n";

     
 if(mail($recipient, $subject, $message, $mailheader) )
{
  echo '<script type="text/javascript">
        $(document).ready(function(e)
     {
        Swal.fire({

                 icon:"success",
                 confirmButtonColor:"#0069D9",
                 type: "success",
                 title: "Thank You!",
                 text: "Our team will contact you shortly.",
                 background:"none"



         }
          
         ).then((result) => {
   if (result.value) {
     window.location.href = `/blue mountain/index.html`
   }
 });

       });

       </script>';

 }
      else
      {
        echo '<script type="text/javascript">
     $(document).ready(function()
     {
        Swal.fire({
                 
                  type: "error",
                  icon:"error",
                  confirmButtonColor:"#0069D9",
                  title: "Email not sent",
                  text:"Something went wrong please try again."
                 


         }
         ).then((result) => {
   if (result.value) {
     window.location.href = `/blue mountain/index.html`
   }
 });

       });

      </script>';
      }
}
  
?>
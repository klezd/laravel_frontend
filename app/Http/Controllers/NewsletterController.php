<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $error = '';
        $responseText;
        if(isset($_POST['email'])) {
            $email = $_POST['email'];
            $check = preg_match("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i", $email);
            if ( $check ) { //TODO Logic for checking email
                $responseText = "<span class='res subscribe-success'><i class='fa fa-check'></i> Subscribed successfully!</span>";
            } else {
                $responseText = "<span class='res subscribe-fail'><i class='fa fa-times'></i> Fail to subscribe!</span>";
                $error = 'This is not an email';
            }
        } else {
            $responseText = "<span class='res subscribe-fail'><i class='fa fa-times'></i> Fail to subscribe!</span>";
            $error = "You haven't entered email!";

        }

        return response()->json(['status' => $responseText, 'error' =>$error]);
    }
}

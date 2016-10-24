function myHandler(request, response){
    /**
     * Do something, read data from the db, send HTTP requests to a remote server using XHR, read files from disk..
     */

    response.statusCode = 200; //the default value

    response.body = "My Response"; //You can also simply use return "My Response"
}
/*
 * Create by Mauricio I. Litvak
 */
import java.io.BufferedReader;
import java.net.URL;
import java.util.Scanner;
import java.net.HttpURLConnection;
import java.io.InputStreamReader;

import com.google.gson.JsonParser;
import com.google.gson.JsonArray;

public class StudioGhibliAPI {
    public static void main(String[] args) {
        try
        {
            URL url = new URL("https://ghibliapi.herokuapp.com/films/");
            HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();

            httpConn.setRequestMethod("GET");

            BufferedReader in = new BufferedReader(new InputStreamReader(httpConn.getInputStream()));

            System.out.println(httpConn.getResponseCode());
            System.out.println(httpConn.getResponseMessage());

            boolean finished = false;
            String movieList = "";

            while(!finished)
            {
                movieList = in.readLine();

                if (movieList == null)
                {
                    finished = true;
                }
                else
                {
                    String currentLine = "";
                    while((currentLine = in.readLine()) != null) {
                        movieList += currentLine;
                    }
                    JsonParser apiParser = new JsonParser();

                    JsonArray movieListArray = (JsonArray) apiParser.parse(movieList);

                    for(int i = 0; i < movieListArray.size(); i++)
                    {
                        System.out.println("Title: " + movieListArray.get(i).getAsJsonObject().get("title").getAsString());
                        System.out.println("Description: " + movieListArray.get(i).getAsJsonObject().get("description").getAsString());
                    }

                    Scanner scanner = new Scanner(System.in);
                    String userInput = "";

                    while (true)
                    {
                        System.out.print("Select a Movie or Quit: ");
                        String inputLine = scanner.nextLine();

                        if ("quit".equalsIgnoreCase(inputLine))
                        {
                            break;
                        }

                        else
                        {
                            userInput = inputLine;
                            for(int i = 0; i < movieListArray.size(); i++)
                            {
                                if (userInput.equalsIgnoreCase(movieListArray.get(i).getAsJsonObject().get("title").getAsString()))
                                {
                                    
                                    System.out.println("Title: " + movieListArray.get(i).getAsJsonObject().get("title").getAsString());
                                    System.out.println("Description: " + movieListArray.get(i).getAsJsonObject().get("description").getAsString());
                                    System.out.println("Release Date: " + movieListArray.get(i).getAsJsonObject().get("release_date").getAsString());
                                    System.out.println("Producer: " + movieListArray.get(i).getAsJsonObject().get("producer").getAsString());
                                    break;
                                }

                                else if ((i == movieListArray.size() - 1) && (!(userInput.equalsIgnoreCase(movieListArray.get(i).getAsJsonObject().get("title").getAsString()))))
                                {
                                    System.out.println("Movie not found");
                                }
                            }

                        }
                    }

                }

            }

        }
        catch (Exception e)
        {
            System.err.println("Error.");
            e.printStackTrace();
        } 
    }
}
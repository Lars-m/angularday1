package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import jsonmappers.Todo;

@Path("todo")
public class TodoService {
  
  private static List<Todo> todos;
  Gson gson = new GsonBuilder().setPrettyPrinting().create();

  @Context
  private UriInfo context;

  public TodoService() {
    if(todos != null){
      return;
    }
    todos = new ArrayList();
    todos.add(new Todo("Drink beers on friday"));
    todos.add(new Todo("Complete this exercise when the demo is over"));
    todos.add(new Todo("Have a nice holiday"));
        
  }

  
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String getJson() {
    return gson.toJson(todos);
  }

 
}

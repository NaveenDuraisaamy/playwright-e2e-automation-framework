import{test,expect} from '@playwright/test';
import { request } from 'http';

//Get
test("Get API",async({ request })=>{
  const response = await request.get("https://reqres.in/api/users?page=2");
  console.log("GET", await response.json());
  await expect(response.status()).toBe(200);
  
});

//Post
test("POST API",async({request})=>{

    const postRequest=await request.post("https://reqres.in/api/users",{

        data:{
            name:"morpheus",
            job:"leader"
        }
    })
    console.log("POST", await postRequest.json());
    await expect(postRequest.status()).toBe(201);
    
    var req=await postRequest.json();
    console.log(req.id);
})

//Put
test("PUT API", async ({ request }) => {
  const postRequests= await request.post("https://reqres.in/api/users/2", {
    data: {
      name: "morpheus",
      job: "leader",
    },
  });
  console.log("POST", await postRequests.json());
  await expect(postRequests.status()).toBe(201);

  var reqs = await postRequests.json();
  console.log(reqs.id);
});

//Delete
test("Delete",async({request})=>{

  const deleteOption=await request.delete("https://reqres.in/api/users/2");
  expect(deleteOption.status()).toBe(204);
})